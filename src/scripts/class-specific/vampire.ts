class Vampire {
    static coffin(menuSelection: CoffinMenuSelection) {
        const keySerial = Orion.FindType('0x186A', '0x0695').shift();
        if (! keySerial) {
            return Scripts.Utils.playerPrint("nemas klicek od rakve", ColorEnum.red);
        }

        Orion.UseObject(keySerial);
        Orion.WaitForMenu();
        const menu = Orion.GetMenu("last");
        if (!menu) {
            return Scripts.Utils.playerPrint("nepodarilo sa otvoriť menu", ColorEnum.red);
        }

        return menu.Select(menuSelection);
    }
}