/**
 * @internal
 */
namespace Scripts {
    export class MagicMiner {
        static ocaruj(dusty = OcarovaniEnum.mytheril, loot = false) {
            const target = 'ocarujMrtvolku';
            const timer = 'ocarovani';
            const dustSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.dusty[dusty]);
            if (!dustSerial) {
                Scripts.Utils.playerPrint('Nemam dusty', ColorEnum.red);
                return;
            }
            Scripts.Utils.createGameObjectSelections([{ ask: 'Jakou mrtvolku budes ocarovavat ?', addObject: target }]);
            const o = Orion.FindObject(target);

            if (o.Distance() > 3) {
                Scripts.Utils.playerPrint('Musis k ni dobehnout');
                Orion.AddDisplayTimer(timer, 5000, 'AboveChar', 'bar', 'Hiding', 0, 100, '0x100', 0, 'white');
            }
            let w = 5000;
            while (o.Distance() > 3 && w) {
                Orion.Wait(500);
                w -= 500;
            }

            if (o.Distance() > 3) {
                Scripts.Utils.playerPrint('Mrtvola nebyla v dosahu..');
                return;
            }
            Orion.RemoveDisplayTimer(timer);

            Scripts.Utils.openContainer(target);
            const lootPytelSerials = Orion.FindType('0x0E76', '0x049A', target);
            if (!lootPytelSerials.length) {
                Scripts.Utils.playerPrint('Nevidim loot pytel', ColorEnum.red);
                return;
            }
            Orion.WaitTargetObject(lootPytelSerials[0]);
            Orion.UseObject(dustSerial);

            if (loot) {
                Orion.Wait(responseDelay);
                Scripts.Loot.lootCorpseId(target);
            }
        }

        static rozbij(ingy = OcarovaniEnum.mytheril, count = 5) {
            const adaHammer = Scripts.Utils.findFirstType(gameObject.uncategorized.adaHammer, 2);
            if (!adaHammer) {
                Scripts.Utils.playerPrint('Nemam Ada Hammer', ColorEnum.red);
                return;
            }
            const ingySerial = Scripts.Utils.findFirstType(gameObject.resources.ingots[ingy]);
            if (!ingySerial) {
                Scripts.Utils.playerPrint('Nemam Myth Ingy', ColorEnum.red);
                return;
            }

            Orion.Drop(ingySerial, count);
            Orion.Wait(responseDelay);
            Orion.WaitTargetObject(ingySerial);
            Orion.UseObject(adaHammer);
            Orion.Wait(responseDelay);

            const dust = gameObject.uncategorized.dusty[ingy];
            const dusty = Orion.FindType(dust.graphic, dust.color, 'ground', 'item', 1);
            if (!dusty.length) {
                Scripts.Utils.playerPrint('neco se pokazilo.. nevidim pode mnou dusty', ColorEnum.red);
            } else {
                Orion.MoveItem(dusty[0]);
            }
        }
    }
}
