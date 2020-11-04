**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Utils

# Class: Utils

Obsahuje pouze pomocne funkce pro ostatni scripty

## Hierarchy

* **Utils**

## Index

### Methods

* [countItemsBySerials](scripts.utils.md#countitemsbyserials)
* [countObjectInContainer](scripts.utils.md#countobjectincontainer)
* [determineHpColor](scripts.utils.md#determinehpcolor)
* [findMyDefinitionForGameObject](scripts.utils.md#findmydefinitionforgameobject)
* [getLivingObjectInDistance](scripts.utils.md#getlivingobjectindistance)
* [getSerialsFromMyGameObject](scripts.utils.md#getserialsfrommygameobject)
* [log](scripts.utils.md#log)
* [moveItems](scripts.utils.md#moveitems)
* [movePlayerToDirection](scripts.utils.md#moveplayertodirection)
* [parseObject](scripts.utils.md#parseobject)
* [playerPrint](scripts.utils.md#playerprint)
* [printColoredHpBar](scripts.utils.md#printcoloredhpbar)
* [printDamage](scripts.utils.md#printdamage)
* [refill](scripts.utils.md#refill)
* [resetTimer](scripts.utils.md#resettimer)
* [selectMenu](scripts.utils.md#selectmenu)
* [setTargetAlias](scripts.utils.md#settargetalias)
* [updateCurrentStatusBar](scripts.utils.md#updatecurrentstatusbar)
* [use](scripts.utils.md#use)
* [waitTarget](scripts.utils.md#waittarget)
* [waitWhileSomethingInJournal](scripts.utils.md#waitwhilesomethinginjournal)
* [waitWhileTargeting](scripts.utils.md#waitwhiletargeting)
* [worldSaveCheckWait](scripts.utils.md#worldsavecheckwait)

## Methods

### countItemsBySerials

▸ `Static`**countItemsBySerials**(`itemsSerials`: string[]): number

*Defined in [scripts/utils.ts:55](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L55)*

#### Parameters:

Name | Type |
------ | ------ |
`itemsSerials` | string[] |

**Returns:** number

___

### countObjectInContainer

▸ `Static`**countObjectInContainer**(`obj`: IMyGameObject, `container`: string): number

*Defined in [scripts/utils.ts:50](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L50)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`obj` | IMyGameObject | - |
`container` | string | "backpack" |

**Returns:** number

___

### determineHpColor

▸ `Static`**determineHpColor**(`percent`: number): [ColorEnum](../enums/colorenum.md)

*Defined in [scripts/utils.ts:205](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L205)*

#### Parameters:

Name | Type |
------ | ------ |
`percent` | number |

**Returns:** [ColorEnum](../enums/colorenum.md)

___

### findMyDefinitionForGameObject

▸ `Static`**findMyDefinitionForGameObject**(`gameObject`: GameObject, `obj?`: any): IMyGameObject \| undefined

*Defined in [scripts/utils.ts:159](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L159)*

#### Parameters:

Name | Type |
------ | ------ |
`gameObject` | GameObject |
`obj?` | any |

**Returns:** IMyGameObject \| undefined

___

### getLivingObjectInDistance

▸ `Static`**getLivingObjectInDistance**(`objectSerial`: string): GameObject \| null

*Defined in [scripts/utils.ts:221](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L221)*

#### Parameters:

Name | Type |
------ | ------ |
`objectSerial` | string |

**Returns:** GameObject \| null

___

### getSerialsFromMyGameObject

▸ `Static`**getSerialsFromMyGameObject**(`type`: IMyGameObject): string[]

*Defined in [scripts/utils.ts:150](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L150)*

#### Parameters:

Name | Type |
------ | ------ |
`type` | IMyGameObject |

**Returns:** string[]

___

### log

▸ `Static`**log**(`message`: string, `color`: [ColorEnum](../enums/colorenum.md)): void

*Defined in [scripts/utils.ts:110](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L110)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | - |
`color` | [ColorEnum](../enums/colorenum.md) | ColorEnum.none |

**Returns:** void

___

### moveItems

▸ `Static`**moveItems**(`itemsSerials`: string[], `targetContainerId`: string, `quantity`: number): number

*Defined in [scripts/utils.ts:64](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L64)*

#### Parameters:

Name | Type |
------ | ------ |
`itemsSerials` | string[] |
`targetContainerId` | string |
`quantity` | number |

**Returns:** number

___

### movePlayerToDirection

▸ `Static`**movePlayerToDirection**(`direction`: [DirectionEnum](../enums/directionenum.md)): boolean

*Defined in [scripts/utils.ts:138](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L138)*

#### Parameters:

Name | Type |
------ | ------ |
`direction` | [DirectionEnum](../enums/directionenum.md) |

**Returns:** boolean

___

### parseObject

▸ `Static`**parseObject**(`objectAsString`: string): IMyGameObject

*Defined in [scripts/utils.ts:188](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L188)*

parses the given string into object which is in the global object 'o'

#### Parameters:

Name | Type |
------ | ------ |
`objectAsString` | string |

**Returns:** IMyGameObject

IMyGameObject

___

### playerPrint

▸ `Static`**playerPrint**(`message`: string, `color`: [ColorEnum](../enums/colorenum.md) \| number): void

*Defined in [scripts/utils.ts:114](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L114)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | - |
`color` | [ColorEnum](../enums/colorenum.md) \| number | ColorEnum.none |

**Returns:** void

___

### printColoredHpBar

▸ `Static`**printColoredHpBar**(`target`: string, `percent`: number): void

*Defined in [scripts/utils.ts:210](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L210)*

#### Parameters:

Name | Type |
------ | ------ |
`target` | string |
`percent` | number |

**Returns:** void

___

### printDamage

▸ `Static`**printDamage**(`serial`: string, `previousHp`: number, `force`: boolean): void

*Defined in [scripts/utils.ts:226](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L226)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`serial` | string | - |
`previousHp` | number | - |
`force` | boolean | false |

**Returns:** void

___

### refill

▸ `Static`**refill**(`obj`: IMyGameObject, `sourceContainerId`: string, `quantity`: number, `targetContainerId`: string, `refillJustWhenIHaveNothing`: boolean, `itemName?`: string): number

*Defined in [scripts/utils.ts:22](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L22)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`obj` | IMyGameObject | - |
`sourceContainerId` | string | - |
`quantity` | number | 1 |
`targetContainerId` | string | "backpack" |
`refillJustWhenIHaveNothing` | boolean | false |
`itemName?` | string | - |

**Returns:** number

___

### resetTimer

▸ `Static`**resetTimer**(`timer`: string): void

*Defined in [scripts/utils.ts:127](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L127)*

#### Parameters:

Name | Type |
------ | ------ |
`timer` | string |

**Returns:** void

___

### selectMenu

▸ `Static`**selectMenu**(`menuName`: string, `selections`: string[], `firstCall`: boolean): void

*Defined in [scripts/utils.ts:8](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L8)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`menuName` | string | - |
`selections` | string[] | - |
`firstCall` | boolean | true |

**Returns:** void

___

### setTargetAlias

▸ `Static`**setTargetAlias**(`targetAliasToSet`: string, `message`: string): void

*Defined in [scripts/utils.ts:259](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L259)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`targetAliasToSet` | string | - |
`message` | string | "nastav target" |

**Returns:** void

___

### updateCurrentStatusBar

▸ `Static`**updateCurrentStatusBar**(`newSerial`: string): void

*Defined in [scripts/utils.ts:198](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L198)*

#### Parameters:

Name | Type |
------ | ------ |
`newSerial` | string |

**Returns:** void

___

### use

▸ `Static`**use**(`val`: IMyGameObject \| IMyGameObject[], `name`: string, `minimalCountForWarn?`: number): void

*Defined in [scripts/utils.ts:237](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L237)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`val` | IMyGameObject \| IMyGameObject[] | - |
`name` | string | "" |
`minimalCountForWarn?` | number | - |

**Returns:** void

___

### waitTarget

▸ `Static`**waitTarget**(`target?`: [TargetEnum](../enums/targetenum.md)): void

*Defined in [scripts/utils.ts:118](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L118)*

#### Parameters:

Name | Type |
------ | ------ |
`target?` | [TargetEnum](../enums/targetenum.md) |

**Returns:** void

___

### waitWhileSomethingInJournal

▸ `Static`**waitWhileSomethingInJournal**(`messages`: string[], `wait?`: number): void

*Defined in [scripts/utils.ts:92](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L92)*

#### Parameters:

Name | Type |
------ | ------ |
`messages` | string[] |
`wait?` | number |

**Returns:** void

___

### waitWhileTargeting

▸ `Static`**waitWhileTargeting**(): void

*Defined in [scripts/utils.ts:132](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L132)*

**Returns:** void

___

### worldSaveCheckWait

▸ `Static`**worldSaveCheckWait**(): void

*Defined in [scripts/utils.ts:103](https://github.com/msviha/orionuo/blob/48715bb/src/scripts/utils.ts#L103)*

**Returns:** void
