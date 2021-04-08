namespace Scripts {
    export class Potions {
        static getEmptyBottle(): string {
            const eb = gameObject.uncategorized.emptyBottles;
            const emptyBottles = Scripts.Utils.findFirstType(eb);
            if (!emptyBottles) {
                Scripts.Utils.log(`Nemas prazdne lahve`, ColorEnum.red);
                throw 'Nemas prazdne lahve';
            }
            return emptyBottles;
        }

        static getKadForPotion(potion: IPotion): string {
            let kad = Scripts.Utils.findFirstType(potion.kad);
            if (!kad) {
                const find = Orion.FindType(potion.kad.graphic, potion.kad.color, 'ground', 'near|item', 3);
                find.length && (kad = find[0]);
            }
            if (!kad) {
                Scripts.Utils.log(`Nemas kad s potionem`, ColorEnum.red);
                throw 'Nemas kad s potionem';
            }
            return kad;
        }

        /**
         * @param potionName nazev potionu, ktery je definovan jako klic v objectu o.potions
         * @param switchWarModeWhenNeeded prepne war, pokud je potreba docepnout
         * @param refillEmptyLimit pokud nelze pit prelije potion pokud je pocet prazdnych lahvicek vetsi nez limit, 0 = vypnuto, vychozi = 2
         * @param displayInvisLongTimer pro Destra a Srnku kteri maji timer 5min 30s
         */
        static drinkPotion(
            potionName: PotionsEnum,
            switchWarModeWhenNeeded = true,
            displayTimers = true,
            displayInfo = true,
            refillEmptyLimit = 0,
            displayInvisLongTimer = false,
        ) {
            if (!isPotionsEnum(potionName)) {
                return;
            }

            const p = gameObject.potions[potionName];
            let potion = Scripts.Utils.findFirstType(p);

            if (!potion) {
                // docepnuti
                Scripts.Potions.fillPotion(potionName, switchWarModeWhenNeeded);
                potion = Scripts.Utils.findFirstType(p);
                if (!potion) {
                    Scripts.Utils.playerPrint(`!! NEMAS [ ${potionName} ] !!`, ColorEnum.red);
                    return;
                }
            }

            // vypiti
            const succMsg = 'You put the empty bottle';
            const failMsg = 'drink another potion';
            const paraMsg = 'reach that';
            const messages = [succMsg, failMsg, paraMsg];
            const drinkTimer = 17500;
            const gsTimer = 130000;
            const invisTimer = 27000;
            const invisLongTimer = 328500;
            Orion.UseObject(potion);
            const m = Scripts.Utils.waitWhileSomethingInJournal(messages, 1000, 1000);

            if (m === 0) {
                const potionTimer = config?.drinkPotion.timer;
                displayTimers &&
                    Orion.AddDisplayTimer(
                        TimersEnum.drink,
                        drinkTimer,
                        potionTimer?.position || 'LeftTop',
                        potionTimer?.type || 'Line|Bar',
                        potionTimer?.text || 'Drink',
                        potionTimer?.xFromPosition || 0,
                        potionTimer?.yFromPosition || 0,
                        potionTimer?.textColor || '0x88B',
                        potionTimer?.font || 0,
                        potionTimer?.backgroundColor || '0x88B',
                    );
                Scripts.Utils.resetTimer(TimersEnum.drink);
                const potionsCount = Orion.Count(p.graphic, p.color);
                Scripts.Utils.playerPrint(
                    `[ ${potionName} ${potionsCount} ]`,
                    potionsCount === 0 ? ColorEnum.red : ColorEnum.green,
                );
                if (potionName === PotionsEnum.gs) {
                    const gsPotionTimer = config?.drinkPotion.gsTimer;
                    displayTimers &&
                        Orion.AddDisplayTimer(
                            TimersEnum.gs,
                            gsTimer,
                            gsPotionTimer?.position || 'LeftTop',
                            gsPotionTimer?.type || 'Line|Bar',
                            gsPotionTimer?.text || 'GS',
                            gsPotionTimer?.xFromPosition || 0,
                            gsPotionTimer?.yFromPosition || 55,
                            gsPotionTimer?.textColor || '0x88B',
                            gsPotionTimer?.font || 0,
                            gsPotionTimer?.backgroundColor || '0x88B',
                        );
                    Scripts.Utils.resetTimer(TimersEnum.gs);
                }
                if (potionName === PotionsEnum.invis) {
                    //Timeru na invisky je neomezeny pocet, dalsi vypiti neresetuje odhid ale akorat zacne novy timer na serveru

                    const invisPotionTimer = config?.drinkPotion.invisTimer;
                    for (let a = 0; a < 10; a++) {
                        const id = TimersEnum.invis + '_' + a;
                        if (Orion.DisplayTimerExists(id)) continue;

                        displayTimers &&
                            Orion.AddDisplayTimer(
                                id,
                                invisTimer,
                                invisPotionTimer?.position || 'LeftTop',
                                invisPotionTimer?.type || 'Line|Bar',
                                invisPotionTimer?.text || 'Invis',
                                (invisPotionTimer?.xFromPosition || 0) + a * 55,
                                invisPotionTimer?.yFromPosition || 110,
                                invisPotionTimer?.textColor || '0x88B',
                                invisPotionTimer?.font || 0,
                                invisPotionTimer?.backgroundColor || '0x88B',
                            );
                        break;
                    }
                    if (displayInvisLongTimer) {
                        const invisLongPotionTimer = config?.drinkPotion.invisLongTimer;
                        for (let a = 0; a < 10; a++) {
                            const id = TimersEnum.invisLong + '_' + a;
                            if (Orion.DisplayTimerExists(id)) continue;

                            displayTimers &&
                                Orion.AddDisplayTimer(
                                    id,
                                    invisLongTimer,
                                    invisLongPotionTimer?.position || 'LeftTop',
                                    invisLongPotionTimer?.type || 'Line|Bar',
                                    invisLongPotionTimer?.text || 'InvisL',
                                    (invisLongPotionTimer?.xFromPosition || 0) + a * 55,
                                    invisLongPotionTimer?.yFromPosition || 165,
                                    invisLongPotionTimer?.textColor || '0x88B',
                                    invisLongPotionTimer?.font || 0,
                                    invisLongPotionTimer?.backgroundColor || '0x88B',
                                );
                            break;
                        }
                    }
                    Orion.RemoveTimer(TimersEnum.gs);
                }

                displayInfo && Orion.Exec('displayDrinkInfo', false, [potionName.toString()]);
            } else if (m === 1) {
                const remainingTime = drinkTimer - Orion.Timer(TimersEnum.drink);
                remainingTime > 0 &&
                    Scripts.Utils.playerPrint(
                        `potion timer ${((drinkTimer - Orion.Timer(TimersEnum.drink)) / 1000).toFixed(2)}s`,
                        ColorEnum.red,
                    );

                if (
                    refillEmptyLimit &&
                    refillEmptyLimit &&
                    Orion.Count(
                        gameObject.uncategorized.emptyBottles.graphic,
                        gameObject.uncategorized.emptyBottles.color,
                    ) > refillEmptyLimit
                ) {
                    Scripts.Potions.fillPotion(potionName, switchWarModeWhenNeeded);
                }
            } else if (m === 2) {
                Scripts.Utils.playerPrint(`You can't reach that`, ColorEnum.orange);
            } else {
                Scripts.Utils.log('Nenalezena drink hlaska v journalu za posledni vterinu', ColorEnum.red);
            }
            Orion.ClearJournal(`${succMsg}|${failMsg}|${paraMsg}`);
        }

        static fillPotion(
            potionName: PotionsEnum,
            switchWarModeWhenNeeded = true,
            kadSerial?: string,
            emptyBottleSerial?: string,
        ) {
            if (!isPotionsEnum(potionName)) {
                return;
            }
            const p = gameObject.potions[potionName];
            const potionKad = kadSerial || Scripts.Potions.getKadForPotion(p);
            const emptyBottle = emptyBottleSerial || Scripts.Potions.getEmptyBottle();

            Orion.ClearJournal();
            Orion.WaitTargetObject(emptyBottle);
            Orion.UseObject(potionKad);
            Orion.Wait(responseDelay);

            if (Orion.InJournal('Pri praci s nadobou nemuzes delat neco')) {
                if (!switchWarModeWhenNeeded) {
                    Scripts.Utils.log('Nemuzes pit, kdyz neco delas', ColorEnum.red);
                    return;
                }
                Scripts.Utils.playerPrint('[War mode]', ColorEnum.red);
                Orion.WarMode(true);
                Orion.Wait(100);
                Orion.WaitTargetObject(emptyBottle);
                Orion.UseObject(potionKad);
                Orion.Wait(responseDelay);
            }
        }

        static potionToKad(potionName: PotionsEnum, switchWarModeWhenNeeded = true, kadSerial?: string) {
            if (!isPotionsEnum(potionName)) {
                return;
            }
            const p = gameObject.potions[potionName];
            const potionKad = kadSerial || Scripts.Potions.getKadForPotion(p);
            const potion = Scripts.Utils.findFirstType(p);

            if (!potion) {
                Scripts.Utils.log(`Nemas lahvicku s ${potionName}`, ColorEnum.red);
                throw 'err';
            }

            Orion.ClearJournal();
            Orion.WaitTargetObject(potion);
            Orion.UseObject(potionKad);
            Orion.Wait(responseDelay);
        }
    }
}
