namespace Scripts {
    /**
     * Trida pro rozsirene targetovani oproti zakladnimu prinasi nove aliasy, ktere usnadnuji vyber toho co chci zamerit. 
     * Tento system je vyuzivan napric vsemi scripty odeme, ktere vyuzivaji nejaky target.
     * Aliasy targetu jsou vyhodnocovany zleva doparava, pokud neni nalezen prechazi se na dalsi atd.. 
     * Odelujeme svislitkem "|".
     * Pri stringove reprezentaci lze rozsirit i o parametr vzdalenosti, ktery umistime za carku. Ma vyznam jen u nekterych aliasu
     *  @example 'selfinjured|nearinjuredalielos' - pokud jsem zraneny nebo otraveny, vraci to me, pripadne frienda/peta ktery je v LINE OF SIGHT a je ke me nejblize
     *  @example 'selfinjured|nearinjuredalielos,5' - pokud jsem zraneny nebo otraveny, vraci to me, pripadne frienda/peta ktery je v LINE OF SIGHT a je ke me nejblize v maximalni vdalenosti 5 policek vcetne.
     */
    export class TargetingEx {
        /**
         * Experimental - melo by zajist zruseni targetu, vyuziva se pred spustenim scriptu tak aby pred spustenim nevysel nejaky target? 
         */
        static cancelResetTarget() {
            //Orion.CancelTarget();
            Orion.CancelWaitTarget();
        }

        /**
         * Zjistuje utok, stejne jako Orion.Attack(), jen vyuziva noveho aliasovani. V bude vyuizovat i kotvy na zalozky tj automaticke vyhazovani
         * @param targets - rozsirene targetovani. 
         */
        static attack(targets:string) {
            const target = TargetingEx.getTarget(targets);
            if (target.isValid()) {
                //TODO zalozky wraper
                Orion.GetStatus(target.gameObject().Serial());
                Orion.Attack(target.gameObject().Serial());
            } else {
                Scripts.Utils.playerPrint("[ no target ]", ColorEnum.green);
            }
        }

        /**
         * 
         * @param obj gameobject ktery chci overit
         * @returns vraci ano v pripade ze objekt je ve FriendListu nebo je to klamak
         */
        static isEnemy(obj:GameObject):boolean {//TODO - mozna refres statusu? Ale radsi ne zde
            const friendList = Orion.GetFriendList();  

            if (obj && !obj.CanChangeName() && friendList.indexOf(obj.Serial()) == -1 &&
                (
                    obj.Notoriety() === NotorietyNum.criminal || 
                    obj.Notoriety() === NotorietyNum.gray ||
                    obj.Notoriety() === NotorietyNum.red || 
                    obj.Notoriety() === NotorietyNum.orange
                )
            ) {
                return true;
            }

            return false;
        }

        /**
         * 
         * @param distance max vzdalenost vychozi 18
         * @returns vraci zive charaktery dle friendlistu v dane vzdalenosti
         */
        static getAliveAlies(distance:number = 18):Array<GameObject> {
            const friendList = Orion.GetFriendList();      
            let arr:Array<GameObject> = new Array<GameObject>(); 
            if (friendList.length) {
                for (let i = 0; i < friendList.length; i++) {
                    let friend = Orion.FindObject(friendList[i]);
                    if (friend && !friend.Dead() && friend.Exists() && friend.Distance() <= distance) {
                        arr.push(friend);
                    }
                }
            }
            const mount = Orion.FindObject('myMount');
            if (mount && mount.Exists()) {
                arr.push(mount);
            }

            return arr;
        }

        /**
         * 
         * @param distance max vzdalenost vychozi 18
         * @returns vraci zive utocne pety (skyhawk, leos) a mounta v dane vzdalenosti
         */
        static getAliveAttackPets(distance:number = 18):Array<GameObject> {
            const arr:Array<GameObject> = new Array<GameObject>(); 
            const nearCharacters = Orion.FindTypeEx('0x00D6|0x0005', '0xFFFF', 'ground', 'live', 6);//hawk, pardi //TODO zost
            if (nearCharacters && nearCharacters.length) {
                for (let i = 0; i < nearCharacters.length; i++) {
                    const friend = nearCharacters[i];
                    if (friend && !friend.Dead() && friend.Exists() && friend.Distance() <= distance) {
                        arr.push(friend);
                    }
                }
            }
            return arr;
        }

