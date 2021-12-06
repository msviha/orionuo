interface IScrollTimers {
    ivm:IScrollTimersMagery,
    regular:IScrollTimersMagery,
    bladeSpirit:IScrollTimersMagery,
    teleport:ITeleportTimerByChar
}

interface IScrollTimersMagery {
    [key:number]:number
}

interface ITeleportTimerByChar {
    [key:string]:ITeleportTimerType
}

interface ITeleportTimerType extends ITeleportTimerMoving {
    bonus?:ITeleportTimerMoving
}

interface ITeleportTimerMoving {
    moving:number,
    standing:number
}

enum ScrollTimerType {
    ivm = 'ivm',
    regular = 'regular',
    bladeSpirit = 'bladeSpirit',
    teleport = 'teleport',
}

const strollTimers:IScrollTimers = {
    ivm: {
        90: 5000,
        86: 8000,
        81: 11000,
        75: 16000,
        71: 18000,
        66: 19000,
        61: 22000,
        0: 25000
    },
    regular: {
        91: 5000,
        86: 8000,
        81: 12000,
        75: 15000,
        71: 19000,
        66: 22000,
        61: 25000,
        0: 28000
    },
    bladeSpirit: {
        96: 4000,
        75: 18000,
        0: 28000
    },
    teleport: {
        gangrel: {
            moving: 548500,
            standing: 11200,
            bonus: {
                moving: 14200,
                standing: 13500
            }
        },
        sharpshooter: {
            moving: 68226,
            standing: 14851,
            bonus: {
                moving: 14846,
                standing: 11684
            }
        },
        brujah: {
            moving: 14697,
            standing: 14015
        },
        medic: {
            moving: 548316,
            standing: 11403
        },
        cleric: {
            moving: 548027,
            standing: 11193
        },
        iskariot: {
            moving: 548400,
            standing: 11685
        },
        teuton: {
            moving: 551381,
            standing: 11347
        },
        paladin: {
            moving: 551381,
            standing: 11347
        },
        destoyer: {
            moving: 552564,
            standing: 11345
        },
        guardian: {
            moving: 552564,
            standing: 11345
        },
        witchHunter: {
            moving: 552564,
            standing: 11345
        },
        warrior: {
            moving: 552564,
            standing: 11345
        },
        mage: {
            moving: 4317,
            standing: 4315
        },
        necromancer: {
            moving: 4821,
            standing: 4318
        },
        druid: {
            moving: 4317,
            standing: 4318
        },
        shaman: {
            moving: 4316,
            standing: 4820
        },
        golemMaster: {
            moving: 823617,
            standing: 22873
        },
        magicMiner: {
            moving: 823617,
            standing: 22873
        },
        craftman: {
            moving: 823617,
            standing: 22873
        }
    }
};

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

            const journal = Scripts.Utils.waitWhileSomethingInJournal(["You can't cast", 'Select Target', 'Select ghost', 'An anti-magic field disturbs', 'You lack sufficient mana']);
            const scrollTimer = s.timerType ? Scripts.Spells.getScrollTimer(s.timerType) : s.timer;

            if (journal) {
                if (s.timerType != 'teleport') {
                    scrollTimer &&
                    Orion.AddDisplayTimer('scroll', scrollTimer, 'AboveChar', 'bar', '', 0, 75, '0x100', 1, 'yellow');
                }
                else {
                   Orion.AddDisplayTimer('teleport', scrollTimer, 'RightTop', 'Line|Bar', 'Teleport', 0, 265, '0x88B', 0, '0x88B');
                }
            }
            else {
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

            scroll ?
                Scripts.Spells.castScroll(ScrollEnum.wos, undefined, undefined, true) :
                Scripts.Spells.cast('Wall of Stone', undefined, true);

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

        static getScrollTimer(timerType:ScrollTimerType):number {
            if (timerType === ScrollTimerType.ivm || timerType === ScrollTimerType.regular || timerType === ScrollTimerType.bladeSpirit) {
                const currentMagery = Orion.SkillValue('Magery') / 10;
                const timer = strollTimers[timerType];
                for (const magery in timer) {
                    if (currentMagery >= parseInt(magery)) {
                        return timer[magery];
                    }
                }
            }
            else if (timerType === ScrollTimerType.teleport) {
                const character = Scripts.Utils.determineCharacter();
                if (!character) {
                    return 0;
                }

                const bonusItemObj = character === CharactersEnum.gangrel ?
                    gameObject.uncategorized.vampMystic :
                    character === CharactersEnum.sharpshooter ?
                        gameObject.uncategorized.teleporter :
                        undefined;
                const hasBonusItem = bonusItemObj ? !!Orion.FindType(bonusItemObj.graphic, bonusItemObj.color).length : false;

                const characterTimers = strollTimers.teleport[character];
                const standingTimer = hasBonusItem ? characterTimers.bonus.standing : characterTimers.standing;
                const movementTimer = hasBonusItem ? characterTimers.bonus.moving: characterTimers.moving;

                Orion.Exec('overwriteTeleportTimerWhenPlayerMoves', true, [movementTimer.toString(), standingTimer.toString()]);
                return standingTimer;
            }
            return 0;
        }
    }
}
