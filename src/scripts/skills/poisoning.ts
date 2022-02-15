namespace Scripts {
    export class Poisoning {
        static getPoisonKitSerialFromBackpack():string {
            const kit = gameObject.tools.poisonKit;
            var poisonKitSerials = Orion.FindType(kit.graphic, kit.color, 'backpack');
            if (!poisonKitSerials.length) {
                Scripts.Utils.playerPrint('Poison kit nenalezen', ColorEnum.red);
                throw 'e';
            }
            return poisonKitSerials[0];
        }

        static getDeadlyKadSerialFromBackpack():string {
            const kad = gameObject.potions.dp.kad;
            var deadlyKadSerials = Orion.FindType(kad.graphic, kad.color, 'backpack');
            if (!deadlyKadSerials.length) {
                Scripts.Utils.playerPrint('Kad s Deadly poison nenalezena', ColorEnum.red);
                throw 'e';
            }
            return deadlyKadSerials[0];
        }

        static poisonGuns() {
            Orion.ClearJournal();

            Scripts.Utils.createGameObjectSelections([
                { ask: 'Kde sou verite zbrane?', addObject: 'sourceVeriteCont' },
                { ask: 'Kam dat poisnute zbrane?', addObject: 'targetPoisonedVeriteCont' },
            ]);

            let guns = Orion.FindType('any', '0x08A1', 'sourceVeriteCont');
            if (!guns.length) {
                Scripts.Utils.playerPrint('V pytliku nemas verite zbrane');
                return;
            }

            for (const gun of guns) {
                const canMove = Scripts.Poisoning.poisonGunSerial(gun);
                canMove && Orion.MoveItem(gun, 1, 'targetPoisonedVeriteCont');
                Orion.Wait(500);
            }
        }

        static poisonGunSerial(gun: string) {
            Scripts.Utils.worldSaveCheckWait();

            const poisonKitSerial = Scripts.Poisoning.getPoisonKitSerialFromBackpack();

            const successHlaska = 'Uspesne jsi otravil zbran';
            const failHlaska = 'Bohuzel, nepodarilo se ti otravit zbran';
            const lowHlaska = 'Nemas v kitu dostatek jedu';
            const notVeriteHlaska = 'Tohle neni ani kad, ani zbran';

            Orion.ClearJournal(`${successHlaska}|${failHlaska}|${lowHlaska}|${notVeriteHlaska}`);
            Orion.Wait(100);
            Orion.UseObject(poisonKitSerial);
            Orion.WaitForTarget();
            Orion.TargetObject(gun);
            const result = Scripts.Utils.waitWhileSomethingInJournal([successHlaska, failHlaska, lowHlaska, notVeriteHlaska]);

            // successHlaska
            if (result === 0) {
                return true;
            }
            // notVeriteHlaska
            if (result === 3) {
                return false;
            }

            // lowHlaska
            if (result === 2) {
                const deadlyKadSerial = Scripts.Poisoning.getDeadlyKadSerialFromBackpack();
                Orion.UseObject(poisonKitSerial);
                Orion.WaitForTarget();
                Orion.TargetObject(deadlyKadSerial);
            }

            // zkus znovu
            Orion.Wait(500);
            return Scripts.Poisoning.poisonGunSerial(gun);
        }

        static poisonLastAttack() {
            const kitSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.apprenticesPoisoningKit);
            if (kitSerial) {
                Orion.WarMode(true);
                Orion.Wait(50);
                Orion.WaitTargetObject(Orion.ClientLastAttack());
                Orion.UseObject(kitSerial);
            }
        }

        static poisonTrain(serialToPoison?: string) {
            if (!serialToPoison) {
                const mobiles = Orion.FindType(
                    'any',
                    'any',
                    'ground',
                    'fast|live|mobile|ignoreself',
                    1,
                    `${NotorietyEnum.red}|${NotorietyEnum.gray}`,
                );
                if (!mobiles.length) {
                    Scripts.Utils.playerPrint('neni tu nikdo na poison train', ColorEnum.red);
                    return;
                }
                serialToPoison = mobiles[0];
            }
            const kitSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.apprenticesPoisoningKit);
            if (kitSerial) {
                Orion.WarMode(true);
                Orion.WaitTargetObject(serialToPoison);
                Orion.UseObject(kitSerial);
            }
        }

        static poisonTrainAuto() {
            const kitSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.apprenticesPoisoningKit);
            if (!kitSerial) {
                Scripts.Utils.playerPrint('nemas poison kit na treneni', ColorEnum.red);
                return;
            }

            while (true) {
                if (Orion.InJournal('Kdyz se snazis')) {
                    Orion.WarMode(true);
                    Orion.ClearJournal();
                    Orion.Wait(responseDelay);
                }
                const targets = Orion.FindType(
                    'any',
                    'any',
                    'ground',
                    'fast|live|mobile|ignoreself',
                    1,
                    `${NotorietyEnum.red}|${NotorietyEnum.gray}`,
                );

                if (targets.length) {
                    const target = targets[0];
                    Orion.WaitTargetObject(target);
                    Orion.UseObject(kitSerial);
                }
                Orion.Wait(responseDelay);
            }
        }
    }
}
