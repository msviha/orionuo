interface IRepairItem {
    serial:string;
    count:number;
    name;
    x?:number;
    y?:number;
}

enum RepairResultEnum {
    cant,
    progress,
    fully

}

namespace Scripts {
    export class Repair {
        //region naradicko
        static toolCheck():boolean {
            const sewingKit = gameObject.tools.sewingKit;
            const isSewingKit = !!Orion.FindType(sewingKit.graphic).length;
            if (!Scripts.Repair.equipDagger() || !Scripts.Repair.equipHammer() || !isSewingKit) {
                Scripts.Utils.playerPrint(`Ke spusteni scriptu potrebujes siticko, kudlicku a kladivko`, ColorEnum.red);
                return false;
            }
            return true;
        }

        static equipDagger():boolean {
            const nbDagger = gameObject.uncategorized.nbDagger;
            const dagger = gameObject.crafting.blacksmithing.ironWeapons.swordsAndBlades.dagger;
            const daggerSerial = Scripts.Utils.findFirstType(nbDagger, 1) ||
                Scripts.Utils.findFirstType(dagger, 1);
            daggerSerial ?
                Orion.Equip(daggerSerial) :
                Scripts.Utils.playerPrint(`Nemas u sebe kudlicku`, ColorEnum.red);
            return !!daggerSerial;
        }

        static equipHammer() {
            const hammer = gameObject.tools.hammer;
            const silverHammer = gameObject.tools.silverHammer;
            const hammerSerial = Scripts.Utils.findFirstType(hammer, 1) ||
                Scripts.Utils.findFirstType(silverHammer, 1);
            hammerSerial ?
                Orion.Equip(hammerSerial) :
                Scripts.Utils.playerPrint(`Nemas u sebe kladivko`, ColorEnum.red);
            return !!hammerSerial;
        }
        //endregion

        static repairPlease() {
            Scripts.Utils.createGameObjectSelections([{ask: 'Vyber hrace na ktereho nahazes veci', addObject: 'repairMan'}]);

            const char = Orion.FindObject('repairMan');
            if (!char.IsHuman()) {
                Orion.Print('Musis vybrat cloveka', ColorEnum.red);
                return;
            }

            Orion.Say(`Muzes mi to ${char.Name()} opravit ?`);

            const currentEquip = Scripts.Dress.getSerialsFromCurrentEquip();

            for (const item of currentEquip) {
                Orion.MoveItem(item, 0, char.Serial());
                Orion.Wait(500);
            }
        }

        static repairTrade() {
            if (!Scripts.Repair.toolCheck()) {
                return;
            }

            const mobile = Orion.FindType('0xFFFF', '0xFFFF', 'ground', 'mobile|ignoreself', 3);
            for (var i = 0; i < mobile.length; i++) {
                const char = mobile[i];
                const tradeContainer = Orion.TradeContainer(char, 0);

                if (!tradeContainer) {
                    continue;
                }
                Scripts.Repair.fixItemsInContainer(tradeContainer);
                Orion.TradeClose(char);
            }

        }

        static repair() {
            if (!Scripts.Repair.toolCheck()) {
                return;
            }

            Scripts.Utils.createGameObjectSelections([{ask: 'Nacti pytlik s vecma k oprave', addObject: 'repairBag'}]);
            Orion.OpenContainer('repairBag');
            Orion.Wait(responseDelay);
            Scripts.Repair.fixItemsInContainer('repairBag', true);

        }

