function ultimateRR() {
    UltimateRR.ultimateRR();
}

function displayRRInfoReady(remainingTime:string) {
    let wait = parseFloat(remainingTime);
    while (true) {
        Orion.Wait(250);
        wait -= 250;
        if (wait <= 0) {
            Scripts.Utils.playerPrint(`[ RR READY ]`, ColorEnum.pureWhite);
            break;
        }
    }
}

const RR_lastRRTimer = 'lastRRTimer';
const RR_displayRR = 'displayRR';

class UltimateRR {
    static ultimateRR() {
        UltimateRR.moveRingToBackpack();
        let rings = UltimateRR.getRRSerials();
        rings = UltimateRR.getRRsByTimer(rings);
        UltimateRR.useRRJournalCheck(rings);
    }

    static moveRingToBackpack() {
        const l = Orion.ObjAtLayer('Ring');
        l && Orion.MoveItem(l.Serial());
    }

    static getRRSerials(): string[] {
        const rr = <IMyGameObject>gameObject.rings.rr;
        const grr = <IMyGameObject>gameObject.rings.grr;
        const grr2 = <IMyGameObject>gameObject.rings.grr2;
        const rrSerials = Orion.FindType(rr.graphic, rr.color);
        const grrSerials = Orion.FindType(grr.graphic, grr.color);
        const grr2Serials = Orion.FindType(grr2.graphic, grr2.color);
        return [...rrSerials, ...grrSerials, ...grr2Serials];
    }

    static getRRsByTimer(rings: string[]): string[] {
        if (!rings.length) {
            Scripts.Utils.playerPrint('nemas RRka', ColorEnum.red);
            throw 'e';
        }

        // sort rings by timers unknownTimer/unused (-1) first - example [-1, -1, 250000, 198000, 77000, 5000]
        rings.sort((a, b) => {
            const timerA = Orion.Timer(a);
            const timerB = Orion.Timer(b);
            if (timerA === -1) {
                return -1;
            }
            if (timerB === -1) {
                return 1;
            }
            return timerA > timerB ? -1 : 1;
        });

        return rings;
    }

    static useRRJournalCheck(rings: string[]): number {
        const timerMsg = 'It too soon to use it again';
        const successMsg = 'think of a way to use that item';
        const paraMsg = 'reach that';
        const emptyMsg = 'You must recharge it';

        Orion.ClearJournal(`${timerMsg}|${successMsg}|${paraMsg}|${emptyMsg}`);

        const ringsToCheckTimer = [...rings];
        // po uspesnem pouziti RRka prerusime cyklus
        for (const ring of rings) {
            Orion.UseObject(ring);
            const result = Scripts.Utils.waitWhileSomethingInJournal(
                [
                    timerMsg, // 0
                    successMsg, // 1
                    emptyMsg, // 2
                    paraMsg, // 3
                ],
                1000,
                100,
            );
            Orion.ClearJournal(`${timerMsg}|${successMsg}|${paraMsg}|${emptyMsg}`);

            // successMsg (1) or HLASKA NENALEZENA (-1)
            // nenalezena -> obcas se to stane a vetsinou by to melo znamenat ze se ring pouzil
            if (result === 1 || result === -1) {
                Scripts.Utils.resetTimer(ring);
                Scripts.Utils.resetTimer(RR_lastRRTimer);
                UltimateRR.moveRingToBackpack();
                UltimateRR.showTimeForNextRR(ringsToCheckTimer, true);
                return;
            }

            // paraMsg (3) - jebem na dalsi pokusy.. musis se z toho vykousat
            if (result === 3) {
                Scripts.Utils.playerPrint(`You can't reach that`, ColorEnum.red);
                throw 'e';
            }

            // timerMsg (0) (s validnim timerem)
            // timer ukazeme jen pokud ma ring skutecne bezici timer
            // pokud je zobrazena hlaska s timerem a zaroven ring nema timer nastaven, zkusime dalsi ring
            // mohlo dojit k tomu ze nekdo vytahl ring ze sperkovnice a ring dostal timto timer
            // nechci timer vypocitavat z journalu jelikoz se spozduje
            const timer = Orion.Timer(ring);
            if (result === 0 && timer !== -1) {
                UltimateRR.showTimeForNextRR(ringsToCheckTimer);
                return; // nepotrebuji kontrolovat dalsi ringy.. jejich timery mam srovnane
            }

            // emptyMsg (2) - nas v podstate nezajima.. jen ten ring muzu vyhodit z checku naslednych checku na timer
            // (stejne jako u msg TIMER pro ring ze sperkovnice '-1')
            ringsToCheckTimer.shift();
        }

        if (ringsToCheckTimer.length) {
            // pokud toto nastane.. zjisti co se stalo
            Scripts.Utils.playerPrint('[DEBUG] - zjisti co se stalo...');
            UltimateRR.showTimeForNextRR(rings);
        }
    }

    static showTimeForNextRR(rings: string[], justUsed = false) {
        const ONE_RR_TIME = 198000; // toto je cca cas pro otoceni jednoho RRka
        const PLAYER_RR_TIME = 23000; // toto je minimalni cas pro toceni dvou prstynku (cas po ktery nemuze hrac hodit jiny prsten)
        const lastRRTimer = Orion.Timer(RR_lastRRTimer); // cas od posledniho pouziti RRka
        const remainingTimeByPlayer = PLAYER_RR_TIME - lastRRTimer > 0 ? PLAYER_RR_TIME - lastRRTimer : 0; // aktual cas hrace na prsten

        let nearestRemainingTime = ONE_RR_TIME;
        let anyChargedRR = false;

        for (const ring of rings) {
            const ringTimer = Orion.Timer(ring);
            const remainingTimeByRing = ringTimer === -1 ? -1 : ONE_RR_TIME - ringTimer;

            Orion.Click(ring);
            const charges = Scripts.Utils.waitWhileSomethingInJournal(['0 charges', 'charges'], 1000, 1000);
            Orion.ClearJournal('charges');
            if (charges !== 0) {
                anyChargedRR = true;

                if (remainingTimeByPlayer > remainingTimeByRing) {
                    // -1 predpoklad ze je ten ring nepouzity (zjisti se az pri pouziti)
                    nearestRemainingTime = remainingTimeByPlayer;
                    break;
                }

                if (nearestRemainingTime > remainingTimeByRing) {
                    if (remainingTimeByRing < PLAYER_RR_TIME) {
                        nearestRemainingTime = PLAYER_RR_TIME;
                        break;
                    } else {
                        nearestRemainingTime = remainingTimeByRing;
                    }
                }
            }
        }

        if (justUsed) {
            Orion.AddDisplayTimer(
                RR_displayRR,
                nearestRemainingTime,
                'LeftTop',
                'Line|Bar',
                'RR',
                0,
                110,
                '0x88B',
                -1,
                '0x88B',
            );
            Orion.Exec('displayRRInfoReady', true, [nearestRemainingTime.toString()]);
        } else if (anyChargedRR) {
            const waitMsg = (nearestRemainingTime / 1000).toFixed(2);
            nearestRemainingTime > 0 && Scripts.Utils.playerPrint(`rr ${waitMsg}s`, ColorEnum.red);
        } else {
            Scripts.Utils.playerPrint('[Uz nemas dalsi RR]', ColorEnum.orange);
        }
    }
}
