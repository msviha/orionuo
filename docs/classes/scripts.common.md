**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Common

# Class: Common

Obsahuje zakladni scripty

## Hierarchy

* **Common**

## Index

### Methods

* [bandageSelf](scripts.common.md#bandageself)
* [hideAll](scripts.common.md#hideall)
* [hiding](scripts.common.md#hiding)
* [mysticCounter](scripts.common.md#mysticcounter)
* [shrinkKad](scripts.common.md#shrinkkad)
* [svetlo](scripts.common.md#svetlo)

## Methods

### bandageSelf

▸ `Static`**bandageSelf**(`pathToNoBandagesWavFile`: string): void

*Defined in [scripts/common.ts:83](https://github.com/msviha/orionuo/blob/7437f54/src/scripts/common.ts#L83)*

Scripts.Common.bandageSelf
stability beta

hodi si bandu, pripadne vypise ze nema a prehraje wav soubor

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`pathToNoBandagesWavFile` | string | "C:/critical.wav" |

**Returns:** void

___

### hideAll

▸ `Static`**hideAll**(): void

*Defined in [scripts/common.ts:124](https://github.com/msviha/orionuo/blob/7437f54/src/scripts/common.ts#L124)*

**Returns:** void

___

### hiding

▸ `Static`**hiding**(): void

*Defined in [scripts/common.ts:51](https://github.com/msviha/orionuo/blob/7437f54/src/scripts/common.ts#L51)*

Scripts.Common.hiding
stability beta

hidne, pripadne prepne war a hidne

**Returns:** void

___

### mysticCounter

▸ `Static`**mysticCounter**(): void

*Defined in [scripts/common.ts:96](https://github.com/msviha/orionuo/blob/7437f54/src/scripts/common.ts#L96)*

**Returns:** void

___

### shrinkKad

▸ `Static`**shrinkKad**(): void

*Defined in [scripts/common.ts:34](https://github.com/msviha/orionuo/blob/7437f54/src/scripts/common.ts#L34)*

Scripts.Common.shrinkKad
stability beta

Pouzije shrink kad

**Returns:** void

___

### svetlo

▸ `Static`**svetlo**(`shouldCast`: boolean): void

*Defined in [scripts/common.ts:16](https://github.com/msviha/orionuo/blob/7437f54/src/scripts/common.ts#L16)*

Scripts.Common.svetlo
stability released

Pouzije svetlo z kade na sebe
Pokud nenajde kad, tak zakouzli svetlo.
Kouzleni lze zakazat pomoci parametru Scripts.Common.svetlo(false)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`shouldCast` | boolean | true |

**Returns:** void