        static fixItemsInContainer(container:string, moveToBackpackAndReturn = false) {
            let items:IRepairItem[] = Scripts.Repair.getItemsFromContainer(container);
            for (let j = 0; j < items.length; j++) {
                const itm = items[j];
                const itmObj = Orion.FindObject(itm.serial);
                const itmName = itmObj.Name();

                if (moveToBackpackAndReturn) {
                    Orion.MoveItem(itm.serial, itm.count);
                    Orion.Wait(500);
                }

                Orion.Say(`Opravuji ${itmName}`);

                while (true) {
                    const repairResult = Scripts.Repair.repairItem(itm);
                    Orion.Wait(500);
                    if (repairResult === RepairResultEnum.fully) {
                        Orion.Say(`${itm.name} [zcela opraven]`);
                        break;
                    }
                    else if (repairResult === RepairResultEnum.progress) {
                        continue;
                    }
                    else if (repairResult === RepairResultEnum.cant) {
                        Orion.Say(`${itm.name} [nemohu opravit]`); // kamenovky treba
                        break;
                    }
                }

                if (moveToBackpackAndReturn) {
                    Orion.Wait(500);
                    Orion.MoveItem(itm.serial, itm.count, container, itm.x, itm.y);
                }
                Orion.Wait(500);
            }
        }

        static repairItem(item:IRepairItem):RepairResultEnum {
            Scripts.Utils.worldSaveCheckWait();
            const naradi = gameObject.tools.repairKit;

            const patterns = [
                'You completely repaired',
                'je v perfektnim stavu',
                'You repaired',
                'Musis mit v ruce kudlicku',
                'Musis mit v ruce kladivko',
                'Musis mit u sebe nacini na siti',
                'You damaged',
                'Tuto vec nedokazes opravit'
            ];

            Orion.ClearJournal(patterns.join('|'));
            Orion.UseType(naradi.graphic, naradi.color);
            Orion.WaitForTarget();
            Orion.TargetObject(item.serial);

            const patternIndex = Scripts.Utils.waitWhileSomethingInJournal(patterns);

            if (patternIndex === 0 || patternIndex === 1) {
                return RepairResultEnum.fully;
            }

            if (patternIndex === 2 || patternIndex === 6) {
                return RepairResultEnum.progress;
            }

            if (
                (patternIndex === 3 && !Scripts.Repair.equipDagger()) ||
                (patternIndex === 4 && !Scripts.Repair.equipHammer()) ||
                patternIndex === 5 ||
                patternIndex === 7
            ) {
                return RepairResultEnum.cant;
            }
            // kdyz prehodi naradi muzeme volat znovu
            Orion.Wait(500);
            return Scripts.Repair.repairItem(item);
        }

        static getItemsFromContainer(container:string):IRepairItem[] {
            const itemsGameObjects = Orion.FindTypeEx('0xffff', '0xffff', container);
            const items:IRepairItem[] = [];
            for (const item of itemsGameObjects) {
                Orion.Click(item.Serial());
                Orion.Wait(responseDelay);
                items.push({serial: item.Serial(), count: item.Count(), name: item.Name(), x: item.X(), y: item.Y()});
            }

            return items;
        }

