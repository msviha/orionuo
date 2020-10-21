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
 * Nastavi do Orion assistanta `cutWeapon` List Object (napr. pro script na lootovani, nebo samotne rezani tel)
 * @example in client `_addCutWeapon`
 * @example external code `addCutWeapon();`
 */
function addCutWeapon() {
    Scripts.Loot.addCutWeapon();
}

/**
 * Nastavi do Orion assistanta `myMount` List Object (pro nasedani na jezditko)
 * @example in client `_addMount`
 * @example external code `addMount();`
 */
function addMount() {
    Scripts.Mount.addMount();
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
 * Kouzli svitek z NecroScrollEnum na pozadovany target, pokud je uveden
 * @example external code `castNecroScroll("kalnox", "self");`
 * @example external code `castNecroScroll("vfp", "lastattack");`
 */
function castNecroScroll(scroll:NecroScrollEnum, target?:TargetEnum) {
    Scripts.Spells.castNecroScroll(scroll, target);
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
 * Chlasta lahvicky
 * @param potionName zkratka potionu
 * @example in client `_drink tmr`
 * @example external code `drink('tmr');`
 */
function drink(potionName:PotionsEnum) {
    Scripts.Potions.drinkPotion(potionName);
}

/**
 * Micha na gm mortaru
 * @param potionName zkratka potionu
 * @example in client `_gmMortar tmr`
 * @example external code `gmMortar('tmr');`
 */
function gmMortar(potionName:PotionsEnum) {
    Scripts.Potions.gmMortar(potionName);
}

/**
 * Prepina mezi dvema stavy - hiduje hrace v okruhu 15ti policek a dalsi volani dava resync/resend. Nevidim na cudlik protoze mi tam nekdo stoji atd.
 * @example in client `_hideAll`
 * @example external code `hideAll();`
 */
function hideAll() {
    Scripts.Common.hideAll();
}

/**
 * Hidne hrace
 * @example [_hiding](../examples/hiding.gif)
 * @example external code `hiding();`
 */
function hiding() {
    Scripts.Common.hiding();
}

/**
 * pise svitky
 * @param circle {number} cislo kruhu kouzel ve kterem se kouzlo nachazi
 * @param spell {string} nazev kouzla (z nabidky ktera vyskoci kdyz vyberete kruh kouzel)
 * @param quantity {number} pocet svitku k napsani (0 je default a znamena, ze pise dokud nedojde spotrebak)
 * @example external code `inscription(2, 'Resurrection', 20);`
 */
function inscription(circle:number, spell:string, quantity = 0) {
    Scripts.Spells.inscription(circle, spell, quantity);
}

/**
 * Prejmenuje vsechny summony a posle na lastattack
 * @example `_kill`
 * @example external code `kill();`
 */
function kill() {
    Scripts.PetCommander.kill();
}

/**
 * Hodi svetlo z kade, pokud kad neni, tak hodi z hlavy (pokud za to nenapisete false)
 * @param shouldCast {boolean} default je true, takze pokud nemas kad tak zakouzli svetlo
 * @example `_light`
 * @example `_light false`
 * @example external code `light();`
 */
function light(shouldCast = true) {
    shouldCast = parseParam(shouldCast);
    Scripts.Common.svetlo(shouldCast);
}

/**
 * Trenuje lockpicking pomoci bedynky a klice (rozbaleny lockpicking training kit)
 * @example in client `_unlock`
 * @example external code `unlock();`
 */
function lockpicking() {
    Scripts.Lockpicking.lockpicking();
}

/**
 * Lotuje vse (vcetne hracu) v dosahu.
 * Vyzaduje nastaveni Objects a Find v Orion assistantovi v zalozce Lists
 * 1. nastavit `cutWeapon` na zbran kterou chcete rezat v Objects pripadne zavolat `_addCutWeapon` ve hre
 * 2. nastavit `lootItems` na veci ktere chcete z mrtvolky vybrat v Find
 * @param cut {boolean} default je true, takze reze tela (krome lidskych - nevyzkouseno)
 * @example in client `_loot`
 * @example in client `_loot false` - nereze tela
 * @example external code `loot();`
 * @example external code `loot(false);`
 */
function loot(cut = true) {
    cut = parseParam(cut);
    Scripts.Loot.lootCorpsesAround(cut);
}

/**
 * Zameri target a premisti z nej vse do backpacku
 * @param delay cas mezi presunem dvou itemu
 * @example `_lootAll`
 * @example `_lootAll 2000`
 * @example external code `lootAll();`
 * @example external code `lootAll(2000);`
 */
function lootAll(delay = responseDelay) {
    Scripts.Loot.lootAllFrom(delay);
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
 * Micha pres obyc mortar
 * @param potionName zkratka potionu
 * @example in client `_alchemy tmr`
 * @example external code `alchemy('tmr');`
 */
function alchemy(potionName:PotionsEnum) {
    Scripts.Potions.alchemy(potionName);
}

/**
 * Naseda a seseda z jezditka. Pokud Vam jezditko umre, nebo mate nasetovane nejake ktere neni v dosahu, zobrazi se zamereni jezditka
 * @example in client `_mount`
 * @example external code `mount();`
 */
function mount() {
    Scripts.Mount.mountAndDismount();
}

/**
 * Kouzli summona (jmeno je treba zadat tak jak je v nabidce summonu) na pozadovany target, pokud je uveden
 * @example external code `summon("Horse", "self");`
 * @example external code `summon("Giant Viper");`
 */
function summon(creature:string, target?:TargetEnum) {
    Scripts.Spells.summon(creature, target);
}

/**
 * Targeti zive jednotky okolo tebe. Uchovava list targetu po dobu 2,5 vteriny pro pouziti s `targetPrevious`.
 * Vybrany target ma rovnou status `attackLast` (ale neutocis to na nej, jen mas zaply war) takze je mozne na nej kouzlit
 * @example in client `_targetNext`
 * @example external code `targetNext();`
 */
function targetNext() {
    Scripts.Targeting.targetNext();
}

/**
 * Targeti zive jednotky okolo tebe. Uchovava list targetu po dobu 2,5 vteriny pro pouziti s `targetNext`
 * Vybrany target ma rovnou status `attackLast` (ale neutocis to na nej, jen mas zaply war) takze je mozne na nej kouzlit
 * @example in client `_targetPrevious`
 * @example external code `targetPrevious();`
 */
function targetPrevious() {
    Scripts.Targeting.targetNext(true);
}

/**
 * Lockpickuje zamcenou bednu, dokud ji neotevre (nebo nedojdou locky)
 * @example in client `_unlock`
 * @example external code `unlock();`
 */
function unlock() {
    Scripts.Lockpicking.unlock();
}
