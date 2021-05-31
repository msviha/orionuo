namespace Scripts {

    export class Combat {

        /**
         * Prepina stity ktere mate u sebe, pri vychozim nastaveni jen v zakladnim batuzku. Vybrany stit je ulozen od globalni promene __LastShield, kterou pouzivaji switchWeapon a equipSlotWeapon
         * @param options - objekt, mozne atributy: 
         * recuseSearch - true/false (vychozi false), prepinac rekurzivniho prohledavani kontejneru. 
         * @returns 
         */
        public static switchShield(options?:any) {

            if (Combat.checkDenyEquip()) {
                Utils.playerPrint("deny weapon", ColorEnum.orange , true);  
                return;
            }

            const recuseSearch = options?.recuseSearch ?? false;
            const shields = Utils.getSerialsFromMyGameObjects(gameObject.shields, recuseSearch, ["LeftHand" , "RightHand"]).sort((a, b) => parseInt(a, 16) - parseInt(b, 16));
            const leftHandObj = Orion.ObjAtLayer("LeftHand");
            let shield = shields?.length > 0 ? shields[0] : null;

            if (leftHandObj?.Exists() && shields.indexOf(leftHandObj.Serial()) > -1 && shields.indexOf(leftHandObj.Serial()) < shields.length -1) {
                shield = shields[shields.indexOf(leftHandObj.Serial()) + 1];
            } 

            if (shield && Orion.FindObject(shield)?.Exists()) {
                Orion.Equip(shield);
                Orion.AddObject("__LastShield", shield);
            }
        }

         
        /**
         * Prepina zbrane ktere mate u sebe, ve vychozim nastaveni jen v zakladnim batuzku. Vybrana zbran je ulozena do globalni promene __LastWeapon.
         * @param options - objekt, mozne atributy: 
         * recuseSearch - true/false (vychozi false), prepinac rekurzivniho prohledavani kontejneru. 
         * ensureShield - true/false (vychozi true), prepinac zajistuje nahozeni stitu u jednorucnich zbrani.
         * @returns 
         */         
        public static switchWeapon(options?:any) {

            if (Combat.checkDenyEquip()) {
                Utils.playerPrint("deny weapon", ColorEnum.orange , true);  
                return;
            }

            const recuseSearch = options?.recuseSearch ?? false;
            const ensureShield = options?.ensureShield ?? true;
            const weapons = Utils.getSerialsFromMyGameObjects(gameObject.weapons, recuseSearch, ["LeftHand" , "RightHand"]).sort((a, b) => parseInt(a, 16) - parseInt(b, 16));
            const handObj = Orion.ObjAtLayer("RightHand") ?? Orion.ObjAtLayer("LeftHand");
            let weapon = weapons?.length > 0 ? weapons[0] : null;

            if (handObj?.Exists() && weapons.indexOf(handObj.Serial()) > -1 && weapons.indexOf(handObj.Serial()) < weapons.length -1) {
                weapon = weapons[weapons.indexOf(handObj.Serial()) + 1];
            } 

            if (weapon && Orion.FindObject(weapon)?.Exists()) {
                Orion.Equip(weapon);
                Orion.AddObject("__LastWeapon", weapon);
                Utils.waitForCond(() => { 
                    if ((Orion.ObjAtLayer("RightHand") ?? Orion.ObjAtLayer("LeftHand"))?.Serial() === weapon) {
                        return true;
                    }
                    return false;
                 }, 500);
            }

            if (ensureShield) {
                Combat.ensureShield();
            }
        }

        /**
         * Nahazuje stit pokud neni nahozen. Vyuziva globalni promenout __LastShield
         */
        public static ensureShield() {
            const leftHandObj = Orion.ObjAtLayer("LeftHand"); 
            if (!leftHandObj?.Exists()) {
                let shield = Orion.FindObject("__LastShield");
                if (!shield?.Exists()) {
                    Combat.switchShield();
                } else {
                    Orion.AddObject("__LastShield", shield.Serial());
                    Orion.Equip(shield.Serial());
                }
            }
        }

        /**
         * Nahazuje zvolenou zbran, uklada ji do prislusneho "slotu" pres kod, pokud existuje tento serial bere se on, jinak pres my object hleda typ/barvu, pripadne vyhodi tercik dle nastaveni options
         * @param slotCode - sufix pod kterym bude ulozena zbran v globalnich promenych, napr. Secondary, IJSFork atd.
         * @param type - objekt typu IMyGameObject, viz definice typu.
         * @param options - objekt, mozne atributy: 
         * recuseSearch - true/false (vychozi false), prepinac rekurzivniho prohledavani kontejneru. 
         * ensureShield - true/false (vychozi true), prepinac zajistuje nahozeni stitu u jednorucnich zbrani.
         * add - true/false (vychozi false), prepinac zajistuje vyhozeni terciku a urceni nove zbrane do slotu pokud ulozeny serial neexistuje.
         * printColor - string (vychozi null), barva hlasky nahozene slot zbrane dle ColorEnum.
         */
        public static equipSlotWeapon(slotCode:string, type?:IMyGameObject, options?:any) {

            if (Combat.checkDenyEquip()) {
                Utils.playerPrint("deny weapon", ColorEnum.orange , true);  
                return;
            }

            const slotPrefix = "Slot_";
            const ensureShield = options?.ensureShield ?? true;
            const add = options?.add ?? false;
            const recuseSearch = options?.recuseSearch ?? false;
            const printColor = options?.printColor ?? ColorEnum.pureWhite;
            const graphic = type?.graphic ?? "any";
            const color = type?.color ?? "any";
            const fullCode = slotPrefix + slotCode;
  

            let slotItem = Orion.FindObject(fullCode);

            if (!slotItem?.Exists() || type && (graphic !== "any" && slotItem.Graphic() !== graphic || color !== "any" && slotItem.Color() !== color)) {
                const types = Orion.FindTypeEx(graphic, color, 'backpack', '', '', '', recuseSearch);
                if (type && types && types.length > 0) {
                    slotItem = types[0];
                } else if (add) {
                    Orion.WaitForAddObject(fullCode);
                    Orion.Wait(100);
                    slotItem = Orion.FindObject(fullCode);
                }
            }

            const handObj =  Orion.ObjAtLayer("RightHand") ?? Orion.ObjAtLayer("LeftHand");
            if (slotItem?.Exists()) {
                if(handObj?.Serial() !== slotItem.Serial()) {
                    Orion.Equip(slotItem.Serial());
                    Utils.waitForCond(() => { 
                       if ((Orion.ObjAtLayer("RightHand") ?? Orion.ObjAtLayer("LeftHand"))?.Serial() === slotItem.Serial()) {
                           return true;
                       }
                       return false;
                    }, 500);

                    Utils.playerPrint("[ " + slotCode + " ]", printColor);         
                 } else {
                    Utils.playerPrint(slotCode, printColor, true);  
                }    
                Orion.AddObject(fullCode, slotItem.Serial());                   
            } else {
                Orion.RemoveObject(fullCode);
                Utils.playerPrint("[ !" + slotCode + " ]", ColorEnum.red);  
            }

            if (ensureShield) {
                Combat.ensureShield();
            }
        }

        public static currentWeapon() {
            return  Orion.ObjAtLayer("RightHand") ?? Orion.ObjAtLayer("LeftHand");
        }


        public static checkDenyEquip():boolean {
            const currentWeapon = Combat.currentWeapon();
            if (currentWeapon?.Graphic() === "0x13b5" && currentWeapon?.Color()=== "0x052d") {//Mytheril Scimitar
                return true;
            } else if (currentWeapon?.Graphic() === "0x0e89" && currentWeapon?.Color()=== "0x05a6") {//Oak-wood Quarter Staff
                return true;
            }

            return false;
        }
    }
}
