namespace Scripts {
    export class Port {
        static nbRune() {
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
        }

        static travelBook(selection = PortBookOptionsEnum.kop) {
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
