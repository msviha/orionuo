/**
 * Zaskrtnete si v Orion Assistantovi Autostart checkbox
 */
function Autostart() {
    let previousLastAttackSerial:string;
    let previousLastAttackHp:number;
    let previousPlayerHp:number;
    let updateRate = 500;

    while (true) {
        Scripts.Utils.printDamage(Player.Serial(), previousPlayerHp);
        previousPlayerHp = Player.Hits();

        const lastAttackSerial = Orion.ClientLastAttack();
        const lastAttack = Scripts.Utils.getLivingObjectInDistance(lastAttackSerial);
        if (lastAttack) {
            if (previousLastAttackSerial !== lastAttackSerial) {
                previousLastAttackHp = lastAttack.Hits();
                Scripts.Utils.printDamage(lastAttackSerial, previousLastAttackHp, true);
            }
            else {
                Scripts.Utils.printDamage(lastAttackSerial, previousLastAttackHp);
                previousLastAttackHp = lastAttack.Hits();
            }
            previousLastAttackSerial = lastAttackSerial;
        }

        Orion.Wait(updateRate);
    }
}

/**
 * Zameri target a premisti z nej vse do backpacku
 * @param delay
 */
function lootAll(delay = responseDelay) {
    Scripts.Loot.lootAllFrom(delay);
}
/**
 * Hidne hrace
 */
function hiding() {
    Scripts.Common.hiding();
}
