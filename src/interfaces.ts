interface IMyGameObject {
    graphic:string,
    color?:string,
    bag?:IBagDestination,
    make?:IMakeProps;
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
