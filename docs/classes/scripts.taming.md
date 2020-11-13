**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Taming

# Class: Taming

Stability EXPERIMENTAL

je potreba si poupravit nejaka IDcka jako treba robe of druids atd,
hlavni ucel byl pro pousteni scriptu trainOnAnimalsAround
ktery se ale obcas zasekne
Je to potreba jeste poupravit a dodelat.. (portovani pres runy atd)

## Hierarchy

* **Taming**

## Index

### Methods

* [dressRobeOfDruids](scripts.taming.md#dressrobeofdruids)
* [taming](scripts.taming.md#taming)
* [trainOnAnimal](scripts.taming.md#trainonanimal)
* [trainOnAnimalsAround](scripts.taming.md#trainonanimalsaround)
* [undressRobe](scripts.taming.md#undressrobe)
* [useShrinkKad](scripts.taming.md#useshrinkkad)
* [useTrainingTamingStaff](scripts.taming.md#usetrainingtamingstaff)
* [waitOnTaming](scripts.taming.md#waitontaming)

## Methods

### dressRobeOfDruids

▸ `Static`**dressRobeOfDruids**(): boolean \| undefined

*Defined in [scripts/taming.ts:50](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/taming.ts#L50)*

**Returns:** boolean \| undefined

___

### taming

▸ `Static`**taming**(): void

*Defined in [scripts/taming.ts:145](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/taming.ts#L145)*

**Returns:** void

___

### trainOnAnimal

▸ `Static`**trainOnAnimal**(`animalSerial`: string, `ranger`: boolean): boolean \| undefined

*Defined in [scripts/taming.ts:67](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/taming.ts#L67)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`animalSerial` | string | - |
`ranger` | boolean | true |

**Returns:** boolean \| undefined

___

### trainOnAnimalsAround

▸ `Static`**trainOnAnimalsAround**(`ranger`: boolean): void

*Defined in [scripts/taming.ts:122](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/taming.ts#L122)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`ranger` | boolean | true |

**Returns:** void

___

### undressRobe

▸ `Static`**undressRobe**(): void

*Defined in [scripts/taming.ts:62](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/taming.ts#L62)*

**Returns:** void

___

### useShrinkKad

▸ `Static`**useShrinkKad**(): void

*Defined in [scripts/taming.ts:140](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/taming.ts#L140)*

**Returns:** void

___

### useTrainingTamingStaff

▸ `Static`**useTrainingTamingStaff**(`targetSerial`: string): boolean

*Defined in [scripts/taming.ts:16](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/taming.ts#L16)*

Scripts.Taming.useTrainingTamingStaff
returns false when you dont have staff or shrinks

#### Parameters:

Name | Type |
------ | ------ |
`targetSerial` | string |

**Returns:** boolean

___

### waitOnTaming

▸ `Static`**waitOnTaming**(`animalSerial`: string): void

*Defined in [scripts/taming.ts:33](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/taming.ts#L33)*

#### Parameters:

Name | Type |
------ | ------ |
`animalSerial` | string |

**Returns:** void
