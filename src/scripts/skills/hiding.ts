/**
 * @internal
 */
namespace Scripts {
    export class Hiding {
        static hiding(allowRehid = true, doubleTapToRehid = false) {
            const allowRehidString = allowRehid === true ? '1' : '';
            const doubleTapToRehidString = doubleTapToRehid === true ? '1' : '';
            Orion.Exec('_hiding', true, [allowRehidString, doubleTapToRehidString]);
        }
    }
}

/**
 * @internal
 * string '' or '1' to translate boolean
 */
function _hiding(allowRehid:string, doubleTapToRehid:string) {
    if (Player.Hidden()) {
        if (!allowRehid) {
            Scripts.Utils.playerPrint('V hidu uz jsi.');
            return;
        }
        else if (doubleTapToRehid && (!Orion.TimerExists('hidingTimer') || Orion.Timer('hidingTimer') > 200)) {
            Scripts.Utils.playerPrint('V hidu uz jsi.');
            Orion.SetTimer('hidingTimer');
            return;
        }
    }

    Orion.ClearJournal();
    Orion.Print(ColorEnum.none, 'Start Hiding');
    Orion.UseSkill('Hiding');
    Orion.Wait(100);
    if (Orion.InJournal('You must wait')) {
        Orion.ClearJournal('You must wait');
        return;
    }
    Orion.Exec('_hidingPreoccupiedCheck', true, [allowRehid, doubleTapToRehid]);
}

/**
 * @internal
 */
function _hidingPreoccupiedCheck(allowRehid:string, doubleTapToRehid:string) {
    const hidTimer = config?.hiding?.timer;
    hidTimer.displayTimer !== false && Orion.AddDisplayTimer(
        TimersEnum.hiding,
        2000,
        hidTimer?.position || 'AboveChar',
        hidTimer?.type || 'bar',
        hidTimer?.text || 'Hiding',
        hidTimer?.xFromPosition || 0,
        hidTimer?.yFromPosition || 100,
        hidTimer?.textColor || '0x100',
        hidTimer?.font || 0,
        hidTimer?.backgroundColor || 'red',
    );
    Scripts.Utils.waitWhileSomethingInJournal(
        ['You have hidden yourself well', 't seem to hide here', 'preoccupied', 'too well lit'],
        3000,
    );
    Orion.RemoveDisplayTimer(TimersEnum.hiding);
    const showMsg = config?.hiding?.showInnerMessages;
    if (Orion.InJournal('You have hidden yourself well') && showMsg) {
        Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ Hidden ]');
    } else if (Orion.InJournal('t seem to hide here|too well lit') && showMsg) {
        Orion.CharPrint(Player.Serial(), ColorEnum.red, '[ FAILED ]');
    } else if (Orion.InJournal('preoccupied')) {
        Orion.WarMode(true);
        Orion.Wait(100);
        Orion.Print(ColorEnum.none, 'preoccupied - trying to hide again');
        Orion.Exec('_hiding', true, [allowRehid, doubleTapToRehid]);
    }
}
