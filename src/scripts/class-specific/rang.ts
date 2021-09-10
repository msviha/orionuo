/**
 * @internal
 */
function _autoAmmoRefill() {
    let hasArrowsInQuiver = true;
    let hasBoltsInQuiver = true;

    while (true) {
        Orion.Wait(1500); // +2000 hlidacka naplneni toulce

        if (Player.Dead()) {
            continue;
        }

        const naplnenyToulec =
            Scripts.Utils.waitWhileSomethingInJournal([
                'sipu bylo pridano do magickeho toulce',
                'sipek bylo pridano do magickeho toulce'
            ], 2000);
        Orion.ClearJournal('bylo pridano do magickeho toulce');

        hasArrowsInQuiver = hasArrowsInQuiver || naplnenyToulec === 0;
        hasBoltsInQuiver = hasBoltsInQuiver || naplnenyToulec === 1;

        const arrowsQuiverGameObject = gameObject.uncategorized.sipyToulec;
        const arrowsGameObject = gameObject.uncategorized.sipy;
        const boltsQuiverGameObject = gameObject.uncategorized.sipkyToulec;
        const boltsGameObject = gameObject.uncategorized.sipky;

        hasArrowsInQuiver = Scripts.Rang.checkAndRefillAmmo(hasArrowsInQuiver, arrowsQuiverGameObject, arrowsGameObject, 'sipy');
        hasBoltsInQuiver = Scripts.Rang.checkAndRefillAmmo(hasBoltsInQuiver, boltsQuiverGameObject, boltsGameObject, 'sipky');
    }
}

/**
 * @internal
 */
namespace Scripts {
    export class Rang {

        static autoAmmoRefill() {
            Orion.Wait(100);
            Scripts.Utils.playerPrint('Hlidacka sipek a sipu aktivovana', ColorEnum.green);
            // prevent for multiple execution
            Orion.Exec('_autoAmmoRefill', true);
        }

        /**
         * @return boolean - vrati true, pokud v toulci jeste neco zustalo
         */
        static checkAndRefillAmmo(hasAmmoInQuiver = true, quiverGameObject:IMyGameObject, ammoGameObject:IMyGameObject, type:string):boolean {
            if (!hasAmmoInQuiver) {
                return hasAmmoInQuiver;
            }

            const quiverSerial = Scripts.Utils.findFirstType(quiverGameObject);
            let ammoCount = Scripts.Utils.countObjectInContainer(ammoGameObject);

            if (ammoCount < 5 && quiverSerial) {
                Scripts.Utils.playerPrint(`Dosly ${type}, vytahuju nove`, ColorEnum.green);
                Orion.UseObject(quiverSerial);
                Orion.Wait(responseDelay);
                Orion.Click(quiverSerial);
                hasAmmoInQuiver = !!Scripts.Utils.waitWhileSomethingInJournal(['quiver (0)', 'quiver'], 2000, 50);
                Orion.ClearJournal('quiver');
                if (!hasAmmoInQuiver) {
                    ammoCount = Scripts.Utils.countObjectInContainer(ammoGameObject);
                    Scripts.Utils.playerPrint(`vytahnuto poslednich ${ammoCount} ${type === 'sipy' ? 'sipu' : 'sipek'} `, ColorEnum.red);
                }
            }

            return hasAmmoInQuiver;
        }

    }
}
