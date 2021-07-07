namespace Scripts {
    export class Spells {
        /**
         * Scripts.Spells.cast
         * stability released
         *
         * @param spell nazev kouzla
         * @param target na koho ma kouzlit
         */
        static cast(spell: string, target?: string | TargetEnum | Array<ITargetAlias>, existingWaitTargetHook = false) {
            if (!existingWaitTargetHook) {
                const targetResult = TargetingEx.getTarget(target);
                if (targetResult.success()) {
                    targetResult.waitTarget();
                } else if (target) {
                    Utils.log(`Target not found: '${target}'`, ColorEnum.orange);
                }
            }
            Orion.Cast(spell);
        }

        /**
         * Scripts.Spells.summon
         *
         * vykouzli summona
         */
        static summon(creature: string, target?: string | TargetEnum | Array<ITargetAlias>) {
            Orion.CancelWaitMenu();
            Orion.WaitMenu('What do you want to summon', creature);
            Scripts.Spells.cast('Summ. Creature', target);
        }

        /**
         * Scripts.Spells.CastScroll
         * stability beta
         *
         * examples - with/without target
         * CastScroll(NecroScrollEnum.vfp, TargetEnum.lastattack)
         * CastScroll('vfp', 'lastattack')
         * CastScroll(ScrollEnum.ijs, TargetEnum.self)
         * CastScroll('ijs', 'self')
         * CastScroll(ScrollEnum.port)
         * CastScroll('port')
         */
        static castScroll(
            scroll: ScrollEnum,
            target?: string | TargetEnum | Array<ITargetAlias>,
            backupHeadCast?: string,
            existingWaitTargetHook = false
        ) {
            const s = gameObject.scrolls['standard'][scroll];

            if (s.minMana > Player.Mana()) {
                Scripts.Utils.playerPrint('!! MANA !!', ColorEnum.red);
                return;
            }

            if (Orion.Count(s.graphic) < 1) {
                const reason = 'NEMAS SVITKY';
                backupHeadCast
                    ? Scripts.Spells.backupHeadCast(reason, backupHeadCast, target)
                    : Scripts.Utils.playerPrint(reason, ColorEnum.red);
                return;
            }

            Orion.ClearJournal();
            !existingWaitTargetHook && TargetingEx.getTarget(target).waitTarget();
            Orion.UseType(s.graphic);
            Scripts.Utils.waitWhileSomethingInJournal(['Select Target', "You can't cast"]);

            if (Orion.InJournal('Select Target')) {
                s.timer &&
                    Orion.AddDisplayTimer('scroll', s.timer, 'AboveChar', 'bar', '', 0, 75, '0x100', 1, 'yellow');
            } else {
                const reason = 'TIMER';
                backupHeadCast
                    ? Scripts.Spells.backupHeadCast(reason, backupHeadCast, target)
                    : Scripts.Utils.playerPrint(reason, ColorEnum.red);
            }
        }

        static backupHeadCast(
            reason: string,
            spell: string,
            target?: string | TargetEnum | Array<ITargetAlias>,
            silent = true,
        ) {
            if (!silent) {
                Scripts.Utils.playerPrint(reason + ' - backup cast', ColorEnum.orange);
            }
            Scripts.Spells.cast(spell, target);
        }

        /**
         * CastScroll(NecroScrollEnum.vfp, TargetEnum.lastattack)
         * CastScroll('vfp', 'lastattack')
         * CastScroll('kalnox')
         */
        static castNecroScroll(scroll: NecroScrollEnum, target?: string | TargetEnum | Array<ITargetAlias>) {
            const s = gameObject.scrolls['necro'][scroll];

            if (s.minMana > Player.Mana()) {
                Scripts.Utils.playerPrint('!! MANA !!', ColorEnum.red);
                return;
            }

            const scrollSerial = Scripts.Utils.findFirstType(s);
            if (!scrollSerial) {
                Scripts.Utils.playerPrint('NEMAS SVITKY ' + scroll, ColorEnum.red);
                return;
            }

            Orion.ClearJournal();
            TargetingEx.getTarget(target).waitTarget();
            Orion.UseObject(scrollSerial);
            Scripts.Utils.waitWhileSomethingInJournal(['Select Target', "You can't cast"]);

            if (Orion.InJournal('Select Target')) {
                s.timer &&
                    Orion.AddDisplayTimer('scroll', s.timer, 'AboveChar', 'bar', '', 0, 75, '0x100', 1, 'yellow');
            } else {
                Scripts.Utils.playerPrint('TIMER', ColorEnum.red);
            }
        }

        /**
         * Scripts.Spells.castUntilSuccess
         * stability beta
         *
         * Kouzli tak dlouho, dokud se mu to nepovede, nebo nedojde mana
         */
        static castUntilSuccess(spell: string, target: TargetEnum, castTime: number) {
            do {
                Orion.WarMode(true);
                Orion.ClearJournal();
                Scripts.Spells.cast(spell, target);
                Orion.Wait(castTime);
            } while (Orion.InJournal('fizzles'));

            Orion.WarMode(true);
        }

        static wos(scroll = false, displayTimer = 70000) {
            const target = Scripts.Utils.waitTargetTileOrObject();
            if (!target) {
                return;
            }

            scroll ? Scripts.Spells.castScroll(ScrollEnum.wos) : Scripts.Spells.cast('Wall of Stone', undefined, true);

            if (target.mobile) {
                // nebudu slozite handlovat kde se ma zobrazit timer kdyz tam bude dira ve zdi a nechci aby byl nad hracem/mobile
                return;
            }

            Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
            const existingWalls = Orion.FindType('0x0080', '0x0000', 'ground', undefined, 18);
            let keepChecking = true;
            let timer = 2500;
            const wait = 20;
            let timerObjectSerial = '';
            while (keepChecking && timer) {
                Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
                if (Orion.InJournal('Target is not in line of sight|The spell fizzles')) {
                    keepChecking = false;
                }
                const walls = Orion.FindType('0x0080', '0x0000', 'ground', undefined, 18);
                const newWalls = walls.filter((i) => existingWalls.indexOf(i) === -1)
                let found = false;
                for (const serial of newWalls) {
                    const o = Orion.FindObject(serial);
                    if (o.X() === target.x && o.Y() === target.y) {
                        timerObjectSerial = serial;
                        found = true;
                        keepChecking = false;
                        break;
                    }
                }
                Orion.Wait(wait);
                timer -= wait;
            }

            const id = Math.random().toString();
            Orion.AddDisplayTimer(
                id,
                displayTimer,
                'AboveChar',
                'Rectangle',
                undefined,
                Orion.ClientOptionGet('GameWindowX'),
                Orion.ClientOptionGet('GameWindowY') + 30,
                'any',
                1,
                '0x000000FE',
            );
            Orion.DisplayTimerSetObject(id, timerObjectSerial);
        }

        static efMount(scroll = false, timer = 70000) {
            if (Orion.ObjAtLayer('Mount')) {
                Orion.UseObject('self');
                Orion.Wait(100);
            }
            const targetGameObject = Orion.FindObject('myMount');

            if (!targetGameObject) {
                Scripts.Utils.log('nemas zaregistrovane jezditko', ColorEnum.red);
                return;
            }

            Scripts.Spells.ef(false, scroll, timer, 'myMount');
        }

        static ef(self = false, scroll = false, timer = 70000, targetSerial?:string) {
            let target :any = {};
            if (targetSerial) {
                Orion.WaitTargetObject(targetSerial);
                const targetObject = Orion.FindObject(targetSerial);
                target = {
                    x: targetObject.X(),
                    y: targetObject.Y(),
                    z: targetObject.Z(),
                    mobile: targetObject.Mobile()
                }
            }
            else {
                if (self) {
                    Orion.WaitTargetObject('self');
                } else {
                    target = Scripts.Utils.waitTargetTileOrObject();
                    if (!target) {
                        return;
                    }
                }
            }

            scroll ?
                Scripts.Spells.castScroll(ScrollEnum.ef, undefined, undefined, true) :
                Scripts.Spells.cast('Energy Field', undefined, true);

            let timerObjectSerial = '';
            if (self) {
                let keepChecking = true;
                let timer = 5000;
                const wait = 20;
                while (keepChecking && timer) {
                    Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
                    if (Orion.InJournal('Target is not in line of sight|The spell fizzles')) {
                        keepChecking = false;
                    }
                    const walls = Orion.FindType('0x3947', '0x0000', 'ground', undefined, 0);
                    if (walls.length) {
                        timerObjectSerial = walls[0];
                        break;
                    }
                    Orion.Wait(wait);
                    timer -= wait;
                }
            } else {
                const existingWalls = Orion.FindType('0x3947|0x3956', '0x0000', 'ground', undefined, 18);
                let keepChecking = true;
                let timer = 4500;
                const wait = 20;
                while (keepChecking && timer) {
                    Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
                    if (Orion.InJournal('Target is not in line of sight|The spell fizzles')) {
                        keepChecking = false;
                    }
                    const walls = Orion.FindType('0x3947|0x3956', '0x0000', 'ground', undefined, 18);
                    const newWalls = walls.filter((i) => existingWalls.indexOf(i) === -1)
                    let found = false;
                    for (const serial of newWalls) {
                        const o = Orion.FindObject(serial);
                        if (o.X() === target.x && o.Y() === target.y) {
                            timerObjectSerial = serial;
                            found = true;
                            keepChecking = false;
                            break;
                        }
                    }
                    Orion.Wait(wait);
                    timer -= wait;
                }
            }

            if (timerObjectSerial) {
                const id = Math.random().toString();
                Orion.AddDisplayTimer(
                    id,
                    timer,
                    'AboveChar',
                    'Rectangle',
                    undefined,
                    Orion.ClientOptionGet('GameWindowX'),
                    Orion.ClientOptionGet('GameWindowY') + 30,
                    'any',
                    1,
                    '0x000000FE',
                );
                Orion.DisplayTimerSetObject(id, timerObjectSerial);
            }
        }
    }
}
