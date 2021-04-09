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
           // Orion.CancelTarget();
            Orion.CancelWaitTarget();
        }

        /**
         * Zjistuje utok, stejne jako Orion.Attack(), jen vyuziva noveho aliasovani. V bude vyuizovat i kotvy na zalozky tj automaticke vyhazovani
         * @param targets - rozsirene targetovani.
         */
        static attack(targets: string) {
            const target = TargetingEx.getTarget(targets);
            if (target.isValid()) {
                Orion.GetStatus(target.gameObject().Serial());
                Orion.Attack(target.gameObject().Serial());
            } else {
                Scripts.Utils.playerPrint('[ no target ]', ColorEnum.green);
            }
        }

        /**
         *
         * @param obj gameobject ktery chci overit
         * @returns vraci ano v pripade ze objekt je ve FriendListu nebo je to klamak
         */
        static isEnemy(obj: GameObject): boolean {
            //TODO - mozna refres statusu? Ale radsi ne zde
            const friendList = Orion.GetFriendList();

            if (
                obj &&
                !obj.CanChangeName() &&
                friendList.indexOf(obj.Serial()) == -1 &&
                (obj.Notoriety() === NotorietyNum.criminal ||
                    obj.Notoriety() === NotorietyNum.gray ||
                    obj.Notoriety() === NotorietyNum.red ||
                    obj.Notoriety() === NotorietyNum.orange)
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
        static getAliveAlies(distance = 18): Array<GameObject> {
            const friendList = Orion.GetFriendList();
            const arr: Array<GameObject> = new Array<GameObject>();
            if (friendList.length) {
                for (let i = 0; i < friendList.length; i++) {
                    const friend = Orion.FindObject(friendList[i]);
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
        static getAliveAttackPets(distance = 18): Array<GameObject> {
            const arr: Array<GameObject> = new Array<GameObject>();
            const nearCharacters = Orion.FindTypeEx('0x00D6|0x0005', '0xFFFF', 'ground', 'live', 6); //hawk, pardi //TODO zost
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
         * @param value 
         * @returns 
         */
        static parseTargetAlias(value:string|TargetEnum):ITargetAlias  {
            if (value) {
                const splitValue = value.split(',');
                const alias = splitValue[0].trim().toLowerCase();

                if (splitValue.length > 1 && parseInt(splitValue[1]) > 0) {
                    return <ITargetAlias>{ alias: alias, maxDistance: parseInt(splitValue[1]) };
                } else {
                   return <ITargetAlias>{ alias: alias };
                }
            }
            throw new Error(`Non-exist target alias: ${value}`);
        }

        /**
         *
         * @param targets rozsirene aliasy zleva doprava odlene |
         * @param maxDistance max vzdalenost, vyuzivaji jen nektere aliasy a je pretizeno pokud je zadano primo u aliasu. vychozi 20
         * @returns vraci Traget result, pokud neni nalezeno je prazdny tj. success= false
         */
        static getTarget(targets: string|TargetEnum|Array<ITargetAlias>, maxDistance?: number): TargetResult | undefined {
            TargetingEx.cancelResetTarget();
            Orion.CancelTarget();

            let result: TargetResult = new Scripts.TargetResult();
            const targetAliases = new Array<ITargetAlias>();

            if (targets && typeof targets === 'string') {
                for (const target of  targets.split('|')) {
                    targetAliases.push(TargetingEx.parseTargetAlias(target));
                }
            } else if (targets && targets.length) {
                targetAliases.push(...<Array<ITargetAlias>>targets);
            } else if (targets) {
                targetAliases.push(TargetingEx.parseTargetAlias(<TargetEnum>targets))
            }
               
            for (const target of targetAliases) {
                const maxDisntace = target.maxDistance ?? maxDistance ?? 20;
                result = new Scripts.TargetResult();

                if (target.alias === TargetEnum.self) {
                    result.gameObject(Player.Serial());
                } else if (
                    target.alias === TargetEnum.selfinjured &&
                    !Player.Dead() &&
                    (Player.Hits() < Player.MaxHits() || Player.Poisoned())
                ) {
                    result.gameObject(Player.Serial());
                } else if (target.alias === TargetEnum.lasttarget) {
                    const obj = Orion.FindObject(Orion.ClientLastTarget());
                    if (obj?.Exists() && obj.Distance() <= maxDisntace) {
                        result.gameObject(obj.Serial());
                    }
                } else if (target.alias === TargetEnum.lasttargetmobile) {
                    const obj = Orion.FindObject(Orion.ClientLastTarget());
                    if (obj?.Exists() && obj.Mobile() && obj.Distance() <= maxDisntace) {
                        result.gameObject(obj.Serial());
                    }
                } else if (target.alias === TargetEnum.laststatus) {
                    const obj = Orion.FindObject('laststatus');
                    if (obj?.Exists() && obj.Distance() <= maxDisntace) {
                        result.gameObject(obj.Serial());
                    }
                } else if (target.alias === TargetEnum.lastattack) {
                    const obj = Orion.FindObject(Orion.ClientLastAttack());
                    if (obj?.Exists() && obj.Distance() <= maxDisntace) {
                        result.gameObject(obj.Serial());
                    }                    
                } else if (target.alias === TargetEnum.laststatusenemy) {
                    const obj = Orion.FindObject('laststatus');
                    if (obj?.Exists() && TargetingEx.isEnemy(obj)) {
                        result.gameObject(obj.Serial());
                    }
                } else if (target.alias === TargetEnum.mount) {
                    const obj = Orion.FindObject('myMount');
                    if (obj?.Exists() && obj.Distance() <= maxDisntace) {
                        result.gameObject(obj.Serial());
                    }
                } else if (target.alias === TargetEnum.nearinjuredalie) {
                    let arr: Array<GameObject> = this.getAliveAlies();
                    arr.push(...this.getAliveAttackPets());

                    arr = arr
                        .filter((a) => (a.Hits() < a.MaxHits() || a.Poisoned()) && a.Distance() <= maxDisntace)
                        .sort((a, b) => a.Distance() - b.Distance());
                    if (arr.length > 0) {
                        result.gameObject(arr[0].Serial());
                    }
                } else if (target.alias === TargetEnum.nearinjuredalielos) {
                    Orion.SetLOSOptions('sphere|spherecheckcorners');
                    let arr: Array<GameObject> = this.getAliveAlies();
                    arr.push(...this.getAliveAttackPets());

                    arr = arr
                        .filter(
                            (a) => (a.Hits() < a.MaxHits() || a.Poisoned()) && a.InLOS() && a.Distance() <= maxDisntace,
                        )
                        .sort((a, b) => a.Distance() - b.Distance());
                    if (arr.length > 0) {
                        result.gameObject(arr[0].Serial());
                    }
                } else if (target.alias === TargetEnum.mostinjuredalie) {
                    let arr: Array<GameObject> = this.getAliveAlies();
                    arr.push(...this.getAliveAttackPets());

                    arr = arr
                        .filter((a) => (a.Hits() < a.MaxHits() || a.Poisoned()) && a.Distance() <= maxDisntace)
                        .sort((a, b) => a.Hits() - b.Hits());
                    if (arr.length > 0) {
                        result.gameObject(arr[0].Serial());
                    }
                } else if (target.alias === TargetEnum.mostinjuredalielos) {
                    Orion.SetLOSOptions('sphere|spherecheckcorners');
                    let arr: Array<GameObject> = this.getAliveAlies();
                    arr.push(...this.getAliveAttackPets());

                    arr = arr
                        .filter(
                            (a) => (a.Hits() < a.MaxHits() || a.Poisoned()) && a.InLOS() && a.Distance() <= maxDisntace,
                        )
                        .sort((a, b) => a.Hits() - b.Hits());
                    if (arr.length > 0) {
                        result.gameObject(arr[0].Serial());
                    }
                } else if (target.alias === TargetEnum.hover) {
                    const hoverBar = Statusbar.getHoveringStatusBar();
                    if (hoverBar && Orion.FindObject(hoverBar.serial)?.Distance() <= maxDisntace) {
                        result.gameObject(hoverBar.serial);
                    }
                }

                if (result.success()) {
                    break;
                }
            }
            return result;
        }
    }
}
