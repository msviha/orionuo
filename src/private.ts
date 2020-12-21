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

function _hiding() {
    Orion.ClearJournal();
    Orion.Print(ColorEnum.none, 'Start Hiding');
    Orion.UseSkill('Hiding');
    Orion.Wait(100);
    if (Orion.InJournal('You must wait')) {
        Orion.ClearJournal('You must wait');
        return;
    }
    Orion.Exec('_hidingPreoccupiedCheck', true);
}

function _hidingPreoccupiedCheck() {
    Orion.AddDisplayTimer(TimersEnum.hiding, 2000, 'AboveChar', 'bar', "Hiding", 0, 100, '0x100', 0, 'red');
    Scripts.Utils.waitWhileSomethingInJournal(['You have hidden yourself well', 't seem to hide here', 'preoccupied'], 3000);
    Orion.RemoveDisplayTimer(TimersEnum.hiding);
    if (Orion.InJournal('You have hidden yourself well')) {
        Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ Hidden ]');
    }
    else if (Orion.InJournal('t seem to hide here')) {
        Orion.CharPrint(Player.Serial(), ColorEnum.red, '[ FAILED ]');
    }
    else if (Orion.InJournal('preoccupied')) {
        Orion.WarMode(true);
        Orion.Wait(100);
        Orion.Print(ColorEnum.none, 'preoccupied - trying to hide again');
        Orion.Exec('_hiding', true);
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
