namespace Scripts {

    export class Potions {

        static getEmptyBottle():string {
            const emptyBottles = Orion.FindType(gameObject.uncategorized.emptyBottles.graphic, gameObject.uncategorized.emptyBottles.color);
            if (!emptyBottles.length) {
                Scripts.Utils.log(`Nemas prazdne lahve`, ColorEnum.red);
                throw 'Nemas prazdne lahve';
            }
            return emptyBottles[0];
        }

        static getKadForPotion(potion:IPotion):string {
            const kade = Orion.FindType(potion.kad.graphic, potion.kad.color);
            if (!kade.length) {
                Scripts.Utils.log(`Nemas kad s potionem`, ColorEnum.red);
                throw 'Nemas kad s potionem';
            }
            return kade[0];
        }

        static getPotion(potion:IPotion):string|false {
            const potions = Orion.FindType(potion.graphic, potion.color);
            if (!potions.length) {
                return false;
            }
            return potions[0];
        }

        static getMortar():string {
            const mortars = Orion.FindType(gameObject.uncategorized.mortar.graphic, gameObject.uncategorized.mortar.color);
            if (!mortars.length) {
                Scripts.Utils.log(`Nemas mortar`, ColorEnum.red);
                throw 'Nemas mortar';
            }
            return mortars[0];
        }

        /**
         * @param potionName nazev potionu, ktery je definovan jako klic v objectu o.potions
         * @param switchWarModeWhenNeeded prepne war, pokud je potreba docepnout
         */
        static drinkPotion(potionName:PotionsEnum, switchWarModeWhenNeeded = true) {
            if (!isPotionsEnum(potionName)) {
                return;
            }

            const p = gameObject.potions[potionName];
            let potion = Scripts.Potions.getPotion(p);

            if (!potion) {
                //docepnuti
                const potionKad = Scripts.Potions.getKadForPotion(p);
                const emptyBottle = Scripts.Potions.getEmptyBottle();

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

                potion = Scripts.Potions.getPotion(p);
                if (!potion) {
                    Scripts.Utils.playerPrint(`!! NEMAS [ ${potionName} ] !!`, ColorEnum.red);
                    return
                }
            }

            // vypiti
            Orion.UseObject(potion);
            Orion.Wait(responseDelay);
            if (Orion.InJournal('You put the empty bottless')) {
                Orion.AddDisplayTimer(TimersEnum.drink, 18000, 'RightTop', 'Circle', 'Drink potion', 0, 0, '0x100', 0, 'red');
                Scripts.Utils.resetTimer(TimersEnum.drink);
                const potionsCount = Orion.Count(p.graphic, p.color);
                Scripts.Utils.playerPrint(`[ ${potionName} ${potionsCount} ]`, potionsCount === 0 ? ColorEnum.red : ColorEnum.green);
            }
        }

        static gmMortar(potionName:PotionsEnum) {
            if (!isPotionsEnum(potionName)) {
                return;
            }

            const p = gameObject.potions[potionName];
            const cilovaKadSerial = Scripts.Potions.getKadForPotion(p);

            const isEmptyKad = Orion.FindType(gameObject.uncategorized.emptyKad.graphic, gameObject.uncategorized.emptyKad.color);
            if (!isEmptyKad) {
                Scripts.Utils.log('Nemas praznou kad', ColorEnum.red);
                return;
            }

            Scripts.Utils.playerPrint(`Target gmmortar for making "${potionName}"`);
            Orion.WaitForAddObject('gmMortar', 60000);

            while (true) {
                Orion.ClearJournal();

                const kadePrevious = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);

                Scripts.Utils.selectMenu('Vyber typ potionu', [p.gmMortarSelection]);
                Orion.UseObject('gmMortar');
                Scripts.Utils.waitWhileSomethingInJournal(['You vylil', 'Musis mit']);
                if (Orion.InJournal('Musis mit')) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return;
                }

                const kadeNew = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);
                const michnutaKadSerial = kadeNew.filter(i => kadePrevious.indexOf(i) === -1)[0];

                Orion.ClearJournal();
                Orion.WaitTargetObject(cilovaKadSerial);
                Orion.UseObject(michnutaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['Prelil jsi']);

                Orion.ClearJournal();
                const emptyBottle = Scripts.Potions.getEmptyBottle();
                Orion.WaitTargetObject(emptyBottle);
                Orion.UseObject(michnutaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['You put']);

                Orion.ClearJournal();
                Orion.WaitTargetType(p.graphic, p.color);
                Orion.UseObject(cilovaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['You put']);
            }
        }

        static michani(potionName:PotionsEnum) {
            if (!isPotionsEnum(potionName)) {
                return;
            }

            const p = gameObject.potions[potionName];
            const mortar = Scripts.Potions.getMortar();

            while (true) {
                Orion.ClearJournal();

                Scripts.Utils.selectMenu('Vyber typ potionu', [p.alchemySelection]);
                Orion.UseObject(mortar);

                Scripts.Utils.waitWhileSomethingInJournal(['You completed', 'You toss', 'Nemas dostatecny']);

                if (Orion.InJournal('Nemas dostatecny')) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return;
                }

                if (Orion.InJournal('You toss')) {
                    continue;
                }

                Orion.ClearJournal();
                Orion.UseObject(mortar);
                Scripts.Utils.waitWhileSomethingInJournal(['You pour']);

                Orion.ClearJournal();
                const potion = <string>Scripts.Potions.getPotion(p);
                const kad = Scripts.Potions.getKadForPotion(p);
                Orion.WaitTargetObject(potion);
                Orion.UseObject(kad);
                Scripts.Utils.waitWhileSomethingInJournal(['You put']);
            }
        }

    }

}
