namespace Scripts {
    type Potion = {
        graphic: string;
        kad: IMyGameObject;
        reagent: string;
        alchemySelection: string;
        reagentsCount: number;
    };

    const reagentsContainerName = 'alchemy/reagentsContainerName';
    export class Alchemy {
        static getMortar(): string {
            const mortars = Orion.FindType(gameObject.uncategorized.mortar.graphic);
            if (!mortars.length) {
                Scripts.Utils.log(`Nemas mortar`, ColorEnum.red);
                throw 'Nemas mortar';
            }
            return mortars[0];
        }

        static mixOne(p: Potion | string): boolean {
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
                if (!Scripts.Common.refillReagent(reagent, reagentsContainerName, potion.reagentsCount * 10)) {
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

            Scripts.Utils.createGameObjectSelections([{ ask: 'Kontajner s regmi?', addObject: reagentsContainerName }]);

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

        static gmMortar(potionName: PotionsEnum) {
            if (!isPotionsEnum(potionName)) {
                return;
            }

            const p = gameObject.potions[potionName];
            const cilovaKadSerial = Scripts.Potions.getKadForPotion(p);

            const emptyKad = Orion.FindType(
                gameObject.uncategorized.emptyKad.graphic,
                gameObject.uncategorized.emptyKad.color,
            );
            if (!emptyKad.length) {
                Scripts.Utils.log('Nemas praznou kad', ColorEnum.red);
                return;
            }

            const gmMortarObj = gameObject.uncategorized.gmMortar;
            const gmMortars = Orion.FindType(gmMortarObj.graphic, gmMortarObj.color, 'ground', '', 18);
            if (!gmMortars.length) {
                Scripts.Utils.createGameObjectSelections([{ask: `Target gmmortar for making "${potionName}"`, addObject: 'gmMortar'}]);
            }
            else {
                const gmMortar = Orion.FindObject(gmMortars[0]);
                Orion.WalkTo(gmMortar.X(), gmMortar.Y(), Player.Z(), 1);
                Orion.AddObject('gmMortar', gmMortar.Serial());
            }

            Orion.ClearJournal();
            Orion.Wait(50);

            while (true) {
                const kadePrevious = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);

                Scripts.Utils.selectMenu('Vyber typ potionu', [p.gmMortarSelection]);
                Orion.UseObject('gmMortar');
                Scripts.Utils.waitWhileSomethingInJournal(['You put the Nadoba', 'Musis mit']);
                if (Orion.InJournal('Musis mit')) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return;
                }
                Orion.ClearJournal('You put the Nadoba');
                Orion.Wait(250); // pockej na kad v baglu

                const kadeNew = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);
                const michnutaKadSerial = kadeNew.filter((i) => kadePrevious.indexOf(i) === -1)[0];

                Orion.UseObject(michnutaKadSerial);
                Orion.WaitForTarget(2000);
                Orion.TargetObject(cilovaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['Prelil jsi']);
                Orion.ClearJournal('Prelil jsi');
                Orion.Wait(250);

                const emptyBottle = Scripts.Potions.getEmptyBottle();
                Orion.UseObject(michnutaKadSerial);
                Orion.WaitForTarget(2000);
                Orion.TargetObject(emptyBottle);
                Scripts.Utils.waitWhileSomethingInJournal(['You put the Kad na potiony']);
                Orion.ClearJournal('You put the Kad na potiony');
                Orion.Wait(250);

                Orion.UseObject(cilovaKadSerial);
                Orion.WaitForTarget(2000);
                Orion.TargetType(p.graphic, p.color);
                Scripts.Utils.waitWhileSomethingInJournal(['You put the empty bottles']);
                Orion.ClearJournal('You put the empty bottles');
                Orion.Wait(250);
            }
        }
    }
}
