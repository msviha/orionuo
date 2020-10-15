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
* [updateCurrentStatusBar](scripts.utils.md#updatecurrentstatusbar)
* [waitTarget](scripts.utils.md#waittarget)
* [waitWhileSomethingInJournal](scripts.utils.md#waitwhilesomethinginjournal)
* [waitWhileTargeting](scripts.utils.md#waitwhiletargeting)
* [worldSaveCheckWait](scripts.utils.md#worldsavecheckwait)

## Methods

### countItemsBySerials

▸ `Static`**countItemsBySerials**(`itemsSerials`: string[]): number

*Defined in [scripts/utils.ts:54](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L54)*

#### Parameters:

Name | Type |
------ | ------ |
`itemsSerials` | string[] |

**Returns:** number

___

### countObjectInContainer

▸ `Static`**countObjectInContainer**(`obj`: IMyGameObject, `container`: string): number

*Defined in [scripts/utils.ts:49](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`obj` | IMyGameObject |
`container` | string |

**Returns:** number

___

### determineHpColor

▸ `Static`**determineHpColor**(`percent`: number): ColorEnum

*Defined in [scripts/utils.ts:199](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L199)*

#### Parameters:

Name | Type |
------ | ------ |
`percent` | number |

**Returns:** ColorEnum

___

### findMyDefinitionForGameObject

▸ `Static`**findMyDefinitionForGameObject**(`gameObject`: GameObject, `obj?`: any): IMyGameObject \| undefined

*Defined in [scripts/utils.ts:153](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L153)*

#### Parameters:

Name | Type |
------ | ------ |
`gameObject` | GameObject |
`obj?` | any |

**Returns:** IMyGameObject \| undefined

___

### getLivingObjectInDistance

▸ `Static`**getLivingObjectInDistance**(`objectSerial`: string): GameObject \| null

*Defined in [scripts/utils.ts:215](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L215)*

#### Parameters:

Name | Type |
------ | ------ |
`objectSerial` | string |

**Returns:** GameObject \| null

___

### getSerialsFromMyGameObject

▸ `Static`**getSerialsFromMyGameObject**(`type`: IMyGameObject): string[]

*Defined in [scripts/utils.ts:144](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L144)*

#### Parameters:

Name | Type |
------ | ------ |
`type` | IMyGameObject |

**Returns:** string[]

___

### log

▸ `Static`**log**(`message`: string, `color`: ColorEnum): void

*Defined in [scripts/utils.ts:104](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L104)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | - |
`color` | ColorEnum | ColorEnum.none |

**Returns:** void

___

### moveItems

▸ `Static`**moveItems**(`itemsSerials`: string[], `targetContainerId`: string, `quantity`: number): number

*Defined in [scripts/utils.ts:63](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L63)*

#### Parameters:

Name | Type |
------ | ------ |
`itemsSerials` | string[] |
`targetContainerId` | string |
`quantity` | number |

**Returns:** number

___

### movePlayerToDirection

▸ `Static`**movePlayerToDirection**(`direction`: DirectionEnum): boolean

*Defined in [scripts/utils.ts:132](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L132)*

#### Parameters:

Name | Type |
------ | ------ |
`direction` | DirectionEnum |

**Returns:** boolean

___

### parseObject

▸ `Static`**parseObject**(`objectAsString`: string): IMyGameObject

*Defined in [scripts/utils.ts:182](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L182)*

parses the given string into object which is in the global object 'o'

#### Parameters:

Name | Type |
------ | ------ |
`objectAsString` | string |

**Returns:** IMyGameObject

IMyGameObject

___

### playerPrint

▸ `Static`**playerPrint**(`message`: string, `color`: ColorEnum \| number): void

*Defined in [scripts/utils.ts:108](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L108)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | - |
`color` | ColorEnum \| number | ColorEnum.none |

**Returns:** void

___

### printColoredHpBar

▸ `Static`**printColoredHpBar**(`target`: string, `percent`: number): void

*Defined in [scripts/utils.ts:204](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L204)*

#### Parameters:

Name | Type |
------ | ------ |
`target` | string |
`percent` | number |

**Returns:** void

___

### printDamage

▸ `Static`**printDamage**(`serial`: string, `previousHp`: number, `force`: boolean): void

*Defined in [scripts/utils.ts:220](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L220)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`serial` | string | - |
`previousHp` | number | - |
`force` | boolean | false |

**Returns:** void

___

### refill

▸ `Static`**refill**(`obj`: IMyGameObject, `sourceContainerId`: string, `quantity`: number, `targetContainerId`: string, `refillJustWhenIHaveNothing`: boolean): number

*Defined in [scripts/utils.ts:22](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L22)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`obj` | IMyGameObject | - |
`sourceContainerId` | string | - |
`quantity` | number | 1 |
`targetContainerId` | string | "backpack" |
`refillJustWhenIHaveNothing` | boolean | false |

**Returns:** number

___

### resetTimer

▸ `Static`**resetTimer**(`timer`: string): void

*Defined in [scripts/utils.ts:121](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L121)*

#### Parameters:

Name | Type |
------ | ------ |
`timer` | string |

**Returns:** void

___

### selectMenu

▸ `Static`**selectMenu**(`menuName`: string, `selections`: string[], `firstCall`: boolean): void

*Defined in [scripts/utils.ts:8](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L8)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`menuName` | string | - |
`selections` | string[] | - |
`firstCall` | boolean | true |

**Returns:** void

___

### updateCurrentStatusBar

▸ `Static`**updateCurrentStatusBar**(`newSerial`: string): void

*Defined in [scripts/utils.ts:192](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L192)*

#### Parameters:

Name | Type |
------ | ------ |
`newSerial` | string |

**Returns:** void

___

### waitTarget

▸ `Static`**waitTarget**(`target?`: TargetEnum): void

*Defined in [scripts/utils.ts:112](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L112)*

#### Parameters:

Name | Type |
------ | ------ |
`target?` | TargetEnum |

**Returns:** void

___

### waitWhileSomethingInJournal

▸ `Static`**waitWhileSomethingInJournal**(`messages`: string[], `wait?`: number): void

*Defined in [scripts/utils.ts:86](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L86)*

#### Parameters:

Name | Type |
------ | ------ |
`messages` | string[] |
`wait?` | number |

**Returns:** void

___

### waitWhileTargeting

▸ `Static`**waitWhileTargeting**(): void

*Defined in [scripts/utils.ts:126](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L126)*

**Returns:** void

___

### worldSaveCheckWait

▸ `Static`**worldSaveCheckWait**(): void

*Defined in [scripts/utils.ts:97](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/utils.ts#L97)*

**Returns:** void
