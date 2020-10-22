**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Mining

# Class: Mining

scripty na tezbu

jsou docela naprasene, nepouzivam tu vubec normalni chozeni Orion.WalkTo, takze by to chtelo nekdy procistit
hlavni scripty jsou

mining() ten obejde cely dul a pokud vidi v dosahu forge, tak smelti, jinak proste tezi a tezi
kopaniFire() ten kope jedno policko od sebe, vhodne do Fire dungu
pickOresAround() bere vsechnu rudu v dosahu a haze na sebe
mineAround() kope okolo sebe

## Hierarchy

* **Mining**

## Index

### Methods

* [getNextDirectionsArray](scripts.mining.md#getnextdirectionsarray)
* [kopaniFire](scripts.mining.md#kopanifire)
* [mineAround](scripts.mining.md#minearound)
* [mining](scripts.mining.md#mining)
* [moveDirection](scripts.mining.md#movedirection)
* [pickOresAround](scripts.mining.md#pickoresaround)
* [recurseMine](scripts.mining.md#recursemine)
* [rockMine](scripts.mining.md#rockmine)
* [saveCurrentPositionToArray](scripts.mining.md#savecurrentpositiontoarray)
* [wasVisited](scripts.mining.md#wasvisited)

## Methods

### getNextDirectionsArray

▸ `Static`**getNextDirectionsArray**(`comesFrom`: [DirectionEnum](../enums/directionenum.md)): [DirectionEnum](../enums/directionenum.md)[]

*Defined in [scripts/mining.ts:107](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L107)*

#### Parameters:

Name | Type |
------ | ------ |
`comesFrom` | [DirectionEnum](../enums/directionenum.md) |

**Returns:** [DirectionEnum](../enums/directionenum.md)[]

___

### kopaniFire

▸ `Static`**kopaniFire**(`direction`: number, `fullMine`: boolean): void

*Defined in [scripts/mining.ts:291](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L291)*

#### Parameters:

Name | Type |
------ | ------ |
`direction` | number |
`fullMine` | boolean |

**Returns:** void

___

### mineAround

▸ `Static`**mineAround**(): void

*Defined in [scripts/mining.ts:254](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L254)*

**Returns:** void

___

### mining

▸ `Static`**mining**(): void

*Defined in [scripts/mining.ts:15](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L15)*

**Returns:** void

___

### moveDirection

▸ `Static`**moveDirection**(`direction`: [DirectionEnum](../enums/directionenum.md), `visitedPositions`: ICoordinates[]): boolean

*Defined in [scripts/mining.ts:61](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L61)*

#### Parameters:

Name | Type |
------ | ------ |
`direction` | [DirectionEnum](../enums/directionenum.md) |
`visitedPositions` | ICoordinates[] |

**Returns:** boolean

___

### pickOresAround

▸ `Static`**pickOresAround**(): void

*Defined in [scripts/mining.ts:228](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L228)*

**Returns:** void

___

### recurseMine

▸ `Static`**recurseMine**(`comesFrom`: [DirectionEnum](../enums/directionenum.md), `visitedCoordinates`: ICoordinates[]): void

*Defined in [scripts/mining.ts:29](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`comesFrom` | [DirectionEnum](../enums/directionenum.md) |
`visitedCoordinates` | ICoordinates[] |

**Returns:** void

___

### rockMine

▸ `Static`**rockMine**(): boolean

*Defined in [scripts/mining.ts:120](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L120)*

**Returns:** boolean

___

### saveCurrentPositionToArray

▸ `Static`**saveCurrentPositionToArray**(`arr`: ICoordinates[]): void

*Defined in [scripts/mining.ts:25](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L25)*

#### Parameters:

Name | Type |
------ | ------ |
`arr` | ICoordinates[] |

**Returns:** void

___

### wasVisited

▸ `Static`**wasVisited**(`currentPosition`: ICoordinates, `visitedPositions`: ICoordinates[]): boolean

*Defined in [scripts/mining.ts:98](https://github.com/msviha/orionuo/blob/dc53ac6/src/scripts/mining.ts#L98)*

#### Parameters:

Name | Type |
------ | ------ |
`currentPosition` | ICoordinates |
`visitedPositions` | ICoordinates[] |

**Returns:** boolean
