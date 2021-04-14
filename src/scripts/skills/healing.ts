namespace Scripts {
    export class Healing {
        /**
         * @exports
         * Banduje zvoleny target, ukaze timer bandaze oznaci printfastem bandeni target a pokud je potreba vyhodi tercik
         * @param targets - rozsirene targetovani, zleva do prava aliasy targetu odelene '|'
         * @param showTarget - pokud targets nejsou zadany nebo zadny z nich neni nalezen vyhodi tercik. terick na vybrer ceka 4s
         * @param minimalCountToWarn - pokud mate mene nebo rovno bandazi, zobrazi se hlaska s poctem zbyvajicich
         *          *
         */
        static bandageTarget(
            targets?: string | TargetEnum | Array<ITargetAlias>,
            showTarget = false,
            minimalCountToWarn = 10,
        ) {
            const target = Scripts.TargetingEx.getTarget(targets, 5);
            const bandagesSerials = Orion.FindType(gameObject.uncategorized.bandy.graphic);

            const count = Scripts.Utils.countItemsBySerials(bandagesSerials);
            if (!count) {
                Scripts.Utils.playerPrint('[ nemas bandy ]', ColorEnum.red);
                return;
            }
            const bandTimer = config?.bandage?.bandageTimer;
            if (!target.isValid() && (showTarget || !targets)) {
                Orion.RemoveTimer(TimersEnum.bandage);
                Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ band > ? ]');
                const resultObj = Orion.WaitForAddObject('LastBandageChar', 4000);
                if (resultObj === 1) {
                    target.gameObject(Orion.FindObject('LastBandageChar').Serial());
                }
            }

            if (target.isValid()) {
                Orion.AddDisplayTimer(
                    TimersEnum.bandage,
                    bandTimer?.timeout || 2500,
                    bandTimer?.position || 'AboveChar',
                    bandTimer?.type || 'Bar',
                    bandTimer?.text || 'band..',
                    bandTimer?.xFromPosition || 0,
                    bandTimer?.yFromPosition || 100,
                    bandTimer?.textColor || '0x88B',
                    bandTimer?.font || 0,
                    bandTimer?.backgroundColor || '0x88B',
                );

                Scripts.Utils.resetTimer(TimersEnum.bandage);
                target.waitTarget();
                Orion.UseObject(bandagesSerials[0]);
                Utils.charPrint(target.gameObject().Serial(), 'band..', ColorEnum.green, true);
            } else {
                Utils.playerPrint('[ vsichni ok ]', ColorEnum.green, true);
            }

            if (count - 1 <= minimalCountToWarn) {
                Scripts.Utils.playerPrint(
                    `posledni${count > 4 ? 'ch' : ''} ${count} band${count > 4 ? '' : count > 1 ? 'y' : 'a'}`,
                    ColorEnum.red,
                );
            }
        }
    }
}
