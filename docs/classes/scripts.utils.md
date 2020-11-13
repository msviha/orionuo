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
* [findFirstType](scripts.utils.md#findfirsttype)
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
* [useAndSelect](scripts.utils.md#useandselect)
* [waitTarget](scripts.utils.md#waittarget)
* [waitWhileSomethingInJournal](scripts.utils.md#waitwhilesomethinginjournal)
* [waitWhileTargeting](scripts.utils.md#waitwhiletargeting)
* [worldSaveCheckWait](scripts.utils.md#worldsavecheckwait)

## Methods

### countItemsBySerials

▸ `Static`**countItemsBySerials**(`itemsSerials`: string[]): number

*Defined in [scripts/utils.ts:82](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L82)*

#### Parameters:

Name | Type |
------ | ------ |
`itemsSerials` | string[] |

**Returns:** number

___

### countObjectInContainer

▸ `Static`**countObjectInContainer**(`obj`: IMyGameObject, `container`: string): number

*Defined in [scripts/utils.ts:77](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L77)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`obj` | IMyGameObject | - |
`container` | string | "backpack" |

**Returns:** number

___

### determineHpColor

▸ `Static`**determineHpColor**(`percent`: number): [ColorEnum](../enums/colorenum.md)

*Defined in [scripts/utils.ts:235](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L235)*

#### Parameters:

Name | Type |
------ | ------ |
`percent` | number |

**Returns:** [ColorEnum](../enums/colorenum.md)

___

### findFirstType

▸ `Static`**findFirstType**(`myGameObject`: IMyGameObject, `layer?`: number): string \| undefined

*Defined in [scripts/utils.ts:321](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L321)*

#### Parameters:

Name | Type |
------ | ------ |
`myGameObject` | IMyGameObject |
`layer?` | number |

**Returns:** string \| undefined

___

### findMyDefinitionForGameObject

▸ `Static`**findMyDefinitionForGameObject**(`gameObject`: GameObject, `obj?`: any): IMyGameObject \| undefined

*Defined in [scripts/utils.ts:189](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L189)*

#### Parameters:

Name | Type |
------ | ------ |
`gameObject` | GameObject |
`obj?` | any |

**Returns:** IMyGameObject \| undefined

___

### getLivingObjectInDistance

▸ `Static`**getLivingObjectInDistance**(`objectSerial`: string): GameObject \| null

*Defined in [scripts/utils.ts:251](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L251)*

#### Parameters:

Name | Type |
------ | ------ |
`objectSerial` | string |

**Returns:** GameObject \| null

___

### getSerialsFromMyGameObject

▸ `Static`**getSerialsFromMyGameObject**(`type`: IMyGameObject): string[]

*Defined in [scripts/utils.ts:180](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L180)*

#### Parameters:

Name | Type |
------ | ------ |
`type` | IMyGameObject |

**Returns:** string[]

___

### log

▸ `Static`**log**(`message`: string, `color`: [ColorEnum](../enums/colorenum.md)): void

*Defined in [scripts/utils.ts:137](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L137)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | - |
`color` | [ColorEnum](../enums/colorenum.md) | ColorEnum.none |

**Returns:** void

___

### moveItems

▸ `Static`**moveItems**(`itemsSerials`: string[], `targetContainerId`: string, `quantity`: number): number

*Defined in [scripts/utils.ts:91](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L91)*

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

*Defined in [scripts/utils.ts:168](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L168)*

#### Parameters:

Name | Type |
------ | ------ |
`direction` | [DirectionEnum](../enums/directionenum.md) |

**Returns:** boolean

___

### parseObject

▸ `Static`**parseObject**(`objectAsString`: string): IMyGameObject

*Defined in [scripts/utils.ts:218](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L218)*

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

*Defined in [scripts/utils.ts:141](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L141)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | - |
`color` | [ColorEnum](../enums/colorenum.md) \| number | ColorEnum.none |

**Returns:** void

___

### printColoredHpBar

▸ `Static`**printColoredHpBar**(`target`: string, `percent`: number): void

*Defined in [scripts/utils.ts:240](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L240)*

#### Parameters:

Name | Type |
------ | ------ |
`target` | string |
`percent` | number |

**Returns:** void

___

### printDamage

▸ `Static`**printDamage**(`serial`: string, `previousHp`: number, `force`: boolean): void

*Defined in [scripts/utils.ts:256](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L256)*

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

*Defined in [scripts/utils.ts:49](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L49)*

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

*Defined in [scripts/utils.ts:157](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L157)*

#### Parameters:

Name | Type |
------ | ------ |
`timer` | string |

**Returns:** void

___

### selectMenu

▸ `Static`**selectMenu**(`menuName`: string, `selections`: string[], `firstCall`: boolean): void

*Defined in [scripts/utils.ts:8](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L8)*

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

*Defined in [scripts/utils.ts:313](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L313)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`targetAliasToSet` | string | - |
`message` | string | "nastav target" |

**Returns:** void

___

### updateCurrentStatusBar

▸ `Static`**updateCurrentStatusBar**(`newSerial`: string): void

*Defined in [scripts/utils.ts:228](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L228)*

#### Parameters:

Name | Type |
------ | ------ |
`newSerial` | string |

**Returns:** void

___

### use

▸ `Static`**use**(`val`: IMyGameObject \| IMyGameObject[], `name`: string, `minimalCountForWarn?`: number, `warnWavPath?`: string): void

*Defined in [scripts/utils.ts:267](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L267)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`val` | IMyGameObject \| IMyGameObject[] | - |
`name` | string | "" |
`minimalCountForWarn?` | number | - |
`warnWavPath?` | string | - |

**Returns:** void

___

### useAndSelect

▸ `Static`**useAndSelect**(`serial`: string, `selections`: ISelect[], `use`: boolean): void

*Defined in [scripts/utils.ts:21](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L21)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`serial` | string | - |
`selections` | ISelect[] | - |
`use` | boolean | true |

**Returns:** void

___

### waitTarget

▸ `Static`**waitTarget**(`target?`: [TargetEnum](../enums/targetenum.md) \| string): void

*Defined in [scripts/utils.ts:145](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L145)*

#### Parameters:

Name | Type |
------ | ------ |
`target?` | [TargetEnum](../enums/targetenum.md) \| string |

**Returns:** void

___

### waitWhileSomethingInJournal

▸ `Static`**waitWhileSomethingInJournal**(`messages`: string[], `wait?`: number): void

*Defined in [scripts/utils.ts:119](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L119)*

#### Parameters:

Name | Type |
------ | ------ |
`messages` | string[] |
`wait?` | number |

**Returns:** void

___

### waitWhileTargeting

▸ `Static`**waitWhileTargeting**(): void

*Defined in [scripts/utils.ts:162](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L162)*

**Returns:** void

___

### worldSaveCheckWait

▸ `Static`**worldSaveCheckWait**(): void

*Defined in [scripts/utils.ts:130](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/utils.ts#L130)*

**Returns:** void
