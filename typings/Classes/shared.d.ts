declare interface Shared {
    AddArray(name: string, array: any[]): void;
    AddVar(name: string, value: any): void;
    ClearArrays(): void;
    ClearVars(): void;
    GetArray(name: string, defaultValue?: any[]): any[];
    GetVar(name: string, defaultValue?: any): any;
    RemoveArray(name: string): void;
    RemoveVar(name: string): void;
}
