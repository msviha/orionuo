namespace Scripts {

    /**
     * Obsahuje zakladni scripty
     */
    export class Common {

        /**
         * Scripts.Common.svetlo
         * stability released
         *
         * Pouzije svetlo z kade na sebe
         * Pokud nenajde kad, tak zakouzli svetlo.
         * Kouzleni lze zakazat pomoci parametru Scripts.Common.svetlo(false)
         */
        static svetlo(shouldCast = true) {
            const ns = <IPotion>gameObject.potions.ns;
            const kad = Orion.FindType(ns.kad.graphic, ns.kad.color);
            if (kad.length) {
                Orion.WaitTargetObject('self');
                Orion.UseObject(kad[0]);
            }
            else if (shouldCast) {
                Scripts.Spells.cast('Night Sight',TargetEnum.self);
            }
        }

        /**
         * Scripts.Common.shrinkKad
         * stability beta
         *
         * Pouzije shrink kad
         */
        static shrinkKad() {
            const shrink = <IPotion>gameObject.potions.ns;
            const kad = Orion.FindType(shrink.kad.graphic, shrink.kad.color);
            if (kad.length) {
                Orion.UseObject(kad[0]);
            }
            else {
                Scripts.Utils.log('NEMAS SHRINK KAD', ColorEnum.red);
            }
        }

        /**
         * Scripts.Common.hiding
         * stability beta
         *
         * hidne, pripadne prepne war a hidne
         */
        static hiding() {
            Orion.ClearJournal();
            Orion.Print(ColorEnum.none, 'Start Hiding');
            Orion.UseSkill('Hiding');
            Orion.Wait(100);

            while(Orion.InJournal('preoccupied')) {
                Orion.ClearJournal();
                Orion.WarMode(true);
                Orion.Wait(100);
                Orion.Print(ColorEnum.none, 'preoccupied - trying to hide again');
                Orion.UseSkill('Hiding');
            }

            const timeToHide = 2000;
            Orion.AddDisplayTimer('hiding', 2000, 'AboveChar', 'bar', "Hiding", 0, 100, '0x100', 0, 'red');
            Orion.Wait(timeToHide);

            if (Orion.InJournal('You have hidden yourself well')) {
                Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ Hidden ]');
            }
            if (Orion.InJournal('t seem to hide here')) {
                Orion.CharPrint(Player.Serial(), ColorEnum.red, '[ FAILED ]');
            }
        }

        /**
         * Scripts.Common.drinkPotion
         * stability beta
         *
         * @param potionName nazev potionu, ktery je definovan jako klic v objectu o.potions
         * @param switchWarModeWhenNeeded prepne war, pokud je potreba docepnout
         */
        static drinkPotion(potionName:string, switchWarModeWhenNeeded = true) {
            const potion = gameObject.potions[potionName];
            if (!potion) {
                Scripts.Utils.log(`Definice potionu '${potionName}' neexistuje.`, ColorEnum.red);
                return;
            }

            const emptyBottles = Orion.FindType(gameObject.uncategorized.emptyBottles.graphic, gameObject.uncategorized.emptyBottles.color);
            const isEmptyBottle = emptyBottles.length > 0;

            let isPotion = Orion.Count(potion.graphic, potion.color) > 0;
            const kade = Orion.FindType(potion.kad.graphic, potion.kad.color)
            const isKad = potion.kad && kade.length || false;

            if (!isPotion && isKad) {
                //docepnuti
                if (!isEmptyBottle) {
                    Scripts.Utils.log('Nemas prazdne lahve na docepnuti', ColorEnum.red);
                    return;
                }

                Orion.ClearJournal();
                Orion.WaitTargetObject(emptyBottles[0]);
                Orion.UseObject(kade[0]);
                Orion.Wait(responseDelay);

                if (Orion.InJournal('Pri praci s nadobou nemuzes delat neco')) {
                    if (!switchWarModeWhenNeeded) {
                        Scripts.Utils.log('Nemuzes pit, kdyz neco delas', ColorEnum.red);
                        return;
                    }
                    Scripts.Utils.playerPrint('[War mode]', ColorEnum.red);
                    Orion.WarMode(true);
                    Orion.Wait(100);
                    Orion.WaitTargetObject(emptyBottles[0]);
                    Orion.UseObject(kade[0]);
                    Orion.Wait(responseDelay);
                }

                isPotion = Orion.Count(potion.graphic, potion.color) > 0;
            }

            if (isPotion) {
                Orion.UseType(potion.graphic, potion.color);
                Orion.Wait(responseDelay);
                if (Orion.InJournal('You put the empty bottless')) {
                    Orion.AddDisplayTimer(TimersEnum.drink, 18000, 'RightTop', 'Circle', 'Drink potion', 0, 0, '0x100', 0, 'red');
                    Scripts.Utils.resetTimer(TimersEnum.drink);
                    const currentPotions = Orion.Count(potion.graphic, potion.color);
                    const textColor = currentPotions === 0 ? ColorEnum.red : ColorEnum.green
                    Scripts.Utils.playerPrint(`[ ${potionName} ${Orion.Count(potion.graphic, potion.color)} ]`);
                }
            }
            else {
                Scripts.Utils.playerPrint('Nemas ' + potionName, ColorEnum.red);
            }
        }

        /**
         * Scripts.Common.bandageSelf
         * stability beta
         *
         * hodi si bandu, pripadne vypise ze nema a prehraje wav soubor
         */
        static bandageSelf(pathToNoBandagesWavFile = 'C:/critical.wav') {
            Orion.ClearJournal();
            Orion.BandageSelf();
            while (!Orion.InJournal('You put') && !Orion.InJournal('You apply') && !Orion.InJournal('Chces vytvorit')) {
                Orion.Wait(200);
            }

            const bandages = Orion.FindType(gameObject.uncategorized.bandy.graphic, gameObject.uncategorized.bandy.color);
            if (!bandages.length) {
                Orion.PlayWav(pathToNoBandagesWavFile);
            }
        }

        static mysticCounter() {
            Orion.ClearJournal();
            const recepts = Orion.FindType('0x14ED', '0x06ED'); // recept
            const mystics = {...gameObject.mystics};

            for (const recept of recepts) {
                Orion.UseObject(recept);
                Orion.Wait(responseDelay);
                for (const m in mystics) {
                    !mystics[m].required && (mystics[m].required = 0);
                    const text = Orion.InJournal(m.charAt(0).toUpperCase() + m.slice(1))?.Text();
                    if (text) {
                        mystics[m].required += parseInt(text.replace(/x.*/, ''));
                    }
                }
                Orion.ClearJournal();
            }

            Orion.Print(-1 , '* zbyva doplnit *');
            for (const m in mystics) {
                const required = mystics[m].required;
                const have = Scripts.Utils.countObjectInContainer(mystics[m], 'backpack');
                const count = required - have < 0 ? 0 : required - have;
                Orion.Print(-1 , m + ': ' + count.toString());
            }
            Orion.Print(-1 , '*****************');
        }
    }
}
