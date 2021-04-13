/**
 * @internal
 */
namespace Scripts {
    export class Statusbar {
        static create(mobile?: GameObject | string, coordinates?: ICoordinates, autoCloseTimer?:number): void {
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
                targetIndicators: Statusbar.resolveIndicators(mobile),
                autoCloseTimer: autoCloseTimer
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
                    const timerExists = Orion.TimerExists(mobileKey);
                    if (timerExists) {
                        Orion.RemoveTimer(mobileKey);
                    }
                    Scripts.Statusbar.updateStatusBarGumpForObject(mobile, statusBar, gump);
                } else  {

                    if (statusBar.autoCloseTimer && statusBar.autoCloseTimer > 0) {
                        const timerExists = Orion.TimerExists(mobileKey);
                        if (!timerExists) {
                            Orion.SetTimer(mobileKey);
                        } else if (Orion.Timer(mobileKey) > statusBar.autoCloseTimer) {
                            Orion.RemoveTimer(mobileKey);
                            Shared.AddVar(statusBar.serial, false);
                            gump.Clear();
                            gump.Close();
                            continue;
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

        static resolveIndicators(mobile:GameObject):any[]  { 
            const targetIndicators = config?.statusBar?.targetIndicators ?? [];
            for (const indicator of targetIndicators) {
                indicator.active = mobile.Serial() === TargetingEx.resolveTraget([ <ITargetAlias>indicator.targetAlias ]).gameObject()?.Serial();
            }
            return targetIndicators;
        }        

        static resolveActiveIndicators(statusBar:any):any[]  { 
            const result = [];
            for (const indicator of statusBar.targetIndicators) {
                if (indicator.active) {
                    result.push(indicator);
                }
            }
            return result;
        }

        static indicatorChanged(statusBar:any, indicators:any[]):boolean {
            return statusBar.targetIndicators.some(a=>indicators.some(b=>b.targetAlias.alias===a.targetAlias.alias && b.active !== a.active));
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
            const currentIndicators = Statusbar.resolveIndicators(mobile);
            const indicatorsChanged = Statusbar.indicatorChanged(statusBar, currentIndicators);

            if (
                !forceUpdate &&
                statusBar.visible &&
                statusBar.dead === dead &&
                statusBar.hp === hp &&
                statusBar.max === max &&
                statusBar.name === name &&
                statusBar.poisoned === poisoned &&  
                !indicatorsChanged
            ) {
                return;
            }

            let updateText = false;
   
            // dead change state (ressurection)
            // visible ghost (turning warmode on)
            // flags change
            if (statusBar.dead !== dead || (!statusBar.visible && dead) || indicatorsChanged) {
                statusBar.dead = dead;
                statusBar.targetIndicators = currentIndicators;
                statusBar.visible = true;
                updateText = true;
                gump.Clear();
                Scripts.Statusbar.drawBody(gump, mobile.Notoriety(), dead);
                Scripts.Statusbar.drawIndicators(gump, Statusbar.resolveActiveIndicators(statusBar));
            }

            // FindObject returns something (object revealed / in range)
            if (!statusBar.visible) {
                statusBar.visible = true;
                updateText = true;
                gump.Clear();
                Scripts.Statusbar.drawBody(gump, mobile.Notoriety(), dead);
                Scripts.Statusbar.drawIndicators(gump, Statusbar.resolveActiveIndicators(statusBar));
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
                    Scripts.Statusbar.drawIndicators(gump, Statusbar.resolveActiveIndicators(statusBar));
                    Scripts.Statusbar.drawName(gump, name);
                }
                Scripts.Statusbar.drawHP(gump, hp, max, poisoned);
            }
            gump.Update();
        }

        static drawBody(gump: CustomGumpObject, notoriety?: number, dead = false) {
            const borderColor = config?.statusBar?.borderColor ?? `#ff3f3f3f`;

            const ARGBcolor = dead
                ? `#ffff4dff`
                : typeof notoriety === 'number'
                ? Scripts.Utils.getARGBColorByNotoriety(notoriety)
                : `#ccffffff`;

                gump.AddColoredPolygone(0, 0, 140, 42, borderColor);
                gump.AddColoredPolygone(1, 1, 138, 40, `#ff000000`);
                gump.AddColoredPolygone(1, 1, 138, 22, `#ffa0a0a0`);
                gump.AddColoredPolygone(2, 2, 136, 21, ARGBcolor);                
                gump.AddHitBox(CustomStatusBarEnum.click, 0, 0, 140, 42, 1);
        }

        static drawIndicators(gump: CustomGumpObject, flags:any[]) {
            let y = 3;
            for (const flag of flags) {
                Scripts.Statusbar.drawIndicator(gump, 140, y, flag.color);
                y+=6; 
            }
        } 

        static drawIndicator(gump: CustomGumpObject, x:number, y:number, color:string) {
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
