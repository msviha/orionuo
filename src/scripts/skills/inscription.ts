namespace Scripts {
    export class Inscription {
        static inscription(circle: number, spell: string, quantity = 0) {
            const menuName = 'Spell Circles';
            const spellCircle = `Spell Circle ${circle}`;
            const blank = gameObject.scrolls.blank;

            Scripts.Utils.playerPrint('Target your container with blank scrolls');
            const selection_1 = Orion.WaitForAddObject('blankScrollsContainer', 60000);
            Scripts.Utils.playerPrint('Target your container where to put finished scrolls');
            const selection_2 = Orion.WaitForAddObject('scrollsContainer', 60000);
            Scripts.Utils.playerPrint(`Target finished [${spell}] scroll`);
            const selection_3 = Orion.WaitForAddObject('finishedScroll', 60000);

            // check the proper selection (game objects)
            if (1 !== selection_1 || 1 !== selection_2 || 1 !== selection_3) {
                Scripts.Utils.log('All selections must be game objects', ColorEnum.red);
                return;
            }

            const finishedScroll = {
                graphic: Orion.FindObject('finishedScroll').Graphic(),
                color: Orion.FindObject('finishedScroll').Color(),
            };

            let finishedCount = 0;
            let totalTries = 0;
            while (quantity === 0 || finishedCount !== quantity) {
                Scripts.Utils.worldSaveCheckWait();

                Scripts.Utils.refill(blank, 'blankScrollsContainer', 10, 'backpack', true);

                Orion.ClearJournal();
                Scripts.Utils.selectMenu(menuName, [spellCircle, spell]);
                Orion.Wait(responseDelay);
                Orion.UseType(blank.graphic, blank.color);

                Scripts.Utils.waitWhileSomethingInJournal(['You fail', 'You put the']);

                if (Orion.InJournal('You put the')) {
                    finishedCount++;
                    const scroll = Orion.FindType(finishedScroll.graphic, finishedScroll.color, 'backpack');
                    Orion.MoveItem(scroll[0], 1, 'scrollsContainer');
                    Orion.Wait(responseDelay);
                }

                totalTries++;
                Scripts.Utils.log(`napsano ${finishedCount} / ${totalTries}`);

                if (Player.Mana() + 70 < Player.Int()) {
                    const isDrinkTimerSet = Orion.Timer(TimersEnum.drink) !== -1;
                    while (isDrinkTimerSet && Orion.Timer(TimersEnum.drink) < 18000) {
                        Orion.UseSkill('Meditation');
                        Orion.Wait(3050);
                    }
                    Scripts.Potions.drinkPotion(PotionsEnum.tmr);
                }
            }
        }
    }
}
