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
 * @param delay cas mezi presunem dvou itemu
 * @example `_lootAll 2000`
 */
function lootAll(delay = responseDelay) {
    Scripts.Loot.lootAllFrom(delay);
}

/**
 * Hidne hrace
 * @example [_hiding](../examples/hiding.gif)
 */
function hiding() {
    Scripts.Common.hiding();
}

/**
 * Hodi svetlo z kade, pokud kad neni, tak hodi z hlavy (pokud za to nenapisete false)
 * @param shouldCast {boolean} default je true, takze pokud nemas kad tak zakouzli svetlo
 * @example `_light`
 * @example `_light false`
 */
function light(shouldCast = true) {
    shouldCast = parseParam(shouldCast);
    Scripts.Common.svetlo(shouldCast);
}

/**
 * Prejmenuje vsechny summony a posle na lastattack
 * @example `_kill`
 */
function kill() {
    Scripts.PetCommander.kill();
}

/**
 * Kouzli na pozadovany target, pokud je uveden
 * @example external code `cast("Harm", "lastattack");`
 * @example external code `cast("Magic Reflection", "self");`
 */
function cast(spell:string, target?:TargetEnum) {
    Scripts.Spells.cast(spell, target);
}

/**
 * Kouzli svitek na pozadovany target, pokud je uveden, pokud neni timer na svitek zakouzli z hlavy backupHeadCast
 * @example external code `castScroll("ijs", "self", "Magic Reflection");`
 * @example external code `castScroll("pog", "lastattack");`
 */
function castScroll(scroll:ScrollEnum, target?:TargetEnum, backupHeadCast?:string) {
    Scripts.Spells.castScroll(scroll, target, backupHeadCast);
}

/**
 * Vyrabi s craftem
 * @param objectAsString zde je potreba nadefinovat cestu k itemu skrze [gameObject](./globals.md#gameObject)
 * @example external code `make(100, 'gameObject.crafting.carpentry.miscellaneous.krabiceKadi');`
 * @example external code `make(70, 'gameObject.crafting.tinkering.wires.shadow');`
 */
function make(count:number, objectAsString:string, setInputs = true) {
    Scripts.Crafting.make(count, objectAsString, setInputs);
}

/**
 * Micha na gm mortaru
 * @param potionName
 * @example in client `_gmMortar tmr`
 * @example external code `gmMortar('tmr');`
 */
function gmMortar(potionName:PotionsEnum) {
    Scripts.Common.gmMortar(potionName);
}
