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
        static attack(targets?: string | TargetEnum | Array<ITargetAlias>) {
            const target = TargetingEx.getTarget(targets);
            if (target.isValid()) {
                Orion.GetStatus(target.gameObject()?.Serial());
                Orion.Attack(target.gameObject()?.Serial());
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
                friendList.indexOf(obj?.Serial()) == -1 &&
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

        static getAlivePetsAndAlies(distance = 18): Array<GameObject> {
            const arr: Array<GameObject> = this.getAliveAlies(distance);
            arr.push(...this.getAliveAttackPets(distance));
            return arr;
        }

        /**
         * Ze stringove podoby ategetu nebo enumu vytvori objekt TargetAliasu, nebo vyhodi exception... ale to chce dotahnout. Nejak sem nezisjitil zatim jak enumerovat enumy a zjistit zda hodntoa je v TargetEnum
         * @param value hodnota dle TargetEnum
         * @returns TargetAlias
         */
        static parseTargetAlias(value: string | TargetEnum): ITargetAlias {
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
         * @param targets string obsahujici hodnoty odelene | nebo jeden TargetEnum nebo pole TargetAliasu
         * @returns kolekce TargetAliasu
         */
        static getTargetAliases(targets: string | TargetEnum | Array<ITargetAlias>): Array<ITargetAlias> {
            const targetAliases = new Array<ITargetAlias>();

            if (targets && typeof targets === 'string') {
                for (const target of targets.split('|')) {
                    targetAliases.push(TargetingEx.parseTargetAlias(target));
                }
            } else if (targets && targets.length) {
                targetAliases.push(...(<Array<ITargetAlias>>targets));
            } else if (targets) {
                targetAliases.push(TargetingEx.parseTargetAlias(<TargetEnum>targets));
            }
            return targetAliases;
        }

        /**
         *
         * @param serial
         * @param targetAlias
         * @param optCondition
         * @returns
         */
        static getTargetResult(
            serial: string,
            targetAlias?: ITargetAlias,
            optCondition?: (a: GameObject) => boolean,
        ): TargetResult {
            const result = new Scripts.TargetResult();
            const obj = Orion.FindObject(serial);

            if (
                obj?.Exists() &&
                obj.Distance() <= (targetAlias?.maxDistance ?? 20) &&
                (!optCondition || optCondition(obj))
            ) {
                result.gameObject(obj?.Serial());
            }
            return result;
        }

        /**
         *
         * @param serial
         * @param targetAlias
         * @param optCondition
         * @returns
         */
        static getTargetResultFromArray(
            gameObjects: Array<GameObject>,
            targetAlias?: ITargetAlias,
            optCondition?: (a: GameObject) => boolean,
            optSort?: (a: GameObject, b: GameObject) => number,
        ): TargetResult {
            const result = new Scripts.TargetResult();
            const filtered = gameObjects.filter(
                (obj) => obj.Distance() <= (targetAlias?.maxDistance ?? 20) && (!optCondition || optCondition(obj)),
            );
            if (optSort) filtered.sort((a, b) => optSort(a, b));
            if (filtered.length > 0) {
                result.gameObject(filtered[0]?.Serial());
            }
            return result;
        }

        static isMobileInjured(gameObject: GameObject) {
            return (
                gameObject && !gameObject.Dead() && (gameObject.Hits() < gameObject.MaxHits() || gameObject.Poisoned())
            );
        }

        /**
         *
         * @param targets rozsirene aliasy zleva doprava odlene |
         * @param maxDistance max vzdalenost, vyuzivaji jen nektere aliasy a je pretizeno pokud je zadano primo u aliasu. vychozi 20
         * @returns vraci Traget result, pokud neni nalezeno je prazdny tj. success= false
         */
        static getTarget(
            targets: string | TargetEnum | Array<ITargetAlias>,
            maxDistance?: number,
        ): TargetResult | undefined {
            TargetingEx.cancelResetTarget();
            Orion.CancelTarget();
            Orion.SetLOSOptions('sphere|spherecheckcorners');

            return TargetingEx.resolveTraget(targets, maxDistance);
        }

        /**
         *
         * @param targets rozsirene aliasy zleva doprava odlene |
         * @param maxDistance max vzdalenost, vyuzivaji jen nektere aliasy a je pretizeno pokud je zadano primo u aliasu. vychozi 20
         * @returns vraci Traget result, pokud neni nalezeno je prazdny tj. success= false
         */
        static resolveTraget(
            targets: string | TargetEnum | Array<ITargetAlias>,
            maxDistance?: number,
        ): TargetResult | undefined {
            let result: TargetResult = new Scripts.TargetResult();
            const targetAliases = TargetingEx.getTargetAliases(targets);

            for (const target of targetAliases) {
                target.maxDistance = target.maxDistance ?? maxDistance ?? 20;
                result = new Scripts.TargetResult();

                if (target.alias === TargetEnum.self) {
                    result.gameObject(Player.Serial());
                } else if (target.alias === TargetEnum.selfinjured) {
                    result = TargetingEx.getTargetResult(Player.Serial(), target, (obj) => {
                        return TargetingEx.isMobileInjured(obj);
                    });
                } else if (target.alias === TargetEnum.lasttarget) {
                    result = TargetingEx.getTargetResult(Orion.ClientLastTarget(), target);
                } else if (target.alias === TargetEnum.lasttargetmobile) {
                    result = TargetingEx.getTargetResult(Orion.ClientLastTarget(), target, (obj) => {
                        return obj.Mobile();
                    });
                } else if (target.alias === TargetEnum.laststatus) {
                    result = TargetingEx.getTargetResult('laststatus', target);
                } else if (target.alias === TargetEnum.lastattack) {
                    result = TargetingEx.getTargetResult(Orion.ClientLastAttack(), target);
                } else if (target.alias === TargetEnum.laststatusenemy) {
                    result = TargetingEx.getTargetResult('laststatus', target, (obj) => {
                        return TargetingEx.isEnemy(obj);
                    });
                } else if (target.alias === TargetEnum.mount) {
                    result = TargetingEx.getTargetResult('myMount', target);
                } else if (target.alias === TargetEnum.hover) {
                    result = TargetingEx.getTargetResult(Statusbar.getHoveringStatusBar()?.serial ?? '', target);
                } else if (target.alias === TargetEnum.nearinjuredalie) {
                    result = TargetingEx.getTargetResultFromArray(
                        TargetingEx.getAlivePetsAndAlies(maxDistance),
                        target,
                        TargetingEx.isMobileInjured,
                        (a, b) => a.Distance() - b.Distance(),
                    );
                } else if (target.alias === TargetEnum.nearinjuredalielos) {
                    result = TargetingEx.getTargetResultFromArray(
                        TargetingEx.getAlivePetsAndAlies(maxDistance),
                        target,
                        (obj) => {
                            return TargetingEx.isMobileInjured(obj) && obj.InLOS();
                        },
                        (a, b) => a.Distance() - b.Distance(),
                    );
                } else if (target.alias === TargetEnum.mostinjuredalie) {
                    result = TargetingEx.getTargetResultFromArray(
                        TargetingEx.getAlivePetsAndAlies(maxDistance),
                        target,
                        TargetingEx.isMobileInjured,
                        (a, b) => a.Hits() - b.Hits(),
                    );
                } else if (target.alias === TargetEnum.mostinjuredalielos) {
                    result = TargetingEx.getTargetResultFromArray(
                        TargetingEx.getAlivePetsAndAlies(maxDistance),
                        target,
                        (obj) => {
                            return TargetingEx.isMobileInjured(obj) && obj.InLOS();
                        },
                        (a, b) => a.Hits() - b.Hits(),
                    );
                } else if (target.alias) {
                    result = TargetingEx.getTargetResult(target.alias, target);
                }

                if (result.success()) {
                    break;
                }
            }
            return result;
        }
    }
}
