/**
 * @internal
 */
namespace Scripts {
    export class Hiding {
        static hiding() {
            Orion.Exec('_hiding', true);
        }
    }
}

/**
 * @internal
 */
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

/**
 * @internal
 */
function _hidingPreoccupiedCheck() {
    const hidTimer = config?.hiding?.timer;
    Orion.AddDisplayTimer(
        TimersEnum.hiding,
        2000,
        hidTimer?.position || 'AboveChar',
        hidTimer?.type || 'bar',
        hidTimer?.text || "Hiding",
        hidTimer?.xFromPosition || 0,
        hidTimer?.yFromPosition || 100,
        hidTimer?.textColor || '0x100',
        hidTimer?.font || 0,
        hidTimer?.backgroundColor || 'red'
    );
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
