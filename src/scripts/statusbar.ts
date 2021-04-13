/**
 * @internal
 */
namespace Scripts {
    export class Statusbar {
        static create(mobile?: GameObject | string, coordinates?: ICoordinates): void {
            if (!mobile) {
                Scripts.Utils.createGameObjectSelections([{ ask: 'Target mobile', addObject: 'lastCustomStatusBar' }]);
                mobile = Orion.FindObject('lastCustomStatusBar');
            } else if (mobile && typeof mobile === 'string') {
                mobile = Orion.FindObject(mobile);
            }
            mobile = <GameObject>mobile;

            const serial = mobile.Serial();
            const name = mobile.Name();
            const max = mobile.MaxHits();
            const hp = mobile.Hits();
            const statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            const statusBar = {
                //Mozna udelat interface?
                serial,
                hp,
                max,
                name,
                poisoned: mobile.Poisoned(),
                visible: false,
                dead: mobile.Dead(),
                isLastAttack: mobile.Serial() === Orion.ClientLastAttack(),
                isLastTarget: mobile.Serial() === Orion.ClientLastTarget(),
                isLastStatus: mobile.Serial() === Orion.FindObject('laststatus')?.Serial()
            };
            statusBars.push(statusBar);
            Shared.AddVar(serial, true);
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);

            const gump = Orion.CreateCustomGump(parseInt(serial, 16));

            if (coordinates) {
                gump.SetX(coordinates.x);
                gump.SetY(coordinates.y);
                gump.Update();
            }

            gump.SetCallback(`customStatusBarCallBack ${serial}`);

            Scripts.Statusbar.updateStatusBarGumpForObject(mobile, statusBar, gump, true);
        }

        static updateStatusbars() {
            const statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);