        //region automat
        static fixLoop(cenaNaradi = 1000) {
            if (!Scripts.Repair.toolCheck()) {
                return;
            }

            let osloveniZakaznici = Shared.GetArray('osloveniZakaznici', []);
            const sewingKit = gameObject.tools.sewingKit;
            const gp = gameObject.uncategorized.gp;
            const brokeKitPattern = 'Naradi se pri oprave poskodilo';

            Orion.SetTimer('welcomeRepair');
            Orion.SetTimer('prupovidkaTimer', 30000);
            Scripts.Repair.randomPrupovidka();

            while (!Player.Dead()) {
                const prupovidkaTimer = Orion.Timer('prupovidkaTimer');
                if (prupovidkaTimer > 120000) {
                    Scripts.Repair.randomPrupovidka();
                    Scripts.Utils.resetTimer('prupovidkaTimer');
                }
                const mobile = Orion.FindType('0xFFFF', '0xFFFF', 'ground', 'mobile|ignoreself', 3);
                for (var i = 0; i < mobile.length; i++) {

                    const char = mobile[i];
                    const charName = Orion.FindObject(char)?.Name();

                    const timer = Orion.Timer('welcomeRepair');
                    osloveniZakaznici = Shared.GetArray('osloveniZakaznici', []);
                    if (timer > 60000 && osloveniZakaznici.indexOf(charName) === -1) {
                        Orion.Say(`Ahoj ${charName}, nepotrebujes opravit nejake veci ? Kdyztak mi to hod`);
                        Scripts.Utils.resetTimer('welcomeRepair');
                        osloveniZakaznici.push(charName);
                        Shared.AddArray('osloveniZakaznici', osloveniZakaznici);
                    }

                    let isTradeWindowOpened = !!Orion.TradeOpponent(char);
                    let sayOnce = true;

                    while (isTradeWindowOpened) {
                        const tradeContainer = Orion.TradeContainer(char, 0);

                        if (sayOnce) {
                            Scripts.Repair.welcomeTrade(charName);
                            sayOnce = false;
                        }

                        const isChecked = Orion.TradeCheckState(char, 0);
                        if (isChecked) {
                            // nacist veci v trade okne
                            let items:IRepairItem[] = Scripts.Repair.getItemsFromContainer(tradeContainer);

                            // checknout gp object
                            const gpSerials = Orion.FindType(gp.graphic, gp.color, tradeContainer);
                            if (gpSerials.length !== 1) {
                                gpSerials.length > 1 ?
                                    Orion.Say(`${charName} dej mi jen jednu hromadku penez, nejsem smenarnik`) :
                                    Orion.Say(`${charName} uz jsem ti rikal ze zadarmo nedelam`);
                                Orion.TradeClose(char);
                                Orion.Wait(responseDelay);
                                continue;
                            }

                            // odfiltrovat gp object
                            items = items.filter((itm) => itm.serial !== gpSerials[0]);

                            let zbyvaPenez = Orion.FindObject(gpSerials[0]).Count();
                            let konecnaCena = 0;

                            Orion.Wait(500);
                            Orion.TradeCheck(char, true);
                            Orion.Wait(500);

                            // oprava a vraceni veci
                            for (let j = 0; j < items.length; j++) {
                                const itm = items[j];
                                const itmName = Orion.FindObject(itm.serial).Name();


                                if (zbyvaPenez < cenaNaradi) {
                                    Orion.Say('Bohuzel jsi mi nedal dost penez na opravu vsech veci');
                                    for (let k = j; k < items.length; k++) {
                                        const neopravenyItem = items[k];
                                        Orion.Click(neopravenyItem.serial);
                                        Orion.Wait(responseDelay);
                                        const neopravenyItmName = Orion.FindObject(neopravenyItem.serial).Name();
                                        Orion.Say(`${neopravenyItmName} nebyl opraven`);
                                    }
                                }
                                else {
                                    Orion.Say(`Opravuji ${itmName}`);
                                }

                                while (zbyvaPenez >= cenaNaradi) {
                                    Orion.ClearJournal(brokeKitPattern);

                                    const repairResult = Scripts.Repair.repairItem(itm);
                                    Orion.Wait(500);

                                    if (Orion.InJournal(brokeKitPattern)) {
                                        zbyvaPenez -= cenaNaradi
                                        konecnaCena += cenaNaradi
                                    }

                                    if (repairResult === RepairResultEnum.fully) {
                                        Orion.Say(`${itm.name} [zcela opraven]`);
                                        break;
                                    }
                                    else if (repairResult === RepairResultEnum.progress) {
                                        continue;
                                    }
                                    else if (repairResult === RepairResultEnum.cant) {
                                        Orion.Say(`${itm.name} [nemohu opravit]`); // kamenovky treba
                                        break;
                                    }
                                }

                                let charObj = Orion.FindObject(char);
                                let waitForChar = 10000;
                                while ((!charObj || charObj.Distance() > 3 || !Orion.InLOS(char)) && waitForChar) {
                                    Orion.Say(`Cekam az ke mne prijde ${charName} bliz, jinak si jeho veci necham.`)
                                    Orion.Wait(2000);
                                    waitForChar -= 2000;
                                }
                                Orion.MoveItem(itm.serial, itm.count, char);
                                Orion.Wait(500);
                            }

                            const gpObj = Orion.FindObject(gpSerials[0]);
                            if (gpObj) {
                                Orion.MoveItem(gpObj.Serial(), zbyvaPenez, char);
                                Orion.Say(`Zde mate zpatky [${zbyvaPenez}gp]. Cena opravy [${konecnaCena}gp]`);
                                Orion.Wait(500);
                            }
                            else {
                                Orion.Say(`Cena opravy [${konecnaCena}gp].`);
                                Orion.Wait(500);
                            }

                            Orion.TradeCheck(char, true);
                            while (isTradeWindowOpened) {
                                Orion.Wait(500);
                                isTradeWindowOpened = !!Orion.TradeOpponent(char);
                            }

                        }

                        isTradeWindowOpened = !!Orion.TradeOpponent(char);
                        Orion.Wait(500);
                    }
                    Orion.Wait(1000);
                }
                Orion.Wait(2000);
            }
        }

