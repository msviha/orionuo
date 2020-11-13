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
* [miningPort](scripts.mining.md#miningport)
* [moveDirection](scripts.mining.md#movedirection)
* [pickOresAround](scripts.mining.md#pickoresaround)
* [portAndMoveToTreasure](scripts.mining.md#portandmovetotreasure)
* [recurseMine](scripts.mining.md#recursemine)
* [rockMine](scripts.mining.md#rockmine)
* [saveCurrentPositionToArray](scripts.mining.md#savecurrentpositiontoarray)
* [wasVisited](scripts.mining.md#wasvisited)

## Methods

### getNextDirectionsArray

▸ `Static`**getNextDirectionsArray**(`comesFrom`: [DirectionEnum](../enums/directionenum.md)): [DirectionEnum](../enums/directionenum.md)[]

*Defined in [scripts/mining.ts:137](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L137)*

#### Parameters:

Name | Type |
------ | ------ |
`comesFrom` | [DirectionEnum](../enums/directionenum.md) |

**Returns:** [DirectionEnum](../enums/directionenum.md)[]

___

### kopaniFire

▸ `Static`**kopaniFire**(`direction`: number, `fullMine`: boolean): void

*Defined in [scripts/mining.ts:338](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L338)*

#### Parameters:

Name | Type |
------ | ------ |
`direction` | number |
`fullMine` | boolean |

**Returns:** void

___

### mineAround

▸ `Static`**mineAround**(): void

*Defined in [scripts/mining.ts:301](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L301)*

**Returns:** void

___

### mining

▸ `Static`**mining**(): void

*Defined in [scripts/mining.ts:15](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L15)*

**Returns:** void

___

### miningPort

▸ `Static`**miningPort**(): void

*Defined in [scripts/mining.ts:25](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L25)*

**Returns:** void

___

### moveDirection

▸ `Static`**moveDirection**(`direction`: [DirectionEnum](../enums/directionenum.md), `visitedPositions`: ICoordinates[]): boolean

*Defined in [scripts/mining.ts:91](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L91)*

#### Parameters:

Name | Type |
------ | ------ |
`direction` | [DirectionEnum](../enums/directionenum.md) |
`visitedPositions` | ICoordinates[] |

**Returns:** boolean

___

### pickOresAround

▸ `Static`**pickOresAround**(): void

*Defined in [scripts/mining.ts:275](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L275)*

**Returns:** void

___

### portAndMoveToTreasure

▸ `Static`**portAndMoveToTreasure**(): void

*Defined in [scripts/mining.ts:30](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L30)*

**Returns:** void

___

### recurseMine

▸ `Static`**recurseMine**(`comesFrom`: [DirectionEnum](../enums/directionenum.md), `visitedCoordinates`: ICoordinates[]): void

*Defined in [scripts/mining.ts:59](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L59)*

#### Parameters:

Name | Type |
------ | ------ |
`comesFrom` | [DirectionEnum](../enums/directionenum.md) |
`visitedCoordinates` | ICoordinates[] |

**Returns:** void

___

### rockMine

▸ `Static`**rockMine**(): boolean

*Defined in [scripts/mining.ts:150](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L150)*

**Returns:** boolean

___

### saveCurrentPositionToArray

▸ `Static`**saveCurrentPositionToArray**(`arr`: ICoordinates[]): void

*Defined in [scripts/mining.ts:55](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L55)*

#### Parameters:

Name | Type |
------ | ------ |
`arr` | ICoordinates[] |

**Returns:** void

___

### wasVisited

▸ `Static`**wasVisited**(`currentPosition`: ICoordinates, `visitedPositions`: ICoordinates[]): boolean

*Defined in [scripts/mining.ts:128](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/mining.ts#L128)*

#### Parameters:

Name | Type |
------ | ------ |
`currentPosition` | ICoordinates |
`visitedPositions` | ICoordinates[] |

**Returns:** boolean
