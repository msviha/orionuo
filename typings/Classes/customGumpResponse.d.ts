declare interface CustomGumpResponse {
    CheckBox(serial: string): boolean;
    Checks(): number[];
    ComboBox(serial: string): number;
    ComboBoxes(): any;
    MinMaxButton(serial: string): number;
    MinMaxButtons(): any;
    Radio(serial: string): boolean;
    Radios(): number[];
    ReturnCode(): number;
    Serial(): number;
    Slider(serial: string): number;
    Sliders(): any;
    Spoiler(serial: string): boolean;
    Spoilers(): number[];
    Text(serial: string): string;
    Texts(): any;
}