        static welcomeTrade(name:string) {
            Orion.Say(`Ahoj ${name}, jestli chces neco opravit, nezapomen k vecem prihodit penize a potvrdit okno.`);
            const randEmote = [
                'Sibalsky se usmal a potrasl si mechem',
                'Zakoukal se na tve plne kapsy',
                'Odkaslal si a dal ruce v bok',
                'Prepocitava si zlate deedy',
                'Ukazuje ti sve kvalitni nacini',
                'Doufa ze jsi pochopil instrukce',
                'Vypada jako by te predem chtel okrast'
            ]
            const emote = randEmote[Math.floor(Math.random() * randEmote.length)];
            Orion.SayEmote(emote);
        }

        static randomPrupovidka() {
            const randPrupovidka = [
                'Videl jsem 2 PK, jeste ze mame ty Mestske straze. Ty krysy dostali co proto',
                'Prodam string, vcera nam padlo wire ale vyprave sem rekl ze fizzlo, ale psst',
                'Nevite jak si opravim kladivko kterym opravuju veci?',
                'Nekde jsem zaslechl ze bacharka uz nebude prodavat lamy',
                'Cumis na me? Hej! Jo ty v tom rozbitem brnku. Pojd, ja se na to podivam',
                'Opravim brnko (jen nekomu)',
                'Snad neni divne kdyz reknu ze bacharka ma peknej zadek',
                'V hospode jsme se s klukama sazeli kolikatky ma Fairy prsa',
                'Zrovna jsem videl v lese 3 Animal Guardiany, malem me zabili',
                'Kdyz jsem rekl, ze to brnko opravim, tak neni potreba mi to kazdych 6 mesicu pripominat',
                'Nemate nekdo adresu na Belinga, potrebuju si vydelat',
                'Slysel jsem ze MG je slusna guilda. Rikal mi to Ardelion',
                'Kdyz jsem se hlasil do MG, nikdo mi nerikal ze pro ne budu delat otroka',
                'Chtel jsem se pridat k Harpagonum, pak jsem ale dostal rozum a jsem u MG',
                'K obedu jsem mel 12 Ginseng salatu',
                'Sva brneni si prosim umyjte nez mi je predate na opravu. Vim ze tu nejsou nikde zachody ale jinak vam tu helmu neopravim',
                'Slysel jsem ze na trh umisti Bitcoinmat',
                'Pred mesicem jsem videl Spirita opravovat brneni, cele ho rozbil chudak',
                'Muj otec Abraham Kohn rikal ze si mam nejdriv rict lidem o penize'
            ]
            const say = randPrupovidka[Math.floor(Math.random() * randPrupovidka.length)];
            Orion.Say(say);
        }
        //endregion automat

    }
}
