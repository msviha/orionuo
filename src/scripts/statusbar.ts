/**
 * @internal
 */
namespace Scripts {
    export class Statusbar {
        static create(mobile?: GameObject | string, coordinates?: ICoordinates, autoCloseTimer?: number): void {
            if (!mobile) {
                Scripts.Utils.createGameObjectSelections([{ ask: 'Target mobile', addObject: 'lastCustomStatusBar' }]);
                mobile = Orion.FindObject('lastCustomStatusBar');
            } else if (mobile && typeof mobile === 'string') {
                mobile = Orion.FindObject(mobile);
            }

            if (!mobile) {
                return;
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
                autoCloseTimer: autoCloseTimer,
            };
            statusBars.push(statusBar);
            Shared.AddVar(serial, true);
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);

            const gump = Orion.CreateCustomGump(parseInt(serial, 16));

            coordinates && Scripts.Statusbar.moveCustomGump(serial, coordinates.x, coordinates.y);

            gump.SetCallback(`customStatusBarCallBack ${serial}`);

            Scripts.Statusbar.updateStatusBarGumpForObject(mobile, statusBar, gump, true);
        }

        static close(serial: string, gump?: CustomGumpObject) {
            const statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            const mobileKey = `${TimersEnum.statusBarTimer}_${serial}`;
            Shared.AddVar(serial, false);
            Orion.RemoveTimer(mobileKey);

            gump = gump ?? Orion.CreateCustomGump(parseInt(serial, 16));
            gump?.Clear();
            gump?.Close();

            for (let i = statusBars.length - 1; i > -1; i--) {
                if (statusBars[i].serial === serial) {
                    statusBars.splice(i, 1);
                }
            }
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
        }

        static exists(serial: string) {
            const statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            const exists = Shared.GetVar(serial, false);
            return exists && statusBars.some((a) => a.serial === serial);
        }

        static updateStatusbars() {
            const statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);

