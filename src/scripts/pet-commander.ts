namespace Scripts {
    export class PetCommander {
        static getUsedNames() {
            return Shared.GetArray('usedNames', []);
        }

        static getMyPets(): IMyPet[] {
            return Shared.GetArray('myPets', []);
        }

        static filterPetsInDistance(): IMyPet[] {
            const myPets = Scripts.PetCommander.getMyPets();
            for (const pet of myPets) {
                const petObject = Orion.FindObject(pet.serial);
                if (!petObject || petObject.Distance() > 12) {
                    Scripts.PetCommander.removeFromMyPets(pet.name);
                }
            }
            return myPets;
        }

        static removeFromMyPets(name: string) {
            const myPets = Scripts.PetCommander.getMyPets();
            for (let i = 0; i < myPets.length; i++) {
                if (myPets[i].name === name) {
                    myPets.splice(i, 1);
                    Shared.AddArray('myPets', myPets);
                    break;
                }
            }
        }

        static addToMyPets(pet: { serial: string; name: string }) {
            const myPets = Scripts.PetCommander.getMyPets();
            myPets.push(pet);
            Shared.AddArray('myPets', myPets);
        }

        static getNextPetByIndex(index: number): IMyPet | undefined {
            const myPets = Shared.GetArray('myPets', []);
            if (myPets.length - 1 < index) {
                return;
            }
            return myPets[index];
        }

        static ignoreMyPets() {
            const myPets = Scripts.PetCommander.getMyPets();
            for (const p of myPets) {
                Orion.Ignore(p.serial);
            }
        }

        static getAvailableNames(): string[] {
            const usedNames = Scripts.PetCommander.getUsedNames();
            const namesPool = [
                'Andres',
                'Blanca',
                'Carlos',
                'Dolores',
                'Enrique',
                'Felicia',
                'Guillermo',
                'Hilda',
                'Ignacio',
                'Jimena',
                'Kevin',
                'Linda',
                'Marty',
                'Nora',
                'Olaf',
                'Damrey',
                'Haikui',
                'Kirogi',
                'Tembin',
                'Bolaven',
                'Sanba',
                'Jelawat',
                'Ewiniar',
                'Malaksi',
                'Gaemi',
                'Prapiroon',
                'Maria',
                'SonTinh',
                'Bopha',
                'Wukong',
                'Sonamu',
                'Shanshan',
                'Yagi',
                'Leepi',
                'Bebinca',
                'Rumbia',
                'Soulik',
                'Cimaron',
                'Jebi',
                'Mangkhut',
                'Utor',
                'Trami',
                'Yutu',
                'Toraji',
                'Usagi',
                'Pabuk',
                'Wutip',
                'Sepat',
                'Fitow',
                'Danas',
                'Nari',
                'Wipha',
                'Francisco',
                'Lekima',
                'Krosa',
                'Haiyan',
                'Podul',
                'Lingling',
                'Kaziki',
                'Faxai',
                'Peipah',
                'Tapah',
                'Mitag',
                'Hagibis',
                'Neoguri',
                'Rammasun',
                'Matmo',
                'Halong',
                'Nakri',
                'Fengshen',
                'Kalmaegi',
                'Kanmuri',
                'Phanfone',
                'Vongfong',
                'Nuri',
                'Sinlaku',
                'Hagupit',
                'Jangmi',
                'Mekkhala',
                'Higos',
                'Bavi',
                'Maysak',
                'Haishen',
                'Noul',
                'Dolphin',
                'Kujira',
                'Chanhom',
                'Linfa',
                'Nangka',
                'Soudelor',
                'Molave',
                'Goni',
                'Morakot',
                'Etau',
                'Vamco',
                'Krovanh',
                'Dujuan',
                'Mujigae',
                'Choiwan',
                'Koppu',
                'Ketsana',
                'Parma',
                'Melor',
                'Nepartak',
                'Lupit',
                'Mirinae',
                'Nida',
                'Omais',
                'Conson',
                'Chanthu',
                'Dianmu',
                'Mindulle',
                'Lionrock',
                'Kompasu',
                'Namtheun',
                'Malou',
                'Meranti',
                'Fanapi',
                'Malakas',
                'Megi',
                'Chaba',
                'Aere',
                'Songda',
                'Sarika',
                'Haima',
                'Meari',
                'Tokage',
                'Muifa',
                'Merbok',
                'Nanmadol',
                'Talas',
                'Noru',
                'Kulap',
                'Roke',
                'Sonca',
                'Nesat',
                'Haitang',
                'Nalgae',
                'Banyan',
                'Washi',
                'Pakhar',
                'Sanvu',
                'Mawar',
                'Guchol',
                'Patricia',
                'Rick',
                'Sandra',
                'Terry',
                'Vivian',
                'Waldo',
                'Xina',
                'York',
                'Zelda',
                'Agatha',
                'Blas',
                'Celia',
                'Darby',
                'Estelle',
                'Frank',
                'Georgette',
                'Howard',
                'Isis',
                'Javier',
                'Kay',
                'Lester',
                'Madeline',
                'Newton',
                'Orlene',
                'Paine',
                'Roslyn',
                'Seymour',
                'Tina',
                'Virgil',
                'Winifred',
                'Xavier',
                'Yolanda',
                'Zeke',
                'Adrian',
                'Beatriz',
                'Calvin',
                'Dora',
                'Eugene',
                'Fernanda',
                'Greg',
                'Hilary',
                'Irwin',
                'Jova',
                'Kenneth',
                'Lidia',
                'Max',
                'Norma',
                'Otis',
                'Pilar',
                'Ramon',
                'Selma',
                'Todd',
                'Veronica',
                'Wiley',
                'Xina',
                'York',
                'Zelda',
                'Aletta',
                'Bud',
                'Carlotta',
                'Daniel',
                'Emilia',
                'Fabio',
                'Gilma',
                'Hector',
                'Ileana',
                'John',
                'Kristy',
                'Lane',
                'Miriam',
                'Norman',
                'Olivia',
                'Paul',
                'Rosa',
                'Sergio',
                'Tara',
                'Vicente',
                'Willa',
                'Xavier',
                'Yolanda',
                'Zeke',
                'Alvin',
                'Barbara',
                'Cosme',
                'Dalila',
                'Erick',
                'Flossie',
                'Gil',
                'Henriette',
                'Ivo',
                'Juliette',
                'Kiko',
                'Lorena',
                'Manuel',
                'Narda',
                'Octave',
                'Priscilla',
                'Raymond',
                'Sonia',
                'Tico',
                'Velma',
                'Wallis',
                'Xina',
                'York',
                'Zelda',
                'Amanda',
                'Boris',
                'Cristina',
                'Douglas',
                'Elida',
                'Fausto',
                'Genevieve',
                'Hernan',
                'Iselle',
                'Julio',
                'Karina',
                'Lowell',
                'Marie',
                'Norbert',
                'Odile',
                'Polo',
                'Rachel',
                'Simon',
                'Trudy',
                'Vance',
                'Winnie',
                'Xavier',
                'Yolanda',
                'Zeke',
                'Talim',
                'Doksuri',
                'Khanun',
                'Vicente',
                'Saola',
            ];

            const availableNames = namesPool.filter((i) => usedNames.indexOf(i) === -1);
            return availableNames;
        }

        static getRandomAvailableName(): string {
            const namesPool = Scripts.PetCommander.getAvailableNames();
            const random = Math.floor(Math.random() * namesPool.length);
            return namesPool[random];
        }

        static getNewPet(): IMyPet | undefined {
            const monstersAlive = Orion.FindType('!0x0190|!0x0191', '0xFFFF', 'ground', 'live', 12);
            for (const serial of monstersAlive) {
                const isMyMonster = Orion.FindObject(serial).CanChangeName();
                if (isMyMonster) {
                    const name = Scripts.PetCommander.getRandomAvailableName();
                    Orion.RenameMount(serial, name);
                    const pet = { serial, name };
                    Scripts.PetCommander.addToMyPets(pet);
                    Orion.Ignore(pet.serial);
                    return pet;
                }
            }
        }

        static killTarget() {
            let pet = Scripts.PetCommander.getNewPet();
            let myPets = Scripts.PetCommander.filterPetsInDistance();

            if (!pet && myPets.length) {
                let killIndex = Shared.GetVar('nextPetKillIndex', 0);
                if (killIndex >= myPets.length) {
                    killIndex = 0;
                }
                pet = Scripts.PetCommander.getNextPetByIndex(killIndex);
                Shared.AddVar('nextPetKillIndex', ++killIndex);
            }

            if (!pet) {
                return;
            }

            Orion.IgnoreReset();
            const petObject = Orion.FindObject(pet.serial);
            Scripts.PetCommander.ignoreMyPets();

            if (!petObject) {
                Scripts.PetCommander.removeFromMyPets(pet.name);
                myPets = Scripts.PetCommander.getMyPets();
                if (myPets.length) {
                    Scripts.PetCommander.killTarget();
                    return;
                }
                return;
            }

            Orion.Say(`${pet.name} kill`);
        }

        static killAll() {
            while (Scripts.PetCommander.getNewPet()) {}
            const myPets = Scripts.PetCommander.filterPetsInDistance();
            if (!myPets.length) {
                return;
            }
            Orion.IgnoreReset();
            for (const pet of myPets) {
                const petObject = Orion.FindObject(pet.serial);
                if (!petObject || petObject.Distance() > 12) {
                    Scripts.PetCommander.removeFromMyPets(pet.name);
                } else {
                    Orion.WaitTargetObject(Orion.ClientLastAttack());
                    Orion.Say(`${pet.name} kill`);
                    const success = Orion.WaitForTarget(1000);
                    !success && Scripts.PetCommander.removeFromMyPets(pet.name);
                }
            }
            Scripts.PetCommander.ignoreMyPets();
        }

        static kill() {
            !Orion.GetGlobal('myMonstersKill') && Orion.SetGlobal('myMonstersKill', '[]');
            const globalMyMonsters = JSON.parse(Orion.GetGlobal('myMonstersKill'));

            const namesPool = [
                'Andres',
                'Blanca',
                'Carlos',
                'Dolores',
                'Enrique',
                'Felicia',
                'Guillermo',
                'Hilda',
                'Ignacio',
                'Jimena',
                'Kevin',
                'Linda',
                'Marty',
                'Nora',
                'Olaf',
                'Damrey',
                'Haikui',
                'Kirogi',
                'Tembin',
                'Bolaven',
                'Sanba',
                'Jelawat',
                'Ewiniar',
                'Malaksi',
                'Gaemi',
                'Prapiroon',
                'Maria',
                'SonTinh',
                'Bopha',
                'Wukong',
                'Sonamu',
                'Shanshan',
                'Yagi',
                'Leepi',
                'Bebinca',
                'Rumbia',
                'Soulik',
                'Cimaron',
                'Jebi',
                'Mangkhut',
                'Utor',
                'Trami',
                'Yutu',
                'Toraji',
                'Usagi',
                'Pabuk',
                'Wutip',
                'Sepat',
                'Fitow',
                'Danas',
                'Nari',
                'Wipha',
                'Francisco',
                'Lekima',
                'Krosa',
                'Haiyan',
                'Podul',
                'Lingling',
                'Kaziki',
                'Faxai',
                'Peipah',
                'Tapah',
                'Mitag',
                'Hagibis',
                'Neoguri',
                'Rammasun',
                'Matmo',
                'Halong',
                'Nakri',
                'Fengshen',
                'Kalmaegi',
                'Kanmuri',
                'Phanfone',
                'Vongfong',
                'Nuri',
                'Sinlaku',
                'Hagupit',
                'Jangmi',
                'Mekkhala',
                'Higos',
                'Bavi',
                'Maysak',
                'Haishen',
                'Noul',
                'Dolphin',
                'Kujira',
                'Chanhom',
                'Linfa',
                'Nangka',
                'Soudelor',
                'Molave',
                'Goni',
                'Morakot',
                'Etau',
                'Vamco',
                'Krovanh',
                'Dujuan',
                'Mujigae',
                'Choiwan',
                'Koppu',
                'Ketsana',
                'Parma',
                'Melor',
                'Nepartak',
                'Lupit',
                'Mirinae',
                'Nida',
                'Omais',
                'Conson',
                'Chanthu',
                'Dianmu',
                'Mindulle',
                'Lionrock',
                'Kompasu',
                'Namtheun',
                'Malou',
                'Meranti',
                'Fanapi',
                'Malakas',
                'Megi',
                'Chaba',
                'Aere',
                'Songda',
                'Sarika',
                'Haima',
                'Meari',
                'Tokage',
                'Muifa',
                'Merbok',
                'Nanmadol',
                'Talas',
                'Noru',
                'Kulap',
                'Roke',
                'Sonca',
                'Nesat',
                'Haitang',
                'Nalgae',
                'Banyan',
                'Washi',
                'Pakhar',
                'Sanvu',
                'Mawar',
                'Guchol',
                'Patricia',
                'Rick',
                'Sandra',
                'Terry',
                'Vivian',
                'Waldo',
                'Xina',
                'York',
                'Zelda',
                'Agatha',
                'Blas',
                'Celia',
                'Darby',
                'Estelle',
                'Frank',
                'Georgette',
                'Howard',
                'Isis',
                'Javier',
                'Kay',
                'Lester',
                'Madeline',
                'Newton',
                'Orlene',
                'Paine',
                'Roslyn',
                'Seymour',
                'Tina',
                'Virgil',
                'Winifred',
                'Xavier',
                'Yolanda',
                'Zeke',
                'Adrian',
                'Beatriz',
                'Calvin',
                'Dora',
                'Eugene',
                'Fernanda',
                'Greg',
                'Hilary',
                'Irwin',
                'Jova',
                'Kenneth',
                'Lidia',
                'Max',
                'Norma',
                'Otis',
                'Pilar',
                'Ramon',
                'Selma',
                'Todd',
                'Veronica',
                'Wiley',
                'Xina',
                'York',
                'Zelda',
                'Aletta',
                'Bud',
                'Carlotta',
                'Daniel',
                'Emilia',
                'Fabio',
                'Gilma',
                'Hector',
                'Ileana',
                'John',
                'Kristy',
                'Lane',
                'Miriam',
                'Norman',
                'Olivia',
                'Paul',
                'Rosa',
                'Sergio',
                'Tara',
                'Vicente',
                'Willa',
                'Xavier',
                'Yolanda',
                'Zeke',
                'Alvin',
                'Barbara',
                'Cosme',
                'Dalila',
                'Erick',
                'Flossie',
                'Gil',
                'Henriette',
                'Ivo',
                'Juliette',
                'Kiko',
                'Lorena',
                'Manuel',
                'Narda',
                'Octave',
                'Priscilla',
                'Raymond',
                'Sonia',
                'Tico',
                'Velma',
                'Wallis',
                'Xina',
                'York',
                'Zelda',
                'Amanda',
                'Boris',
                'Cristina',
                'Douglas',
                'Elida',
                'Fausto',
                'Genevieve',
                'Hernan',
                'Iselle',
                'Julio',
                'Karina',
                'Lowell',
                'Marie',
                'Norbert',
                'Odile',
                'Polo',
                'Rachel',
                'Simon',
                'Trudy',
                'Vance',
                'Winnie',
                'Xavier',
                'Yolanda',
                'Zeke',
                'Talim',
                'Doksuri',
                'Khanun',
                'Vicente',
                'Saola',
            ];

            let monstersAlive = Orion.FindType(
                '!0x0190|!0x0191',
                '-1',
                'ground',
                'fast|live',
                12,
                'blue|gray|criminal|orange|red',
            );

            const myMonsters = [];
            while (monstersAlive.length) {
                const monsterSerial = monstersAlive[0];
                const isMyMonster = Orion.FindObject(monsterSerial).CanChangeName();

                if (isMyMonster) {
                    let name = '';

                    let isAlreadyRenamed = false;
                    for (const m of globalMyMonsters) {
                        isAlreadyRenamed = m.serial === monsterSerial;
                        if (isAlreadyRenamed) {
                            name = m.name;
                            break;
                        }
                    }

                    if (!isAlreadyRenamed) {
                        const random = Math.floor(Math.random() * namesPool.length);
                        name = namesPool[random];
                        Orion.RenameMount(monsterSerial, name);
                        // the kill command should not react, when it is called faster then the rename is registered on server
                        Orion.Wait(50);
                        namesPool.splice(random, 1);
                    }

                    myMonsters.push({ serial: monsterSerial, name: name });

                    Orion.WaitTargetObject(Orion.ClientLastAttack());
                    Orion.Say(`${name} kill`);
                    Orion.WaitForTarget(1000);
                    Scripts.Utils.waitWhileTargeting();
                }

                Orion.Ignore(monsterSerial);
                monstersAlive = Orion.FindType(
                    '!0x0190|!0x0191',
                    '-1',
                    'ground',
                    'near|live',
                    12,
                    'blue|gray|criminal|orange|red',
                );
            }
            Orion.SetGlobal('myMonstersKill', JSON.stringify(myMonsters));
            Orion.IgnoreReset();
        }

        static healPetsToggleStart() {
            Scripts.Utils.playerPrint('Healing pets START', ColorEnum.green);
            Shared.AddVar('healPetsToggle', true);
        }

        static healPetsToggleStop(message?: string) {
            Scripts.Utils.playerPrint('Healing pets STOP', ColorEnum.red);
            message && Scripts.Utils.playerPrint(message, ColorEnum.orange);
            Shared.AddVar('healPetsToggle', false);
        }

        static sortPetsByHits(arr: IMyPet[]): IMyPet[] {
            return arr.sort((a, b) => {
                const pet1 = Orion.FindObject(a.serial);
                const pet2 = Orion.FindObject(b.serial);
                if (!pet1) {
                    return -1;
                }
                if (!pet2) {
                    return 1;
                }
                return pet1.MaxHits() - pet1.Hits() > pet2.MaxHits() - pet2.Hits() ? 1 : -1;
            });
        }

        static healPetsToggle() {
            Orion.ClearJournal();

            let toggle = Shared.GetVar('healPetsToggle', false);
            toggle ? Scripts.PetCommander.healPetsToggleStop() : Scripts.PetCommander.healPetsToggleStart();
            toggle = Shared.GetVar('healPetsToggle');

            while (toggle) {
                while (Scripts.PetCommander.getNewPet()) {}
                const myPets = Scripts.PetCommander.filterPetsInDistance();
                if (!myPets.length) {
                    Scripts.PetCommander.healPetsToggleStop('Nemas zadne pety');
                    break;
                } else if (myPets.length > 1) {
                    Scripts.PetCommander.sortPetsByHits(myPets);
                }

                let distance = false;
                let heal = false;
                for (const p of myPets) {
                    Orion.ClearJournal();
                    const pet = Orion.FindObject(p.serial);
                    if (!pet) {
                        continue;
                    }
                    if (pet.Distance() <= 6) {
                        distance = true;
                        if (pet.MaxHits() <= pet.Hits() || heal) {
                            continue;
                        }
                        Scripts.Utils.playerPrint(`Healing [${pet.Name()}]`);
                        const b = Scripts.Utils.findFirstType(gameObject.uncategorized.bandy);
                        Orion.WaitTargetObject(p.serial);
                        Orion.UseObject(b);
                        const previousHp = pet.Hits();
                        Scripts.Utils.waitWhileSomethingInJournal([
                            'You put',
                            'You apply',
                            'Chces vytvorit',
                            'must be able to reach',
                            'Nemuzes pouzit bandy',
                        ]);
                        if (Orion.InJournal('Chces vytvorit|Nemuzes pouzit bandy|must be able to reach')) {
                            Orion.Wait(responseDelay);
                            continue;
                        }
                        heal = true;
                        Scripts.Utils.printDamage(p.serial, previousHp);
                    } else if (pet.MaxHits() > pet.Hits()) {
                        Orion.PrintFast(p.serial, '0x0021', 0, `potrebuji heal`);
                    }
                }

                if (!distance) {
                    Scripts.PetCommander.healPetsToggleStop('Musis jit bliz');
                    break;
                }
                if (!heal) {
                    Scripts.Utils.playerPrint('hlidam pety');
                    Orion.Wait(1000);
                }
                toggle = Shared.GetVar('healPetsToggle');
            }
        }
    }
}
