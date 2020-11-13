interface IMyGameObject {
    graphic:string,
    color?:string,
    bag?:IBagDestination,
    make?:IMakeProps;
    name?:string;
}

interface IPotion extends IMyGameObject {
    kad:IMyGameObject
}

interface IBagDestination extends ICoordinates{
    objectAlias?:string
}

interface IMakeProps {
    tool:string,
    refill?:IRefillProps,
    menu:IMenuWithSelections,
    outputCount?:number
}

interface IRefillProps {
    resources?:IRefillItem[],
    crafting?:IRefillItem[]
}

interface IRefillItem {
    item:string,
    count:number
}

interface IMenuWithSelections {
    name:string,
    selections:string[]
}

interface ICoordinates {
    x:number,
    y:number
}

interface ISelect {
    type:SelectionTypeEnum,
    selection:number|IMenuSelection
}

interface IMenuSelection {
    name:string,
    selection:string
}
