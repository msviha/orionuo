namespace Scripts {
    export class Port {
        static nbRune(waitForKop = false) {
            const selections:ISelect[] = [{
                type: SelectionTypeEnum.gump,
                selection: 1
            }];
            const nbRuna = gameObject.uncategorized.nbRuna;
            const serial = Scripts.Utils.findFirstType(nbRuna);

            if (!serial) {
                Scripts.Utils.log('NEMAS NB RUNU', ColorEnum.red);
            }

            Scripts.Utils.useAndSelect(serial, selections);
            if (waitForKop) {
                const teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000) !== -1;
                !teleported && Scripts.Utils.useAndSelect(serial, selections);
            }
        }

        static rune(runeSerial:string, waitForKop = false) {
            const selections:ISelect[] = [{
                type: SelectionTypeEnum.menu,
                selection: {name: 'Jak chces runu pouzit?', selection: 'Recall'}
            }];
            Scripts.Utils.useAndSelect(runeSerial, selections);
            if (waitForKop) {
                const teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000) !== -1;
                !teleported && Scripts.Utils.useAndSelect(runeSerial, selections);
            }
        }

        static travelBook(selection = PortBookOptionsEnum.kop, waitForKop = false) {
            let selections:ISelect[];
            switch (selection) {
                case PortBookOptionsEnum.opravaStats:
                    selections = [{
                        type: SelectionTypeEnum.gump,
                        selection: 2
                    }, {
                        type: SelectionTypeEnum.menu,
                        selection: {name: '', selection: 'Ano, oprav'}
                    }];
                    break;
                case PortBookOptionsEnum.mark:
                    selections = [{
                        type: SelectionTypeEnum.gump,
                        selection: 4
                    }, {
                        type: SelectionTypeEnum.gump,
                        selection: 3
                    }];
                    break;
                case PortBookOptionsEnum.nabiti:
                    selections = [{
                        type: SelectionTypeEnum.gump,
                        selection: 1
                    }];
                    break;
                default:
                    selections = [{
                        type: SelectionTypeEnum.gump,
                        selection: 4
                    }, {
                        type: SelectionTypeEnum.gump,
                        selection: 1
                    }];
            }

            const book = gameObject.books.travelBook;
            const serial = Scripts.Utils.findFirstType(book);
            if (!serial) {
                Scripts.Utils.log('NEMAS TRAVEL BOOK', ColorEnum.red);
            }

            Scripts.Utils.useAndSelect(serial, selections);
            if (selection === PortBookOptionsEnum.kop && waitForKop) {
                const teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000) !== -1;
                !teleported && Scripts.Utils.useAndSelect(serial, selections);
            }
        }

        static cestovniKniha(selection = PortBookOptionsEnum.kop) {
            let selections:ISelect[];
            switch (selection) {
                case PortBookOptionsEnum.opravaStats:
                    selections = [{
                        type: SelectionTypeEnum.gump,
                        selection: 2
                    }, {
                        type: SelectionTypeEnum.menu,
                        selection: {name: '', selection: 'Ano, oprav'}
                    }];
                    break;
                case PortBookOptionsEnum.mark:
                    selections = [{
                        type: SelectionTypeEnum.gump,
                        selection: 7
                    }];
                    break;
                default:
                    selections = [{
                        type: SelectionTypeEnum.gump,
                        selection: 5
                    }];
            }

            const book = gameObject.books.cestovniKniha;
            const serial = Scripts.Utils.findFirstType(book);
            if (!serial) {
                Scripts.Utils.log('NEMAS CESTOVNI KNIHU', ColorEnum.red);
            }

            Scripts.Utils.useAndSelect(serial, selections);
        }
    }
}
