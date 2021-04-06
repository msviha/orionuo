namespace Scripts {

    export class MobMaster {

        static rename(mob:GameObject) {
            const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
            const mobSerial = mob.Serial();
            const canRename = mob.CanChangeName();
            let mobName = mob.Name();

            if (canRename) {

                if (!mobName ||  mobName.length === 0) {
                    Orion.GetStatus(mobSerial);
                    Orion.RequestName(mobSerial);
                    mobName = mob.Name();
                }

                if (!MobMaster.isRenamedByPlayer(mobName)) {//TODO vytahovani zalozek 
                    let resultName = "";
                    for (let r = 0; r < 5; r++) {
                        let rand = Orion.Random(chars.length);
                        resultName = resultName + chars[rand];
                    }

                    resultName = MobMaster.getPlayerShorCode() + resultName;
                    resultName = resultName.substring(0, resultName.length - 2) + (resultName[resultName.length - 2]).toLocaleUpperCase() + (resultName[resultName.length - 1]).toLocaleUpperCase();

                    Orion.RenameMount(mobSerial, resultName);

                    var sychr = 0;
                    var newName = mobName;

                    while (newName === mobName && sychr < 400) {
                      Orion.GetStatus(mobSerial);
                      Orion.RequestName(mobSerial);
                      Orion.Wait(100);
                      let mobObj = Orion.FindObject(mobSerial);
                      if (mobObj) {
                        newName = mobObj.Name(); 
                      } else {
                          break;
                      }
                      sychr += 100;
                    }
        
                    var renameSuccess = newName !== mobName;
                    if (renameSuccess) { 
                        Orion.CharPrint(mobSerial, ColorEnum.pureWhite, `[ ${newName} ]`);

                        //TODO
                        //Orion.ShowStatusbar(mobSerial, 1000, 100, true); StatusBarWrapper - pozice x y start, opakovani, smer, max do resetu
                        // const doneList:Array<IRenamedMob> = Shared.GetArray('autoHandlers.autoRename.doneList', new Array<IRenamedMob>());
                        // let doneItem:IRenamedMob = { graphic: char.Graphic(), serial: char.Serial() };
                        // doneList.push(doneItem);
                        // Shared.AddArray('autoHandlers.autoRename.doneList', doneList);

                        return true;
                    }
                }
            }
            return false;
        } 

        static resetMobCommands() {
            Shared.RemoveVar('mobgo.lastSerial');
            Shared.RemoveVar('mobkill.target'); 
            Shared.RemoveVar('mobkill.lastSerial'); 
        }

        private static resolveSayColor(): string {
            return config?.mobMaster.sayColor || '0x00B3';
        }        


        private static resolveMobkillTarget(targets?:string, useSavedTarget:boolean=true):TargetResult {
            let target = new TargetResult();
            if (useSavedTarget) {
                let storedSerial = Shared.GetVar('mobkill.target');
                if (storedSerial) {
                    target.gameObject(storedSerial);
                }
            }

            if (!target.isValid() && targets) {
                target = TargetingEx.getTarget(targets);
            }

            if (target.isValid() && target.gameObject().Mobile() && !target.gameObject().Dead()) {
                Shared.AddVar('mobkill.target', target.gameObject().Serial());
            }

            return target;
        }

        private static resolveMobkillPets(currentTarget:TargetResult):Array<GameObject> {

            let storedPets:Array<GameObject> = new Array<GameObject>();
            const currentPets = Orion.FindTypeEx('!0x0190|!0x0191', '0xFFFF', 'ground', 'live', 18)
            .filter((obj)=> { return obj.CanChangeName() && !storedPets.some(a=>a.Serial() == obj.Serial()); });
            currentPets.sort((a,b)=> { 
                if (a.Serial() > b.Serial()) 
                    return 0;
                else 
                    return 1;
            });

            currentPets.forEach(element => {
                storedPets.push(element);
            });
            
            for (let i = storedPets.length - 1; i >= 0; i--) {
                if (!Orion.FindObject(storedPets[i].Serial()) || !storedPets[i].Exists()) {
                    storedPets.splice(i);
                }
            }

            if (currentTarget?.isValid() && currentTarget?.gameObject().Mobile() && !currentTarget?.gameObject().Dead()) {
                storedPets = storedPets.filter((obj)=> { 
                    return obj.Serial() !== currentTarget.gameObject().Serial() 
                });
            }

            return storedPets;
        }

               /**
         * Vola vsechny pety na vybrany target
         * @param targets - rozsirene targetovani, zleva do prava aliasy targetu odelene '|'
         * @param useSavedTarget - uklada pri prvnim volani nalezeny target dle aliasu, zajistuje ze pri zmene tohoto targetu napr. hrac pouziva lastattack a zautoci v prubehu boje na jineho mob, 
         * tak summy si porad drzi puvodni target. Dokud neni zresetovani pri volani mobStop(), mobCome() 
         */ 
        static mobKillAll(targets?:string, useSavedTarget:boolean=true) {  
            const target = MobMaster.resolveMobkillTarget(targets, useSavedTarget);
            const storedPets = MobMaster.resolveMobkillPets(target);

            if (storedPets?.length && target?.isValid() && target?.gameObject().Mobile() && !target?.gameObject().Dead()) {
                for (const pet of storedPets) {

                    let sayColor = MobMaster.resolveSayColor();
                    Utils.ensureName(pet);
                    Utils.ensureName(target.gameObject());

                    const fastTimer = Orion.Timer('mobkill.fastprintsufix');
                    const hitColor = MobMaster.getPrintEnemyColorByHits(target.gameObject().Hits(), target.gameObject().MaxHits());
                    sayColor = hitColor;
                    if (fastTimer > 3000) {
                        Orion.PrintFast(target.gameObject().Serial(),hitColor,0, `[${target.gameObject().Hits()}/${target.gameObject().MaxHits()}]`);
                        Orion.SetTimer('mobkill.fastprintsufix');
                    } else if (fastTimer < 0) {
                        Orion.SetTimer('mobkill.fastprintsufix');
                    }
                    
                    target.waitTarget();
                    Utils.sayWithColor(`${pet.Name()} kill`, sayColor);
                    const success = Orion.WaitForTarget(1000);
                }
            }
            else  {
                Utils.playerPrint(ColorEnum.orange, "[ no pets target ] ");
            }
        }
        /**
         * Vola po jednon vsechny pety, jedno volani = jedno jmeno na vybrany target, nebo vyhodi tercik
         * @param targets - rozsirene targetovani, zleva do prava aliasy targetu odelene '|'
         * @param useSavedTarget - uklada pri prvnim volani nalezeny target dle aliasu, zajistuje ze pri zmene tohoto targetu napr. hrac pouziva lastattack a zautoci v prubehu boje na jineho mob, 
         * tak summy si porad drzi puvodni target. Dokud neni zresetovani pri volani mobStop(), mobCome() 
         */
        static mobKill(targets?:string, useSavedTarget:boolean=true) { 

            const target = MobMaster.resolveMobkillTarget(targets, useSavedTarget);
            const storedPets = MobMaster.resolveMobkillPets(target);
            let lastSerial = Shared.GetVar('mobkill.lastSerial', "");
            let pet = Orion.FindObject('0');

            if (storedPets && storedPets.length > 0) {
                if (!lastSerial || lastSerial === "") {
                    pet = storedPets[0];
                    lastSerial = pet.Serial();
                } else {
                    for (let i = 0; i < storedPets.length; i++) {
                        const nextPet = storedPets[i];
                        if (nextPet.Exists() && nextPet.Serial() === lastSerial) {
                            if (i === storedPets.length - 1) {
                                pet = storedPets[0];
                                lastSerial = pet.Serial();
                            } else {
                                pet = storedPets[i + 1];
                                lastSerial = pet.Serial();
                            }
                            break;
                        }
                    }       
                }

                if (pet?.Exists()) {
                    Shared.AddVar('mobkill.lastSerial', lastSerial); 
                    let sayColor = MobMaster.resolveSayColor();
                    Utils.ensureName(pet);

                    if (target?.isValid() && target?.gameObject().Mobile() && !target?.gameObject().Dead()) {
                        const fastTimer = Orion.Timer('mobkill.fastprintsufix');
                        const hitColor = MobMaster.getPrintEnemyColorByHits(target.gameObject().Hits(), target.gameObject().MaxHits());
                        sayColor = hitColor;
                        if (fastTimer > 3000) {
                            Orion.PrintFast(target.gameObject().Serial(),hitColor,0, `[${target.gameObject().Hits()}/${target.gameObject().MaxHits()}]`);
                            Orion.SetTimer('mobkill.fastprintsufix');
                        } else if (fastTimer < 0) {
                            Orion.SetTimer('mobkill.fastprintsufix');
                        }
                        Utils.ensureName(target.gameObject());
                        target.waitTarget();
                    }
                    Utils.sayWithColor(`${pet.Name()} kill`, sayColor);
                } else {
                    Shared.RemoveVar('mobkill.lastSerial'); 
                }
            } else {
                Shared.RemoveVar('mobkill.lastSerial'); 
            }
        }

        /**
         * Shrinkne nejzranenejsiho peta v okoli, pamatuje si summy a zveda ze zeme pokud jde o klamak ktery zustava na zemi. 
         * Druhotna funcnost je zvedani shrnk klamaku ze zeme, takze i kdyz neni co shrinkovat lze pouzit jako rychle zvednuti napr na Skyhawkovi.
         * Do 2 policek!
         */
        static shrinkOne() {
            let pets = Orion.FindTypeEx('!0x0190|!0x0191', '0xFFFF', 'ground', 'live', 2);
            const ignoreList:Array<string> = Shared.GetArray("mobmaster.shrinkOne.ignoreList", Array<string>());
            Orion.ClearJournal('Ale co to delas?|Bez bliz|Zviratko bylo shrinknuto');
            pets = pets.filter(a=>a.CanChangeName() && a.Exists() && !ignoreList.some(p=> p === a.Serial())).sort((a, b) => a.Hits() - b.Hits());
            if (pets.length > 0) {
                for (let i = 0; i < pets.length; i++) {
                    const pet = pets[i];
                    
                    Orion.PrintFast(pet.Serial(), ColorEnum.green, 0, "pet")
                    Orion.WaitTargetObject(pet.Serial());
                    this.useShrinkKad();
                    const resultIndex = Scripts.Utils.waitWhileSomethingInJournal(["Ale co to delas?", "Bez bliz", "Zviratko bylo shrinknuto"], 500);
                    if (resultIndex > -1) {
                        if (Orion.InJournal("Ale co to delas?")) {
                            Orion.PrintFast(pet.Serial(), ColorEnum.red, 0, "ignore")
                            ignoreList.push(pet.Serial());
                        } else {
                            Shared.AddArray("mobmaster.shrinkOne.ignoreList", ignoreList);
                        }
                    }
                    break;
                }


            } else {
                Orion.PrintFast(Player.Serial(), ColorEnum.green, 0, "no pets");
            }
            Shared.AddArray("mobmaster.shrinkOne.ignoreList", ignoreList);

            const shrinkKlamakList = Clean.getGameObjectList(gameObject.klamak);
            for (let i = 0; i < shrinkKlamakList.length; i++) {
                let shrinked = Orion.FindTypeEx(shrinkKlamakList[i].graphic, shrinkKlamakList[i].color || '0xFFFF', 'ground', 'item', 2);
                if (shrinked && shrinked.length) {
                    for (let o = 0; o < shrinked.length; o++) {
                        Orion.MoveItem(shrinked[o].Serial(), 1, 'backpack', 20, 20);
                        Orion.Wait(350);
                        break;
                    }
                }
            }
        }        

        static useShrinkKad() {
            const kad = gameObject.potions.shrink.kad;
            Orion.UseType(kad.graphic, kad.color);
        }

        static mobCome() {
            TargetingEx.cancelResetTarget();
            //TODO barvu podle celkoveho HP vsech mobu
            let sayColor = MobMaster.resolveSayColor();
            MobMaster.resetMobCommands();
            Utils.sayWithColor('all come', sayColor);
        }        

        static mobStop() {
            TargetingEx.cancelResetTarget();
            //TODO barvu podle celkoveho HP vsech mobu
            let sayColor = MobMaster.resolveSayColor();
            MobMaster.resetMobCommands();
            Utils.sayWithColor('all stop', sayColor);
        }

        /**
         * Vola "all go", pripadne go pro konkretniho peta podle laststatus tj. toho ktereho posleniho vytahnu. 
         */
        static mobGo() {
            TargetingEx.cancelResetTarget();
            let text = "all go";
            let sayColor = MobMaster.resolveSayColor();
            let lastMob = Orion.FindObject(Shared.GetVar('mobgo.lastSerial'));
            const statusMob = Orion.FindObject('laststatus');//Orion.ClientLastTarget());

            if (!lastMob || !lastMob.Exists()) {
                lastMob = statusMob;
            }
    
            if (lastMob && 
                lastMob.Exists() && 
                lastMob.CanChangeName()
                ) {

                    Utils.ensureName(lastMob);
                Shared.AddVar('mobgo.lastSerial', lastMob.Serial());
                const hitColor = MobMaster.getPrintAlieColorByHits(lastMob.Hits(), lastMob.MaxHits());
                text = `${lastMob.Name()} go`;
                sayColor = hitColor;

                const fastTimer = Orion.Timer('mobgo.fastprintsufix');
                if (fastTimer > 2000) {
                    Orion.PrintFast(lastMob.Serial(),hitColor,0, MobMaster.mobNameSufix(lastMob.Name()));
                    Orion.SetTimer('mobgo.fastprintsufix');
                } else if (fastTimer < 0) {
                    Orion.SetTimer('mobgo.fastprintsufix');
                }
            } else {
                Shared.RemoveVar('mobgo.lastSerial');
            }
            Utils.sayWithColor(text, sayColor);
        }

        /**
         * 
         * @param hits aktualni hodnota HP
         * @param maxHits maximalni hodnota HP
         * @returns vraci jednu z 6 barev podle urovne zraneni cervenych friend charu, nejsytejsi = maloz zraneny, nejsvetlejsi = temer mrtvy
         */ 
        static getPrintAlieColorByHits(hits:number, maxHits:number):string {
            var c = '0x023b';
          
            if (hits && maxHits) {
                 const perc = hits / maxHits;
         
                if (perc >= 0.8)
                    c = '0x003e';
                else if (perc >= 0.6)
                    c = '0x003f';
                else if (perc >= 0.4)
                    c = '0x0040';
                else if (perc >= 0.2)
                    c = '0x0041';
                else if (perc >= 0.1)
                    c = '0x0042';
            }
            return c;
        } 

        /**
         * 
         * @param hits aktualni hodnota HP
         * @param maxHits maximalni hodnota HP
         * @returns vraci jednu z 6 barev podle urovne zraneni cervenych charu, nejsytejsi = maloz zraneny, nejsvetlejsi = temer mrtvy
         */
        static getPrintEnemyColorByHits(hits:number, maxHits:number):string {
            var c = '0x021d';
          
            if (hits && maxHits) {
 
                const perc = hits / maxHits;
          
                if (perc >= 0.8)
                    c = '0x0025';
                else if (perc >= 0.6)
                    c = '0x0026';
                else if (perc >= 0.4)
                    c = '0x0027';
                else if (perc >= 0.2)
                    c = '0x0028';
                else if (perc >= 0.1)
                    c = '0x0029';
            }
            return c;
        } 

        /**
         * 
         * @returns vraci string se 3 znaky ktere reprezentuji jmeno hrace 
         */
        static getPlayerShorCode():string {

            let playerShorCode = Shared.GetVar('playerShorCode');

            if (!playerShorCode || playerShorCode === "") {
                let name = Player.Name();
 
                if (!name || name === "") {
                    Orion.GetStatus(Player.Serial());
                    Orion.RequestName(Player.Serial());
                    name = Player.Name();
                }

                name = name.toLocaleLowerCase();
                name = name.replace(" ", "");
                name = name.replace("-", "");
                name = name.replace("'", "");
                name = name.replace("_", "");
                name = name.replace(".", "");
                name = name.replace(",", "");

                playerShorCode = name;

                if (name.length > 2) {
                    var mid = (name.length / 2) | 0;
                    playerShorCode = name[0] + name[mid] + name[name.length - 1];
                }
                Shared.AddVar('playerShorCode', playerShorCode);
            }
        
            return playerShorCode;
        }    
        
        //---------------------------------------------------------------------------------------------

        /**
         * 
         * @param name  - datovy typ string, nazev
         * @returns - vraci posledni dva znaky z nazvu nebo null
         */
        static mobNameSufix(name:string):string {

            let result = null;
            if (name && name.length > 1) {
                result = name[name.length - 2] + name[name.length - 1];
            }
        
            return result;
        }

        /**
         * 
         * @param name  datovy typ string, porovnavany nazev 
         * @returns vraci true pokud nazev zacina playerShorCode jinak false
         */
        static isRenamedByPlayer(name:string):boolean {
            if (name && name.length > 0) {
                let code = MobMaster.getPlayerShorCode();

                if (!code.length || name.length < code.length) {
                    return false;
                }
            
                for (let i = 0; i < code.length; i++) {
                    if (name[i] != code[i]) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
    }
}
