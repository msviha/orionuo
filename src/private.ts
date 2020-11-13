function displayDrinkInfo(potionName:PotionsEnum) {
    let drinkTimer = 17500;
    let gsTimer = 130000;
    let time = 1000;
    Orion.Wait(time);
    while (Orion.Timer(TimersEnum.drink) >= 1000) {
        if (time >= drinkTimer) {
            Scripts.Utils.playerPrint(`[ MUZES PIT ]`, ColorEnum.green);
            break;
        }
        const addTime = 250;
        Orion.Wait(addTime);
        time += addTime;
    }
    if (potionName === PotionsEnum.gs) {
        while (Orion.Timer(TimersEnum.gs) >= 1000) {
            if (time >= gsTimer) {
                Scripts.Utils.playerPrint(`[ konci GS ]`, ColorEnum.orange);
                break;
            }
            const addTime = 250;
            Orion.Wait(addTime);
            time += addTime;
        }
    }
}

function displayHidingInfo() {
    Orion.ClearJournal();
    Scripts.Utils.waitWhileSomethingInJournal(['You have hidden yourself well', 't seem to hide here']);
    if (Orion.InJournal('You have hidden yourself well')) {
        Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ Hidden ]');
    }
    if (Orion.InJournal('t seem to hide here')) {
        Orion.CharPrint(Player.Serial(), ColorEnum.red, '[ FAILED ]');
    }
}
