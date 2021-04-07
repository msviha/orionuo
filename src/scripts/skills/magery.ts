namespace Scripts {
    export class Magery {
        /**
         * Sesle kouzlo, vyuziva rozsirene targetovani, do budoucna bude resit i svitky jako ve fene
         * @param spellName - standardni nazev kouzla
         * @param targets - rozsirene targetovani, zleva do prava aliasy targetu odelene '|'
         */
        static castSpell(spellName: string, targets: string) {
            const targetResult = Scripts.TargetingEx.getTarget(targets);

            if (targetResult.success()) {
                targetResult.waitTarget();
            } else {
                Orion.CharPrint(Player.Serial(), ColorEnum.pureWhite, spellName);
            }
            Orion.Cast(spellName);
        }
    }
}