            for (const statusBar of statusBars) {
                if (!Shared.GetVar(statusBar.serial, true)) {
                    continue;
                }
                const gump = Orion.CreateCustomGump(parseInt(statusBar.serial, 16));
                const mobile = Orion.FindObject(statusBar.serial);
                const mobileKey = `${TimersEnum.statusBarTimer}_${statusBar.serial}`;

                if (mobile) {
                    Scripts.Statusbar.updateStatusBarGumpForObject(mobile, statusBar, gump);
                } else  {
                    const autoCloseTimer = config?.statusBar?.autoCloseTimer ?? 10000;

                    if (autoCloseTimer > 0) {
                        const friendList = Orion.GetFriendList();
                        const enemyList = Orion.GetEnemyList();
                        let allwaysKeep = friendList.some((f) => f === statusBar.serial) || enemyList.some((f) => f === statusBar.serial);
                    
                        if (!allwaysKeep) {
                            const timerExists = Orion.TimerExists(mobileKey);
                            if (!timerExists) {
                                Orion.SetTimer(mobileKey);
                            } else if (Orion.Timer(mobileKey) > autoCloseTimer) {
                                Orion.RemoveTimer(mobileKey);
                                Shared.AddVar(statusBar.serial, false);
                                gump.Clear();
                                gump.Close();
                                continue;
                            }
                        }
                    }
                        
                    if (statusBar.visible) {
                        statusBar.visible = false;
                        Scripts.Statusbar.redrawBodyToNoObject(statusBar, gump);
                    }
                }
            }

            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
        }

        static resolveActiveFlags(statusBar:any):any[]  { 
            const result = [];

            if (statusBar.isLastAttack) {
                result.push({ color: '#ffe62a00' });
            }
            if (statusBar.isLastTarget) {
                result.push({ color: '#ff4169E1' });
            }
            if (statusBar.isLastStatus) {
                result.push({ color: '#ffFFD700' });
            }

            return result;
        }

        static updateStatusBarGumpForObject(
            mobile: GameObject,
            statusBar: any,
            gump: CustomGumpObject,
            forceUpdate = false,
        ) {
            let name = mobile.Name();
            name = name.length > 17 ? name.substr(0, 15) + '..' : name;
            const dead = mobile.Dead();
            const poisoned = mobile.Poisoned();
            let hp = mobile.Hits();
            let max = mobile.MaxHits();
            const isLastAttack = mobile.Serial() === Orion.ClientLastAttack();
            const isLastTarget = mobile.Serial() === Orion.ClientLastTarget();
            const isLastStatus = mobile.Serial() === Orion.FindObject('laststatus')?.Serial();     

            if (
                !forceUpdate &&
                statusBar.visible &&
                statusBar.dead === dead &&
                statusBar.hp === hp &&
                statusBar.max === max &&
                statusBar.name === name &&
                statusBar.poisoned === poisoned && 
                statusBar.isLastAttack === isLastAttack &&
                statusBar.isLastTarget === isLastTarget && 
                statusBar.isLastStatus === isLastStatus
            ) {
                return;
            }

            let updateText = false;
            const flagsChanged = statusBar.isLastAttack !== isLastAttack || statusBar.isLastTarget !== isLastTarget || statusBar.isLastStatus !== isLastStatus;
   
            // dead change state (ressurection)
            // visible ghost (turning warmode on)
            // flags change
            if (statusBar.dead !== dead || (!statusBar.visible && dead) || flagsChanged) {
                statusBar.dead = dead;
                statusBar.isLastAttack = isLastAttack;
                statusBar.isLastTarget = isLastTarget;
                statusBar.isLastStatus = isLastStatus;
                statusBar.visible = true;
                updateText = true;
                gump.Clear();
                Scripts.Statusbar.drawBody(gump, mobile.Notoriety(), dead);
                Scripts.Statusbar.drawFlags(gump, Statusbar.resolveActiveFlags(statusBar));
            }

            // FindObject returns something (object revealed / in range)
            if (!statusBar.visible) {
                statusBar.visible = true;
                updateText = true;
                gump.Clear();
                Scripts.Statusbar.drawBody(gump, mobile.Notoriety(), dead);
                Scripts.Statusbar.drawFlags(gump, Statusbar.resolveActiveFlags(statusBar));
            }

            // Update name
            if (statusBar.name !== name || updateText) {
                statusBar.name = name;
                Scripts.Statusbar.drawName(gump, name);
            }

            !max && (max = statusBar.max);
            hp < 0 && (hp = 0);

            // Update hp indication
            if (statusBar.hp !== hp || statusBar.max !== max || statusBar.poisoned !== poisoned || updateText) {
                statusBar.hp = hp;
                statusBar.max = max;
                statusBar.poisoned = poisoned;
                if (!updateText) {
                    gump.Clear();
                    Scripts.Statusbar.drawBody(gump, mobile.Notoriety(), dead);
                    Scripts.Statusbar.drawFlags(gump, Statusbar.resolveActiveFlags(statusBar));
                    Scripts.Statusbar.drawName(gump, name);
                }
                Scripts.Statusbar.drawHP(gump, hp, max, poisoned);
            }
            gump.Update();
        }

        static drawBody(gump: CustomGumpObject, notoriety?: number, dead = false) {
            const opacityPerc:number = config?.statusBar?.opacity ?? 100;
            const opacityStr = Math.floor(256 * (opacityPerc / 100)).toString(16);
            const opactiyLowStr = Math.floor(256 * (opacityPerc / 100) * 0.8).toString(16); 
            const borderColor = config?.statusBar?.borderColor ?? `#${opacityStr}3f3f3f`;

            const ARGBcolor = dead
                ? `#${opacityStr}ff4dff`
                : typeof notoriety === 'number'
                ? Scripts.Utils.getARGBColorByNotoriety(notoriety, opacityStr)
                : `#${opactiyLowStr}ffffff`;

                gump.AddColoredPolygone(0, 0, 140, 42, borderColor);
                gump.AddColoredPolygone(1, 1, 138, 40, `#${opacityStr}000000`);
                gump.AddColoredPolygone(1, 1, 138, 22, `#${opacityStr}a0a0a0`);
                gump.AddColoredPolygone(2, 2, 136, 21, ARGBcolor);                
                gump.AddHitBox(CustomStatusBarEnum.click, 0, 0, 140, 42, 1);
        }

        static drawFlags(gump: CustomGumpObject, flags:any[]) {
            let y = 3;


            for (const flag of flags) {
                Scripts.Statusbar.drawFlag(gump, 140, y, flag.color);
                y+=6; 
            }
        } 

        static drawFlag(gump: CustomGumpObject, x:number, y:number, color:string) {
            const borderColor = config?.statusBar?.borderColor ?? `#ff3f3f3f`;
            gump.AddColoredPolygone(x, y, 6, 6, borderColor);
            gump.AddColoredPolygone(x, y + 1, 5, 5, color);
        }         

        static redrawBodyToNoObject(s: any, gump: CustomGumpObject) {
            gump.Clear();
            Scripts.Statusbar.drawBody(gump, undefined, s.dead);
            Scripts.Statusbar.drawName(gump, s.name);
            Scripts.Statusbar.drawHP(gump, s.hp, s.max, s.poisoned);
            gump.Update();
        }

        static drawName(gump: CustomGumpObject, name) {
            gump.AddText(4, 2, '0', name, 0, 202);
        }

        static drawHP(gump: CustomGumpObject, hp: number, max: number, poisoned: boolean) {
            const lineLength = 138;
            const relative = lineLength / max;
            const current = hp * relative;
            const over = hp > max;
            const currentColor = poisoned ? '#00FF00' : Scripts.Utils.determineHpColorRGB((current * 100) / lineLength);

            gump.AddColoredPolygone(1, 24, over ? lineLength : current, 17, currentColor);
            gump.AddText(4, 23, ColorEnum.pureWhite, `${hp}/${max}`, 0, 201);
        }

        static getHoveringStatusBar(): any {
            const statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            const mousePosition = Orion.GetMousePosition();

            if (mousePosition?.X() && mousePosition?.Y()) {
                const mouseX = mousePosition?.X();
                const mouseY = mousePosition?.Y();

                for (const statusBar of statusBars) {
                    if (!Shared.GetVar(statusBar.serial, true)) {
                        continue;
                    }
                    const position = Orion.GetGumpPosition('custom', statusBar.serial);
                    const scale = (config?.statusBar?.scale ?? 100) / 100;
                    if (
                        position?.X() > -1 &&
                        position?.Y() > -1 &&
                        mouseX - position?.X() >= 0 &&
                        mouseX - position?.X() <= 140 * scale &&
                        mouseY - position?.Y() >= 0 &&
                        mouseY - position?.Y() <= 42 * scale &&
                        Orion.FindObject(statusBar.serial)?.Exists()
                    ) {
                        return statusBar;
                    }
                }
            }
            return null;
        }
    }
}
