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

function scheduleClick(s:string) {
    Orion.Wait(350);
    Orion.Click(s);
}

function customStatusBarCallBack(s:string) {
    const code = CustomGumpResponse.ReturnCode();
    const serial:string = <string>(<any>(s.toString))(16);
    if (code === CustomStatusBarEnum.close) {
        Shared.AddVar(s, false);
    }
    else if (code === CustomStatusBarEnum.click) {
        if (Orion.HaveTarget()) {
            Orion.TargetObject(serial);
            Orion.CancelTarget();
            Orion.AddObject('lasttarget', serial);
            return;
        }
        Orion.Terminate('scheduleClick');
        Orion.Exec('scheduleClick', true, [s]);
        if (Player.WarMode()) {
            if (Orion.Timer(s) === -1 || Orion.Timer(s) > 300) {
                Scripts.Utils.resetTimer(s);
            }
            else {
                Orion.Terminate('scheduleClick');
                Orion.Attack(s);
            }
        }
    }
}
