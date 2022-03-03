namespace Scripts {

    export class File {

        /**
         * Nacte soubor a vrati obsah
         * config ma prednost pred defaultem
         * @param defaultFilePath
         * @param configFilePath
         */
        static loadFile(defaultFilePath:string, configFilePath?:string):string {
            const path = configFilePath || defaultFilePath;
            let file = Orion.NewFile();
            if (!file.Open(path)) {
                Scripts.Utils.log(`cannot open file: ${path}`, ColorEnum.red);
                throw 'e';
            }
            const result = file.ReadAll();
            file.Close();

            return result;
        }

        /**
         * Ulozi data do souboru
         * config ma prednost pred defaultem
         * @param data
         * @param defaultFilePath
         * @param configFilePath
         */
        static saveFile(data:string, defaultFilePath:string, configFilePath?:string) {
            const path = configFilePath || defaultFilePath;
            const file = Orion.NewFile();
            file.Remove(path);
            file.Open(path);
            file.Write(data);
            file.Close();
        }

    }
}
