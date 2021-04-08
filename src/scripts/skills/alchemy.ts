const reagentsContainerName = 'kandown/alchemy/reagentsContainerName';

type Potion = {
    graphic: string;
    kad: IMyGameObject;
    reagent: string;
    alchemySelection: string;
    reagentsCount: number;
};

namespace Scripts {
    export class Alchemy {
        static getMortar(): string {
            const mortars = Orion.FindType(gameObject.uncategorized.mortar.graphic);
            if (!mortars.length) {
                Scripts.Utils.log(`Nemas mortar`, ColorEnum.red);
                throw 'Nemas mortar';
            }
            return mortars[0];
        }

        static mixOne(p: Potion | string) {
            const potion = typeof p === 'string' ? gameObject.potions[p] : p;
            const mortar = this.getMortar();
            const reagent = gameObject.regy[potion.reagent] || gameObject.necroRegy[potion.reagent];
            Scripts.Utils.worldSaveCheckWait();
            Orion.ClearJournal();

            Scripts.Utils.playerPrint(`Mixing ${potion.alchemySelection}`);
            Scripts.Utils.selectMenu('Vyber typ potionu', [potion.alchemySelection]);
            Orion.UseObject(mortar);

            Scripts.Utils.waitWhileSomethingInJournal(
                ['You pur', 'You completed', 'You toss', 'Nemas dostatecny'],
                60000,
            );

            if (Orion.InJournal('Nemas dostatecny')) {
                Orion.UseObject(reagentsContainerName);
                Orion.Wait(100);
                Orion.Print(-1);
                if (!this.refillReagent(reagent, reagentsContainerName, potion.reagentsCount * 10)) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return false;
                }

                return false;
            }

            if (Orion.InJournal('You toss')) {
                return false;
            }

            Scripts.Utils.worldSaveCheckWait();
            Orion.ClearJournal();
            Orion.UseObject(mortar);
            Scripts.Utils.waitWhileSomethingInJournal(['You pour'], 60000);
            Orion.Wait(responseDelay);

            return true;
        }

        static mix(potionName: PotionsEnum) {
            if (!isPotionsEnum(potionName)) {
                return;
            }

            Scripts.Utils.playerPrint('Kontajner s regmi?');
            if (Orion.WaitForAddObject(reagentsContainerName, 60000) !== 1) {
                return;
            }

            Orion.UseObject(reagentsContainerName);
            Orion.Wait(100);

            const p: Potion = gameObject.potions[potionName];

            while (true) {
                const result = this.mixOne(p);
                Orion.Wait(responseDelay);

                if (result) {
                    Scripts.Utils.worldSaveCheckWait();
                    Orion.ClearJournal();
                    const potion = Scripts.Utils.findFirstType(p);
                    const kad = Scripts.Potions.getKadForPotion(p);
                    Orion.WaitTargetObject(potion);
                    Orion.UseObject(kad);
                    Scripts.Utils.waitWhileSomethingInJournal(['You put'], 60000);
                }
            }
        }

        static refillReagent(reagent: IMyGameObject, sourceContainerName: string, count = 100) {
            Orion.Print(-1, 'Refilling...');
            Orion.Print(-1, reagent ? 'true' : 'false');
            const countInSource = Orion.Count(reagent.graphic, -1, sourceContainerName, undefined, false);
            Orion.Print(-1, `${countInSource} left in source`);
            if (countInSource <= count) {
                Orion.Print(ColorEnum.red, 'Not enough ' + reagent);
                return false;
            }

            const regFound = Orion.FindType(
                reagent.graphic,
                -1,
                sourceContainerName,
                undefined,
                undefined,
                undefined,
                false,
            );
            if (regFound.length) {
                Orion.MoveItem(regFound[0], count, 'backpack');
                Orion.Wait(250);
            }

            return true;
        }

        static gmMortar(potionName: PotionsEnum) {
            if (!isPotionsEnum(potionName)) {
                return;
            }

            const p = gameObject.potions[potionName];
            const cilovaKadSerial = Scripts.Potions.getKadForPotion(p);

            const isEmptyKad = Orion.FindType(
                gameObject.uncategorized.emptyKad.graphic,
                gameObject.uncategorized.emptyKad.color,
            );
            if (!isEmptyKad) {
                Scripts.Utils.log('Nemas praznou kad', ColorEnum.red);
                return;
            }

            Scripts.Utils.playerPrint(`Target gmmortar for making "${potionName}"`);
            Orion.WaitForAddObject('gmMortar', 60000);

            while (true) {
                Orion.ClearJournal();
                Orion.Wait(50);

                const kadePrevious = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);

                Scripts.Utils.selectMenu('Vyber typ potionu', [p.gmMortarSelection]);
                Orion.UseObject('gmMortar');
                Scripts.Utils.waitWhileSomethingInJournal(['You put the Nadoba', 'Musis mit']);
                if (Orion.InJournal('Musis mit')) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return;
                }

                const kadeNew = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);
                const michnutaKadSerial = kadeNew.filter((i) => kadePrevious.indexOf(i) === -1)[0];

                Orion.ClearJournal();
                Orion.Wait(50);
                Orion.WaitTargetObject(cilovaKadSerial);
                Orion.UseObject(michnutaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['Prelil jsi']);

                Orion.ClearJournal();
                Orion.Wait(responseDelay);
                const emptyBottle = Scripts.Potions.getEmptyBottle();
                Orion.WaitTargetObject(emptyBottle);
                Orion.UseObject(michnutaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['You put']);

                Orion.ClearJournal();
                Orion.Wait(50);
                Orion.WaitTargetType(p.graphic, p.color);
                Orion.UseObject(cilovaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['You put']);
            }
        }
    }
}
