namespace Scripts {
    export class Spells {
        /**
         * Scripts.Spells.cast
         * stability released
         *
         * @param spell nazev kouzla
         * @param target na koho ma kouzlit
         * @param forceCastInvalid novy target system v pripadne nevalidniho targetu vzdy vyhodi tercik, pro zachovani puvodniho chovani kouzleni i na waitTarget ktery neexistuje slouzi tento prepinac
         */
        static cast(spell: string, target?: TargetEnum | string, forceCastInvalid = true) {
            const targetResult = TargetingEx.getTarget(target);
            if (!targetResult.isValid() && forceCastInvalid && target) {
                Scripts.Utils.waitTarget(targetResult.gameObject()?.Serial());
            } else {
                targetResult.waitTarget();
            }
            Orion.Cast(spell);
        }

        /**
         * Scripts.Spells.summon
         *
         * vykouzli summona
         */
        static summon(creature: string, target?: TargetEnum | string) {
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
        static castScroll(scroll: ScrollEnum, target?: TargetEnum | string, backupHeadCast?: string) {
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
            Scripts.Utils.waitTarget(target);
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

        static backupHeadCast(reason: string, spell: string, target?: TargetEnum | string) {
            Scripts.Utils.playerPrint(reason + ' - backup cast', ColorEnum.orange);
            Scripts.Spells.cast(spell, target);
        }

        /**
         * CastScroll(NecroScrollEnum.vfp, TargetEnum.lastattack)
         * CastScroll('vfp', 'lastattack')
         * CastScroll('kalnox')
         */
        static castNecroScroll(scroll: NecroScrollEnum, target?: TargetEnum | string) {
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
            Scripts.Utils.waitTarget(target);
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

        static wos(scroll = false, timer = 70000) {
            const target = Scripts.Utils.waitTargetTileOrObject();
            if (!target) {
                return;
            }

            scroll ? Scripts.Spells.castScroll(ScrollEnum.wos) : Scripts.Spells.cast('Wall of Stone');
            Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
            const castResult = Scripts.Utils.waitWhileSomethingInJournal(
                ['Target is not in line of sight', 'The spell fizzles'],
                2500,
            );

            if (castResult === 0 || castResult === 1) {
                return;
            }

            // najdi stred zdi
            let timerObjectSerial = '';
            const walls = Orion.FindType('0x0080', '0x0000', 'ground', undefined, 18);
            let found = false;
            for (const serial of walls) {
                const o = Orion.FindObject(serial);
                if (o.X() === target.x && o.Y() === target.y) {
                    timerObjectSerial = serial;
                    found = true;
                    break;
                }
            }
            if (!found) {
                return;
            }
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

        static ef(self = false, scroll = false, timer = 70000) {
            let target: any = {};
            self ? Orion.WaitTargetObject('self') : (target = Scripts.Utils.waitTargetTileOrObject());
            scroll ? Scripts.Spells.castScroll(ScrollEnum.ef) : Scripts.Spells.cast('Energy Field');

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
                let keepChecking = true;
                let timer = 4500;
                const wait = 20;
                while (keepChecking && timer) {
                    Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
                    if (Orion.InJournal('Target is not in line of sight|The spell fizzles')) {
                        keepChecking = false;
                    }
                    const walls = Orion.FindType('0x3947', '0x0000', 'ground', undefined, 18);
                    let found = false;
                    for (const serial of walls) {
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