        /**
         * 
         * @param targets rozsirene aliasy zleva doprava odlene |
         * @param distance max vzdalenost, vyuzivaji jen nektere aliasy a je pretizeno pokud je zadano primo u aliasu. vychozi 20
         * @returns vraci Traget result, pokud neni nalezeno je prazdny tj. success= false
         */
        static getTarget(targets:string, distance?:number):TargetResult|undefined {
            let result:TargetResult = new Scripts.TargetResult();
            TargetingEx.cancelResetTarget();
            let maxDisntace = distance || 20;

            for  (let i = 0; i < targets.split('|').length; i++) {
                const value = targets.split('|')[i].toLocaleLowerCase();

                if (value.split(',').length > 1 && parseInt(value.split(',')[1]) && parseInt(value.split(',')[1]) > 0) {
                    maxDisntace = parseInt(value.split(',')[1]);
                }
   
                result = new Scripts.TargetResult();

                if (value === "self") {
                    result.gameObject(Player.Serial());
                } else if (value === "selfinjured" && !Player.Dead() && (Player.Hits() < Player.MaxHits() || Player.Poisoned())) {
                    result.gameObject(Player.Serial());
                } else if (value === "lasttarget") {
                    result.gameObject(Orion.ClientLastTarget());                    
                } else if (value === "lasttargetmobile") { 
                    const obj = Orion.FindObject(Orion.ClientLastTarget());
                    if (obj && obj.Exists() && obj.Mobile()) {
                        result.gameObject(Orion.ClientLastTarget()); 
                    }                   
                } else if (value === "laststatus") {
                    result.gameObject(Orion.FindObject('laststatus')?.Serial());
                } else if (value === "lastattack") {
                    result.gameObject(Orion.ClientLastAttack());
                } else if (value === "laststatusenemy") {
                    const obj = Orion.FindObject('laststatus');
                    if (obj && obj.Exists() && TargetingEx.isEnemy(obj)) {
                        result.gameObject(obj.Serial());
                    }
                } else if (value === "mount") {
                    const obj = Orion.FindObject('myMount');
                    if (obj && obj.Exists() && obj.Distance() <= maxDisntace) {
                        result.gameObject(obj.Serial());
                    }
                } else if (value.indexOf("nearinjuredalie") > -1) {
                    let arr:Array<GameObject> = this.getAliveAlies(); 
                    arr.push(...this.getAliveAttackPets());

                    arr = arr.filter(a=>(a.Hits() < a.MaxHits() || a.Poisoned()) && a.Distance() <= maxDisntace).sort((a,b) => a.Distance() - b.Distance());
                    if (arr.length > 0) {
                        result.gameObject(arr[0].Serial());
                    }
                } else if (value.indexOf("nearinjuredalielos") > -1) {
                    let arr:Array<GameObject> = this.getAliveAlies(); 
                    arr.push(...this.getAliveAttackPets());

                    arr = arr.filter(a=>(a.Hits() < a.MaxHits() || a.Poisoned()) && a.InLOS() && a.Distance() <= maxDisntace).sort((a,b) => a.Distance() - b.Distance());
                    if (arr.length > 0) {
                        result.gameObject(arr[0].Serial());
                    }
                } else if (value.indexOf("mostinjuredalie") > -1) {
                    let arr:Array<GameObject> = this.getAliveAlies(); 
                    arr.push(...this.getAliveAttackPets());

                    arr = arr.filter(a=>(a.Hits() < a.MaxHits() || a.Poisoned()) && a.Distance() <= maxDisntace).sort((a,b) => a.Hits() - b.Hits());
                    if (arr.length > 0) {
                        result.gameObject(arr[0].Serial());
                    }
                } else if (value.indexOf("mostinjuredalielos") > -1) {
                    let arr:Array<GameObject> = this.getAliveAlies(); 
                    arr.push(...this.getAliveAttackPets());

                    arr = arr.filter(a=>(a.Hits() < a.MaxHits() || a.Poisoned()) && a.InLOS() && a.Distance() <= maxDisntace).sort((a,b) => a.Hits() - b.Hits());
                    if (arr.length > 0) {
                        result.gameObject(arr[0].Serial());
                    }
                }

                if (result.isValid() && result.gameObject().Exists() || result.isStatic()) {
                    break;
                } 
            }

            return result;
        }
    }
}
