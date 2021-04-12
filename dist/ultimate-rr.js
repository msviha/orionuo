var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function ultimateRR() {
    UltimateRR.ultimateRR();
}
var UltimateRR = (function () {
    function UltimateRR() {
    }
    UltimateRR.ultimateRR = function () {
        UltimateRR.moveRingToBackpack();
        var rings = UltimateRR.getRRSerials();
        rings = UltimateRR.getRRsByTimer(rings);
        UltimateRR.useRRJournalCheck(rings);
    };
    UltimateRR.moveRingToBackpack = function () {
        var l = Orion.ObjAtLayer('Ring');
        l && Orion.MoveItem(l.Serial());
    };
    UltimateRR.getRRSerials = function () {
        var rr = gameObject.rings.rr;
        var grr = gameObject.rings.grr;
        var grr2 = gameObject.rings.grr2;
        var rrSerials = Orion.FindType(rr.graphic, rr.color);
        var grrSerials = Orion.FindType(grr.graphic, grr.color);
        var grr2Serials = Orion.FindType(grr2.graphic, grr2.color);
        return __spreadArrays(rrSerials, grrSerials, grr2Serials);
    };
    UltimateRR.getRRsByTimer = function (rings) {
        if (!rings.length) {
            Scripts.Utils.playerPrint('nemas RRka', ColorEnum.red);
            throw 'e';
        }
        rings.sort(function (a, b) {
            var timerA = Orion.Timer(a);
            var timerB = Orion.Timer(b);
            if (timerA === -1) {
                return -1;
            }
            if (timerB === -1) {
                return 1;
            }
            return timerA > timerB ? -1 : 1;
        });
        return rings;
    };
    UltimateRR.useRRJournalCheck = function (rings) {
        var timerMsg = 'It too soon to use it again';
        var successMsg = 'think of a way to use that item';
        var paraMsg = 'reach that';
        var emptyMsg = 'You must recharge it';
        Orion.ClearJournal(timerMsg + "|" + successMsg + "|" + paraMsg + "|" + emptyMsg);
        var ringsToCheckTimer = __spreadArrays(rings);
        for (var _i = 0, rings_1 = rings; _i < rings_1.length; _i++) {
            var ring = rings_1[_i];
            Orion.UseObject(ring);
            var result = Scripts.Utils.waitWhileSomethingInJournal([
                timerMsg,
                successMsg,
                emptyMsg,
                paraMsg,
            ], 1000, 100);
            Orion.ClearJournal(timerMsg + "|" + successMsg + "|" + paraMsg + "|" + emptyMsg);
            if (result === 1 || result === -1) {
                Scripts.Utils.resetTimer(ring);
                Scripts.Utils.resetTimer(TimersEnum.lastRRTimer);
                UltimateRR.moveRingToBackpack();
                UltimateRR.showTimeForNextRR(ringsToCheckTimer, true);
                return;
            }
            if (result === 3) {
                Scripts.Utils.playerPrint("You can't reach that", ColorEnum.red);
                throw 'e';
            }
            var timer = Orion.Timer(ring);
            if (result === 0 && timer !== -1) {
                UltimateRR.showTimeForNextRR(ringsToCheckTimer);
                return;
            }
            ringsToCheckTimer.shift();
        }
        if (ringsToCheckTimer.length) {
            Scripts.Utils.playerPrint('[DEBUG] - zjisti co se stalo...');
            UltimateRR.showTimeForNextRR(rings);
        }
    };
    UltimateRR.showTimeForNextRR = function (rings, justUsed) {
        if (justUsed === void 0) { justUsed = false; }
        var ONE_RR_TIME = 198000;
        var PLAYER_RR_TIME = 23000;
        var lastRRTimer = Orion.Timer(TimersEnum.lastRRTimer);
        var remainingTimeByPlayer = PLAYER_RR_TIME - lastRRTimer > 0 ? PLAYER_RR_TIME - lastRRTimer : 0;
        var nearestRemainingTime = ONE_RR_TIME;
        var anyChargedRR = false;
        for (var _i = 0, rings_2 = rings; _i < rings_2.length; _i++) {
            var ring = rings_2[_i];
            var ringTimer = Orion.Timer(ring);
            var remainingTimeByRing = ringTimer === -1 ? -1 : ONE_RR_TIME - ringTimer;
            Orion.Click(ring);
            var charges = Scripts.Utils.waitWhileSomethingInJournal(['0 charges', 'charges'], 1000, 1000);
            Orion.ClearJournal('charges');
            if (charges !== 0) {
                anyChargedRR = true;
                if (remainingTimeByPlayer > remainingTimeByRing) {
                    nearestRemainingTime = remainingTimeByPlayer;
                    break;
                }
                if (nearestRemainingTime > remainingTimeByRing) {
                    if (remainingTimeByRing < PLAYER_RR_TIME) {
                        nearestRemainingTime = PLAYER_RR_TIME;
                        break;
                    }
                    else {
                        nearestRemainingTime = remainingTimeByRing;
                    }
                }
            }
        }
        if (justUsed) {
            Orion.AddDisplayTimer(TimersEnum.displayRR, nearestRemainingTime, 'LeftTop', 'Line|Bar', 'RR', 0, 110, '0x88B', -1, '0x88B');
            Orion.Exec('displayRRInfoReady', true, [nearestRemainingTime.toString()]);
        }
        else if (anyChargedRR) {
            var waitMsg = (nearestRemainingTime / 1000).toFixed(2);
            nearestRemainingTime > 0 && Scripts.Utils.playerPrint("rr " + waitMsg + "s", ColorEnum.red);
        }
        else {
            Scripts.Utils.playerPrint('[Uz nemas dalsi RR]', ColorEnum.orange);
        }
    };
    return UltimateRR;
}());