            for (const statusBar of statusBars) {
                if (!Shared.GetVar(statusBar.serial, true)) {
                    continue;
                }
                const gump = Orion.CreateCustomGump(parseInt(statusBar.serial, 16));
                const mobile = Orion.FindObject(statusBar.serial);

                if (Scripts.Statusbar.resolveAutoClose(statusBar, gump)) {
                    continue;
                }

                if (mobile) {
                    Scripts.Statusbar.updateStatusBarGumpForObject(mobile, statusBar, gump);
                } else if (statusBar.visible) {
                    statusBar.visible = false;
                    Scripts.Statusbar.redrawBodyToNoObject(statusBar, gump);
                }
            }
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
        }

        static resolveAutoClose(statusBar: any, gump: CustomGumpObject): boolean {
            const mobile = Orion.FindObject(statusBar.serial);
            const mobileKey = `${TimersEnum.statusBarTimer}_${statusBar.serial}`;
            const timerExists = Orion.TimerExists(mobileKey);

            if (statusBar.autoCloseTimer && statusBar.autoCloseTimer > 0 && !mobile) {
                if (!timerExists) {
                    Orion.SetTimer(mobileKey);
                } else if (Orion.Timer(mobileKey) > statusBar.autoCloseTimer) {
                    Scripts.Statusbar.close(statusBar.serial, gump);
                    return true;
                }
            } else if (timerExists) {
                Orion.RemoveTimer(mobileKey);
            }
            return false;
        }

        static resolveIndicators(mobile: GameObject): any[] {
            const targetIndicators = config?.statusBar?.targetIndicators ?? [];
            const result = [];
            for (const indicator of targetIndicators) {
                const clone = {
                    targetAlias: { alias: indicator.targetAlias?.alias },
                    color: indicator.color,
                    active: false,
                };
                const targetResult = TargetingEx.resolveTraget([<ITargetAlias>indicator.targetAlias]);

                clone.active =
                    mobile &&
                    mobile.Serial() &&
                    targetResult.isValid() &&
                    mobile.Serial() === targetResult.gameObject()?.Serial();
                result.push(clone);
            }
            return result;
        }

        static resolveActiveIndicators(statusBar: any): any[] {
            const result = [];
            for (const indicator of statusBar.targetIndicators) {
                if (indicator.active) {
                    result.push(indicator);
                }
            }
            return result;
        }

        static indicatorChanged(statusBar: any, indicators: any[]): boolean {
            if (!indicators || indicators.length <= 0) {
                return true;
            }
            return statusBar.targetIndicators.some((a) =>
                indicators.some((b) => b.targetAlias.alias === a.targetAlias.alias && b.active !== a.active),
            );
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

        static drawIndicators(gump: CustomGumpObject, flags: any[]) {
            let y = 3;
            for (const flag of flags) {
                Scripts.Statusbar.drawIndicator(gump, 140, y, flag.color);
                y += 6;
            }
        }

        static drawIndicator(gump: CustomGumpObject, x: number, y: number, color: string) {
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

        static setMobileArray(nearCharactersUpdate:GameObject[]) {
            let mobileArray:IMobile[] = Shared.GetArray('mobileArray', []);

            nearCharactersUpdate.forEach((gameObject) => {
                let found = false;
                mobileArray.forEach((mobile) => {
                    if (mobile.serial === gameObject.Serial()) {
                        mobile = {
                            serial: gameObject.Serial(),
                            notoriety: gameObject.Notoriety()
                        }
                        found = true;
                        return;
                    }
                });
                if (!found) {
                    mobileArray.push({
                        serial: gameObject.Serial(),
                        notoriety: gameObject.Notoriety()
                    });
                }
            });
            Shared.AddArray('mobileArray', mobileArray);
        }

        static closeStandardStatusBars(notoriety?:NotorietyEnum[], closeInactiveOnly = true) {
            let mobileArray:IMobile[] = Shared.GetArray('mobileArray', []);

            if (notoriety) {
                notoriety.forEach((n) => {
                    const notorietyNum = Scripts.Utils.getNotorietyNumberFromEnum(n);
                    mobileArray = mobileArray.filter((m) => {
                        return m.notoriety === notorietyNum
                    });
                });
            }

            if (closeInactiveOnly) {
                mobileArray = mobileArray.filter((m) => {
                    return !Orion.ObjectExists(m.serial);
                });
            }

            mobileArray.forEach((m) => {
                m.serial !== Player.Serial() && Orion.CloseStatusbar(m.serial);
            });
        }

        static statusAll(
            notoriery:NotorietyEnum[] = [],
            position = 'RightTop',
            id = 0,
            alwaysClear = false,
            offset = 5,
            shiftX = 0,
            shiftY = 0
        ) {
            const notorieties = notoriery.join('|');
            const nearCharacters = Orion.FindTypeEx('any', '0xFFFF', 'ground', 'mobile|ignoreself', 18, notorieties);

            let statusAllStatusBars = Shared.GetArray(`statusAllStatusBars${id}`, []);

            // clear the serials which was closed or all statusbars
            for (let i = statusAllStatusBars.length - 1; i >= 0; i--) {
                const serial = statusAllStatusBars[i];
                alwaysClear && Scripts.Statusbar.close(serial);
                !Scripts.Statusbar.exists(serial) && statusAllStatusBars.splice(i, 1);
            }
            alwaysClear && (statusAllStatusBars = []);

            // add the new characters around
            for (const char of nearCharacters) {
                statusAllStatusBars.indexOf(char.Serial()) === -1 && statusAllStatusBars.push(char.Serial());
            }

            const opened = [];
            const notOpened = [];
            let positionId = 0;

            // iterate the possible number of opened statusbars to sort the opened first
            // duplicate the array to know which statusbars still need to resolve their position
            const unresolvedStatusBars = [...statusAllStatusBars];
            for (let i = 0; i < statusAllStatusBars.length; i++) {
                const {x, y} = Scripts.Statusbar.getCoordinatesForStatusBar(position, positionId, shiftX, shiftY, offset);


                // find the opened and check which one is closest to next x,y coordinates
                let nearestStatusBarDistance = 999999; // big number
                let nearestStatusBarSerial:string;
                for (let j = 0; j < unresolvedStatusBars.length; j++) {
                    const serial = unresolvedStatusBars[j];
                    if (Scripts.Statusbar.exists(serial)) {
                        const position = Orion.GetGumpPosition('custom', serial);
                        if (position) {
                            const kotvaDistance = x + y;
                            const statusbarDistance = position.X() + position.Y();
                            const distance = kotvaDistance > statusbarDistance ? kotvaDistance - statusbarDistance : statusbarDistance - kotvaDistance;
                            if (distance < nearestStatusBarDistance) {
                                nearestStatusBarSerial = serial;
                                nearestStatusBarDistance = distance;
                            }
                        }
                    }
                }

                if (!nearestStatusBarSerial) {
                    notOpened.push(statusAllStatusBars[i]);
                    continue;
                }

                // else
                opened.push(nearestStatusBarSerial);

                const indexToRemove = unresolvedStatusBars.indexOf(nearestStatusBarSerial);
                indexToRemove > -1 && unresolvedStatusBars.splice(indexToRemove, 1);

                Scripts.Statusbar.moveCustomGump(nearestStatusBarSerial, x, y);
                positionId++; // increment just for opened statusbars
            }

            const newlyOpened = [];
            for (const serial of notOpened) {
                if (!Scripts.Statusbar.exists(serial) && !Orion.FindObject(serial)) {
                    continue;
                }
                const {x, y} = Scripts.Statusbar.getCoordinatesForStatusBar(position, positionId, shiftX, shiftY, offset);

                !Scripts.Statusbar.exists(serial) && Scripts.Statusbar.create(serial, {x, y});
                newlyOpened.push(serial);
                const gump = Orion.CreateCustomGump(parseInt(serial, 16));
                Scripts.Statusbar.moveCustomGump(serial, x, y);
                positionId++;
            }

            let openedStatusBars = [...opened, ...newlyOpened];
            Shared.AddArray(`statusAllStatusBars${id}`, openedStatusBars);
            const statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
        }

        static moveCustomGump(serial:string, x:number, y:number) {
            const gump = Orion.CreateCustomGump(parseInt(serial, 16));
            gump.SetX(x);
            gump.SetY(y);
            gump.Update();
        }

        static getCoordinatesForStatusBar(position:string, positionId:number, shiftX:number, shiftY:number, offset:number) {
            const scale = (config?.statusBar?.scale ?? 100) / 100;
            const barHeight = 42 * scale;
            const barWidth = 140 * scale;
            const gameWindowX = Orion.ClientOptionGet('GameWindowX');
            const gameWindowY = Orion.ClientOptionGet('GameWindowY');
            const gameWindowWidth = Orion.ClientOptionGet('GameWindowWidth');
            const gameWindowHeight = Orion.ClientOptionGet('GameWindowHeight');

            let x = 0;
            let y = 0;
            switch (position) {
                case 'RightTop':
                    x = gameWindowX + gameWindowWidth + shiftX;
                    y = (gameWindowY + shiftY) + ((barHeight + offset) * positionId);
                    break;
                case 'LeftTop':
                    x = gameWindowX - barWidth + shiftX;
                    y = (gameWindowY + shiftY) + ((barHeight + offset) * positionId);
                    break;
                case 'TopLeft':
                    x = gameWindowX + shiftX  + ((barWidth + offset) * positionId);
                    y = gameWindowY - barHeight + shiftY;
                    break;
                case 'BottomLeft':
                    x = gameWindowX + shiftX  + ((barWidth + offset) * positionId);
                    y = gameWindowY + gameWindowHeight + shiftY;
                    break;
                default:
                    break;
            }
            return {x, y};
        }

        static hoverCheck() {
            while (true) {
                Orion.Wait(50);
                const statusBar = Scripts.Statusbar.getHoveringStatusBar();
                if (!statusBar) {
                    Shared.AddVar('lastHighlightedStatusBar', undefined);
                    Orion.ClearHighlightCharacters();
                    continue;
                }
                const serial = statusBar.serial;
                const obj = Orion.FindObject(serial);
                if (!obj) {
                    continue;
                }
                const last = Shared.GetVar('lastHighlightedStatusBar', undefined);
                if (last !== serial) {
                    Orion.Print(serial);
                    Orion.ClearHighlightCharacters();
                    Shared.AddVar('lastHighlightedStatusBar', serial);
                    Orion.AddObject('highlightedStatusBar', serial);
                    Orion.AddHighlightCharacter(serial, Scripts.Utils.getColorByNotoriety(obj.Notoriety()));
                }
            }
        }
    }
}
