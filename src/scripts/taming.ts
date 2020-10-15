namespace Scripts {

    /**
     * Stability EXPERIMENTAL
     *
     * je potreba si poupravit nejaka IDcka jako treba robe of druids atd,
     * hlavni ucel byl pro pousteni scriptu trainOnAnimalsAround
     * ktery se ale obcas zasekne
     * Je to potreba jeste poupravit a dodelat.. (portovani pres runy atd)
     */
    export class Taming {
        /**
         * Scripts.Taming.useTrainingTamingStaff
         * returns false when you dont have staff or shrinks
         */
        static useTrainingTamingStaff(targetSerial:string):boolean {
            Orion.Disarm();
            Orion.Wait(500);
            let staff = Orion.FindType(gameObject.taming.staffs.training.graphic, gameObject.taming.staffs.training.color);
            if (!staff.length) {
                Scripts.Utils.log('missing training taming staff', ColorEnum.red);
                return false;
            }

            Orion.WaitTargetObject(targetSerial);
            Orion.UseObject(staff[0]);
            while (!Orion.InJournal('What do you want to use this on')) {
                Orion.Wait(500);
                Orion.WaitTargetObject(targetSerial);
                Orion.UseObject(staff[0]);
            }
            return true;
        }

        /*// returns false when you dont have staff or shrinks
        static useTamingStaff(targetSerial:string):boolean {
            Orion.Disarm();
            // first try to find taming staff loaded with shrink
            let staff = Orion.FindType(o.taming.staffs.tamingShrink.graphic, o.taming.staffs.tamingShrink.color);

            // in case there is not any, lets find empty staff and load it
            if (!staff.length) {
                staff = Orion.FindType(o.taming.staffs.taming.graphic, o.taming.staffs.taming.color);

                const shrinkKad = Orion.FindType(o.potions.shrink.kad.graphic, o.potions.shrink.kad.color);
                if (shrinkKad.length && staff.length) {
                    Orion.WaitTargetObject(staff[0]);
                    Orion.UseObject(shrinkKad[0])
                    // we ensure there is loaded staff
                    staff = Orion.FindType(o.taming.staffs.tamingShrink.graphic, o.taming.staffs.tamingShrink.color);
                }
                else {
                    Scripts.Utils.log('missing staff or shrink kad', ColorEnum.red);
                    return false;
                }
            }

            Orion.WaitTargetObject(targetSerial);
            Orion.UseObject(staff[0]);
            return true;
        }*/

        static waitOnTaming() {
            while (!(
                Orion.InJournal('Your taming failed') ||
                Orion.InJournal('Ochoceni se nezdarilo') ||
                Orion.InJournal('Too far') ||
                Orion.InJournal('Not tamable') ||
                Orion.InJournal('byl tamnut') ||
                Orion.InJournal('Cannot learn anything more') ||
                Orion.InJournal('You are not able to tame this animal')
            )) {
                Orion.Wait(500);
            }
        }

        // false in case there is no such robe, undefined when it is already dressed
        static dressRobeOfDruids():boolean|undefined {
            const robeOfDruids =  Orion.FindObject('0x4034E76C');

            if (!robeOfDruids) {
                return false;
            }

            Orion.UseObject(robeOfDruids.Serial());

            return !!Orion.InJournal('You feel more powerful');
        }

        static undressRobe() {
            Orion.Unequip ('Robe');
            Orion.Wait(1000);
        }

        static trainOnAnimal(animalSerial:string):boolean|undefined {
            Scripts.Utils.log('train on animal serial ' + animalSerial);
            let animal = Orion.FindObject(animalSerial);
            Orion.SetGlobal('tamingCounter', (parseInt(Orion.GetGlobal('tamingCounter'), 10) + 1).toString(10))

            if (parseInt(Orion.GetGlobal('tamingCounter'), 10) > 33) {
                Scripts.Taming.dressRobeOfDruids();
            }

            Orion.ClearJournal();

            if (!Scripts.Taming.useTrainingTamingStaff(animalSerial)) {
                return;
            }

            Scripts.Taming.waitOnTaming();

            if (Orion.InJournal('You are not able to tame this animal')) {
                // in case of already dressed robe it just leave that animal
                if (Scripts.Taming.dressRobeOfDruids()) {
                    Scripts.Taming.trainOnAnimal(animalSerial);
                }
                return;
            }

            if (
                Orion.InJournal('Cannot learn anything more') ||
                Orion.InJournal('Not tamable')
            ) {
                Orion.Disarm();
                Orion.Wait(500);
                Scripts.Taming.undressRobe();
                Scripts.Utils.log('kill animal serial ' + animalSerial);
                // Orion.WaitTargetObject(animalSerial);
                Orion.CancelWaitTarget();
                Orion.UseObject('0x40337EE9'); // training kryss
                // Orion.EquipT('0x1400');

                while (animal && !animal.Dead()) {
                    Orion.Wait(500);
                    Orion.WalkTo(animal.X(), animal.Y(), animal.Z(), 0);
                    Orion.Attack(animalSerial);
                    Orion.Wait(2000);
                    animal = Orion.FindObject(animalSerial);
                }
                return;
            }

            if (
                Orion.InJournal('Your taming failed') ||
                Orion.InJournal('Ochoceni se nezdarilo')
            ) {
                Scripts.Taming.trainOnAnimal(animalSerial);
                return;
            }

            if (Orion.InJournal('Too far')) {
                Orion.Wait(500);
                Orion.WalkTo(animal.X(), animal.Y(), animal.Z(), 0);
                Orion.Wait(2000);
                Scripts.Taming.trainOnAnimal(animalSerial);
                return;
            }

            if (Orion.InJournal('byl tamnut')) {
                Scripts.Taming.undressRobe();
                return true;
            }
        }

        static trainOnAnimalsAround() {
            Orion.IgnoreReset();
            Orion.ClearJournal();
            Scripts.Taming.undressRobe();
            let monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "live", 22, "gray");

            while (monstersAround.length) {
                Orion.Ignore(monstersAround[0]);
                Orion.SetGlobal('tamingCounter', '0');
                Scripts.Taming.trainOnAnimal(monstersAround[0]);
                monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "live", 22, "gray");
            }
        }
    }
}
