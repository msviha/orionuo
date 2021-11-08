/**
 * @internal
 */
function displayDrinkInfo(potionName: PotionsEnum) {
    const drinkTimer = 17500;
    const gsTimer = 130000;
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

/**
 * @internal
 */
function scheduleClick(s: string) {
    Orion.Wait(350);
    Orion.Click(s);
}

/**
 * @internal
 */
function customStatusBarCallBack(s: string) {
    const code = CustomGumpResponse.ReturnCode();
    const serial: string = <string>(<any>s.toString)(16);
    if (code === CustomStatusBarEnum.close) {
        Scripts.Statusbar.close(serial);
    } else if (code === CustomStatusBarEnum.click) {
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
            } else {
                Orion.Terminate('scheduleClick');
                Orion.Attack(s);
            }
        }
    }
}

/**
 * @internal
 */
function tbGumpUpdateLoop() {
    while (true) {
        Scripts.TbGump.searchTextAndUpdateGump();
        Orion.Wait(500);
    }
}

/**
 * @internal
 */
function tbCustomGumpCallBack() {
    const code = CustomGumpResponse.ReturnCode();
    if (code === 0) {
        Orion.Terminate('tbGumpUpdateLoop');
    }
}
