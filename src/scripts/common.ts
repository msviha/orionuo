namespace Scripts {

    /**
     * Obsahuje zakladni scripty
     */
    export class Common {

        /**
         * Scripts.Common.svetlo
         * stability released
         *
         * Pouzije svetlo z kade na sebe
         * Pokud nenajde kad, tak zakouzli svetlo.
         * Kouzleni lze zakazat pomoci parametru Scripts.Common.svetlo(false)
         */
        static svetlo(shouldCast = true) {
            const ns = <IPotion>gameObject.potions.ns;
            const kad = Orion.FindType(ns.kad.graphic, ns.kad.color);
            if (kad.length) {
                Orion.WaitTargetObject('self');
                Orion.UseObject(kad[0]);
            }
            else if (shouldCast) {
                Scripts.Spells.cast('Night Sight',TargetEnum.self);
            }
        }

        /**
         * Scripts.Common.shrinkKad
         * stability beta
         *
         * Pouzije shrink kad
         */
        static shrinkKad() {
            const shrink = <IPotion>gameObject.potions.ns;
            const kad = Orion.FindType(shrink.kad.graphic, shrink.kad.color);
            if (kad.length) {
                Orion.UseObject(kad[0]);
            }
            else {
                Scripts.Utils.log('NEMAS SHRINK KAD', ColorEnum.red);
            }
        }

        /**
         * Scripts.Common.bandageSelf
         * stability beta
         *
         * hodi si bandu, pripadne vypise ze nema a prehraje wav soubor
         */
        static bandageSelf(minimalCountToWarn = 10, pathToNoBandagesWavFile = 'C:/critical.wav', failedMessage = true) {
            let bandagesSerials = Orion.FindType(gameObject.uncategorized.bandy.graphic);
            let count = Scripts.Utils.countItemsBySerials(bandagesSerials);
            if (!count) {
                Orion.PlayWav(pathToNoBandagesWavFile);
                Scripts.Utils.playerPrint('!! NEMAS BANDY !!', ColorEnum.red);
                return;
            }

            Orion.ClearJournal('You put the bloody|You apply|Chces vytvorit');
            Orion.BandageSelf();
            while (!Orion.InJournal('You put') && !Orion.InJournal('You apply') && !Orion.InJournal('Chces vytvorit')) {
                Orion.Wait(200);
            }
            Orion.InJournal('You apply') && Orion.PrintFast(Player.Serial(), ColorEnum.red, 0, `bandage failed`);
            count--;

            if (count <= minimalCountToWarn) {
                Scripts.Utils.playerPrint(`posledni${count > 4 ? 'ch' : ''} ${count} band${count > 4 ? '' : count > 1 ? 'y' : 'a'}`, ColorEnum.red);
            }

        }

        static massMove(requiredCountInTarget = 0, onlyType = true) {
            Scripts.Utils.createGameObjectSelections([
                {ask: 'Co chces prehazovat ?', addObject: 'massMoveItem'},
                {ask: 'Kam to chces nahazet (container) ?', addObject: 'massMoveTargetContainer'}
            ]);

            let itemObject = Orion.FindObject('massMoveItem');
            const stackable = Scripts.Utils.isItemStackable(itemObject.Serial());
            const count = stackable ? Scripts.Utils.askForCount() : 0;
            itemObject = Orion.FindObject('massMoveItem');

            // no recurse.. just from the container where it is targeted
            const graphic = itemObject.Graphic();
            const color = onlyType ? '0xFFFF' : itemObject.Color();
            const container = itemObject.Container();
            let serialsToMove = Orion.FindType(graphic, color, container, undefined, undefined, undefined, false);
            Orion.OpenContainer('massMoveTargetContainer');

            let typesInTargetContainer = Orion.FindType(graphic, color, 'massMoveTargetContainer');
            let coordinates:ICoordinates|undefined;
            let stackableTarget:string|undefined;
            let totalInTarget = Scripts.Utils.countObjectInContainer({graphic, color}, 'massMoveTargetContainer');

            while (serialsToMove.length && (!requiredCountInTarget || totalInTarget !== requiredCountInTarget)) {
                const s = serialsToMove[0];
                if (typesInTargetContainer.length) {
                    if (!coordinates && !stackableTarget) {
                        const targetContainerItem = Orion.FindObject(typesInTargetContainer[0]);
                        stackableTarget = targetContainerItem.Serial();
                        coordinates = {
                            x: targetContainerItem.X(),
                            y: targetContainerItem.Y()
                        };
                    }
                }

                Orion.MoveItem(
                    s,
                    count,
                    stackable && stackableTarget ? stackableTarget : 'massMoveTargetContainer',
                    coordinates?.x,
                    coordinates?.y
                );
                stackable && (stackableTarget = s);
                Orion.Wait(responseDelay);
                typesInTargetContainer = Orion.FindType(graphic, color, 'massMoveTargetContainer');
                serialsToMove = Orion.FindType(graphic, color, container, undefined, undefined, undefined, false);
                totalInTarget = Scripts.Utils.countObjectInContainer({graphic, color}, 'massMoveTargetContainer');
            }

            Scripts.Utils.playerPrint(`Mas uz ${totalInTarget} techto itemu v containeru`);
        }

        static mysticCounter() {
            Orion.ClearJournal();
            const recepts = Orion.FindType('0x14ED', '0x06ED'); // recept
            const mystics = {...gameObject.mystics};

            for (const recept of recepts) {
                Orion.UseObject(recept);
                Orion.Wait(responseDelay);
                for (const m in mystics) {
                    !mystics[m].required && (mystics[m].required = 0);
                    const text = Orion.InJournal(m.charAt(0).toUpperCase() + m.slice(1))?.Text();
                    if (text) {
                        mystics[m].required += parseInt(text.replace(/x.*/, ''));
                    }
                }
                Orion.ClearJournal();
            }

            Orion.Print(-1 , '* zbyva doplnit *');
            for (const m in mystics) {
                const required = mystics[m].required;
                const have = Scripts.Utils.countObjectInContainer(mystics[m], 'backpack');
                const count = required - have < 0 ? 0 : required - have;
                Orion.Print(-1 , m + ': ' + count.toString());
            }
            Orion.Print(-1 , '*****************');
        }

        static hideAll() {
            Orion.Timer('resendTime') === -1 && Orion.SetTimer('resendTime', 10000);
            !Orion.GetGlobal('hideAll') && Orion.SetGlobal('hideAll', '0');
            const hidden = !!parseInt(Orion.GetGlobal('hideAll'));
            const timer = Orion.Timer('resendTime');

            if (!hidden) {
                const mobiles = Orion.FindType('any', "any", "ground", 'mobile', 15);
                for (const m of mobiles) {
                    Orion.Hide(m);
                }
                Orion.SetGlobal('hideAll', '1');
            }
            else if (timer >= 10000) {
                Scripts.Utils.resetTimer('resendTime');
                Orion.Resend();
                Orion.SetGlobal('hideAll', '0');
            }
            else {
                Scripts.Utils.log(`jeste nemuzes dat znovu resync/resend, pockej jeste ${(10000 - timer)/1000} sekund(y)`)
            }
        }

        static lavaBomb() {
            const bomb = gameObject.potions.lavabomb;

            let bombSerial = Scripts.Utils.findFirstType(bomb);

            if (!bombSerial) {
                Scripts.Potions.fillPotion(PotionsEnum.lavabomb);
                bombSerial = Scripts.Utils.findFirstType(bomb);
                if (!bombSerial) {
                    return;
                }
            }
            else {
                Orion.Drop(bombSerial);
                Orion.Wait(responseDelay);
                Orion.MoveItem(bombSerial);
                Orion.Wait(responseDelay);
            }

            Orion.UseObject(bombSerial);
        }

        static webDestroyer() {
            const webs = Orion.FindType('0x0EE3|0x0EE4|0x0EE5|0x0EE6', '0x0000', 'ground', 'item', 1);
            for (const web of webs) {
                Orion.UseObject(web);
                Orion.Wait(100);
            }
        }

        static poisonLastAttack() {
            const kitSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.apprenticesPoisoningKit);
            if (kitSerial) {
                Orion.WarMode(true);
                Orion.Wait(50);
                Orion.WaitTargetObject(Orion.ClientLastAttack());
                Orion.UseObject(kitSerial);
            }
        }

        static poisonTrain(serialToPoison?:string) {
            if (!serialToPoison) {
                const mobiles = Orion.FindType('any', 'any', 'ground', 'fast|live|mobile|ignoreself', 1, `${NotorietyEnum.red}|${NotorietyEnum.gray}`);
                if (!mobiles.length) {
                    Scripts.Utils.playerPrint('neni tu nikdo na poison train', ColorEnum.red);
                    return;
                }
                serialToPoison = mobiles[0];
            }
            const kitSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.apprenticesPoisoningKit);
            if (kitSerial) {
                Orion.WarMode(true);
                Orion.WaitTargetObject(serialToPoison);
                Orion.UseObject(kitSerial);
            }
        }

        static poisonTrainAuto() {
            const kitSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.apprenticesPoisoningKit);
            if (!kitSerial) {
                Scripts.Utils.playerPrint('nemas poison kit na treneni', ColorEnum.red);
                return;
            }

            while (true) {
                if (Orion.InJournal('Kdyz se snazis')) {
                    Orion.WarMode(true);
                    Orion.ClearJournal();
                    Orion.Wait(responseDelay);
                }
                const targets = Orion.FindType('any', 'any', 'ground', 'fast|live|mobile|ignoreself', 1, `${NotorietyEnum.red}|${NotorietyEnum.gray}`);

                if (targets.length) {
                    const target = targets[0];
                    Orion.WaitTargetObject(target);
                    Orion.UseObject(kitSerial);
                }
                Orion.Wait(responseDelay);
            }
        }

        static openBank():boolean {
            Orion.ClearJournal();
            Orion.Wait(350);
            Orion.Say('Bank');
            return Orion.WaitForContainerGump(500) && !!Orion.InJournal('stones in your bank box');
        }

        static openContainer() {
            Scripts.Utils.createGameObjectSelections([
                {ask: 'Target container to open', addObject: 'openContainer'}
            ]);
            const container = Orion.FindObject('openContainer');
            if (!container) {
                return;
            }
            const bezpecnaColor = '0x0B1C';
            if (container.Color() === bezpecnaColor) {
                const x = container.X();
                const y = container.Y();
                const z = container.Z();
                const klicAlias = `bezpecnyKlic_${Player.Name()}_(${x},${y},${z})`;
                const klicObj = Orion.FindObject(klicAlias);

                if (klicObj) {
                    Orion.MoveItem(klicAlias);
                }
                else {
                    Orion.ClearJournal();
                    Orion.Wait(1000);
                    const klice = Orion.FindType('0x1012', '0x0003');
                    for (const serial of klice) {
                        Orion.ClearJournal('Bezpecny klic')
                        Orion.Wait(50);
                        Orion.Click(serial);
                        Scripts.Utils.waitWhileSomethingInJournal(['Bezpecny klic'], 5000);
                        if (!Orion.InJournal('Bezpecny klic')) {
                            Scripts.Utils.log('neco se rozbilo', ColorEnum.red);
                            throw 'e'
                        }
                        const msg = Orion.InJournal('Bezpecny klic');
                        const c = msg.Text().match(/\d+/g);
                        const alias = `bezpecnyKlic_${Player.Name()}_(${c[0]},${c[1]},${c[2]})`
                        Orion.AddObject(alias, serial);
                        if (alias === klicAlias) {
                            Orion.MoveItem(alias);
                            break;
                        }
                    }
                }
                Orion.Wait(responseDelay);
            }

            Orion.OpenContainer('openContainer');
        }
    }
}
