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
            const statusBar = {//Mozna udelat interface?
                serial,
                hp,
                max,
                name,
                poisoned: mobile.Poisoned(),
                visible: false,
                dead: mobile.Dead(),
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

                if (mobile) {
                    Scripts.Statusbar.updateStatusBarGumpForObject(mobile, statusBar, gump);
                } else if (statusBar.visible) {
                    statusBar.visible = false;
                    Scripts.Statusbar.redrawBodyToNoObject(statusBar, gump);
                }
            }

            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
        }

        static updateStatusBarGumpForObject(mobile: GameObject, statusBar: any, gump: CustomGumpObject, forceUpdate = false) {
            let name = mobile.Name();
            name = name.length > 17 ? name.substr(0, 15) + '..' : name;
            const dead = mobile.Dead();
            const poisoned = mobile.Poisoned();
            let hp = mobile.Hits();
            let max = mobile.MaxHits();

            if (
                !forceUpdate &&
                statusBar.visible &&
                statusBar.dead === dead &&
                statusBar.hp === hp &&
                statusBar.max === max &&
                statusBar.name === name &&
                statusBar.poisoned === poisoned
            ) {
                return;
            }

            let updateText = false;

            // dead change state (ressurection)
            // visible ghost (turning warmode on)
            if (statusBar.dead !== dead || (!statusBar.visible && dead)) {
                statusBar.dead = dead;
                statusBar.visible = true;
                updateText = true;
                gump.Clear();

                const ARGBcolor = Scripts.Utils.getARGBColorByNotoriety(mobile.Notoriety(), 'cc');
                Scripts.Statusbar.drawBody(gump, mobile.Notoriety(), dead);
            }

            // FindObject returns something (object revealed / in range)
            if (!statusBar.visible) {
                statusBar.visible = true;
                updateText = true;
                gump.Clear();
                Scripts.Statusbar.drawBody(gump, mobile.Notoriety());
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
                    Scripts.Statusbar.drawBody(gump, mobile.Notoriety());
                    Scripts.Statusbar.drawName(gump, name);
                }
                Scripts.Statusbar.drawHP(gump, hp, max, poisoned);
            }

            gump.Update();
        }

        static drawBody(gump: CustomGumpObject, notoriety?: number, dead = false) {
            const ARGBcolor = dead
                ? '#ffff4dff'
                : typeof notoriety === 'number'
                ? Scripts.Utils.getARGBColorByNotoriety(notoriety)
                : '#ccffffff';
            gump.AddColoredPolygone(0, 0, 140, 42, '#ff000000');
            gump.AddColoredPolygone(1, 1, 138, 22, '#ffffffff');
            gump.AddColoredPolygone(2, 2, 136, 21, ARGBcolor);
            gump.AddHitBox(CustomStatusBarEnum.click, 0, 0, 140, 42, 1);
        }

        static redrawBodyToNoObject(s: any, gump: CustomGumpObject) {
            gump.Clear();
            Scripts.Statusbar.drawBody(gump);
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

        static getHoveringStatusBar():any {
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

                    if (
                        position?.X() > -1 && 
                        position?.Y() > -1 && 
                        mouseX - position?.X() >= 0 &&
                        mouseX - position?.X() <= 140 && 
                        mouseY - position?.Y() >= 0 && 
                        mouseY - position?.Y() <= 42 &&
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
