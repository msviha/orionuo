/**
 * @internal
 */
namespace Scripts {
    export class Statusbar {
        static create(targetSerial?: string) {
            if (targetSerial === undefined) {
                Scripts.Utils.createGameObjectSelections([{ ask: 'Target mobile', addObject: 'lastCustomStatusBar' }]);
            }

            const o = Orion.FindObject(targetSerial ?? 'lastCustomStatusBar');
            const serial = o.Serial();
            const name = o.Name();
            const max = o.MaxHits();
            const hp = o.Hits();
            const statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            const s = {
                serial,
                hp,
                max,
                name,
                poisoned: o.Poisoned(),
                visible: false,
                dead: o.Dead(),
            };
            statusBars.push(s);
            Shared.AddVar(serial, true);
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);

            const gump = Orion.CreateCustomGump(parseInt(serial, 16));
            gump.SetCallback(`customStatusBarCallBack ${serial}`);

            Scripts.Statusbar.updateStatusBarGumpForObject(o, s, gump, true);
        }

        static updateStatusbars() {
            const statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);

            for (const s of statusBars) {
                if (!Shared.GetVar(s.serial, true)) {
                    continue;
                }
                const gump = Orion.CreateCustomGump(parseInt(s.serial, 16));
                const o = Orion.FindObject(s.serial);

                if (o) {
                    Scripts.Statusbar.updateStatusBarGumpForObject(o, s, gump);
                } else if (s.visible) {
                    s.visible = false;
                    Scripts.Statusbar.redrawBodyToNoObject(s, gump);
                }
            }

            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
        }

        static updateStatusBarGumpForObject(o: GameObject, s: any, gump: CustomGumpObject, forceUpdate = false) {
            const name = o.Name();
            const dead = o.Dead();
            const poisoned = o.Poisoned();
            let hp = o.Hits();
            let max = o.MaxHits();

            if (
                !forceUpdate &&
                s.visible &&
                s.dead === dead &&
                s.hp === hp &&
                s.max === max &&
                s.name === name &&
                s.poisoned === poisoned
            ) {
                return;
            }

            let updateText = false;

            // dead change state (ressurection)
            // visible ghost (turning warmode on)
            if (s.dead !== dead || (!s.visible && dead)) {
                s.dead = dead;
                s.visible = true;
                updateText = true;
                gump.Clear();

                const ARGBcolor = Scripts.Utils.getARGBColorByNotoriety(o.Notoriety(), 'cc');
                Scripts.Statusbar.drawBody(gump, o.Notoriety(), dead);
            }

            // FindObject returns something (object revealed / in range)
            if (!s.visible) {
                s.visible = true;
                updateText = true;
                gump.Clear();
                Scripts.Statusbar.drawBody(gump, o.Notoriety());
            }

            // Update name
            if (s.name !== name || updateText) {
                s.name = name;
                Scripts.Statusbar.drawName(gump, name);
            }

            !max && (max = s.max);
            hp < 0 && (hp = 0);

            // Update hp indication
            if (s.hp !== hp || s.max !== max || s.poisoned !== poisoned || updateText) {
                s.hp = hp;
                s.max = max;
                s.poisoned = poisoned;
                if (!updateText) {
                    gump.Clear();
                    Scripts.Statusbar.drawBody(gump, o.Notoriety());
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
            gump.AddColoredPolygone(0, 0, 170, 50, ARGBcolor);
            gump.AddHitBox(CustomStatusBarEnum.click, 0, 0, 170, 50, 1);
        }

        static redrawBodyToNoObject(s: any, gump: CustomGumpObject) {
            gump.Clear();
            Scripts.Statusbar.drawBody(gump);
            Scripts.Statusbar.drawName(gump, s.name);
            Scripts.Statusbar.drawHP(gump, s.hp, s.max, s.poisoned);
            gump.Update();
        }

        static drawName(gump: CustomGumpObject, name) {
            gump.AddText(10, 7, '0', `${name}`, 0, 202);
        }

        static drawHP(gump: CustomGumpObject, hp: number, max: number, poisoned: boolean) {
            const lineLength = 70;
            const relative = lineLength / max;
            const current = hp * relative;
            const over = hp > max;
            const currentColor = poisoned ? '#00FF00' : Scripts.Utils.determineHpColorRGB((current * 100) / lineLength);

            gump.AddText(10, 25, '0', `${hp}/${max}`, 0, 201);
            gump.AddColoredPolygone(89, 35, 72, 10, 'black');
            gump.AddColoredPolygone(90, 35, over ? lineLength : current, 10, currentColor);
        }
    }
}
