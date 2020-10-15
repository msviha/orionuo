**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Common

# Class: Common

Obsahuje zakladni scripty

## Hierarchy

* **Common**

## Index

### Methods

* [bandageSelf](scripts.common.md#bandageself)
* [drinkPotion](scripts.common.md#drinkpotion)
* [hiding](scripts.common.md#hiding)
* [mysticCounter](scripts.common.md#mysticcounter)
* [shrinkKad](scripts.common.md#shrinkkad)
* [svetlo](scripts.common.md#svetlo)

## Methods

### bandageSelf

▸ `Static`**bandageSelf**(`pathToNoBandagesWavFile`: string): void

*Defined in [scripts/common.ts:148](https://github.com/msviha/orionuo/blob/f4a5ce9/src/scripts/common.ts#L148)*

Scripts.Common.bandageSelf
stability beta

hodi si bandu, pripadne vypise ze nema a prehraje wav soubor

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`pathToNoBandagesWavFile` | string | "C:/critical.wav" |

**Returns:** void

___

### drinkPotion

▸ `Static`**drinkPotion**(`potionName`: string, `switchWarModeWhenNeeded`: boolean): void

*Defined in [scripts/common.ts:84](https://github.com/msviha/orionuo/blob/f4a5ce9/src/scripts/common.ts#L84)*

Scripts.Common.drinkPotion
stability beta

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`potionName` | string | - | nazev potionu, ktery je definovan jako klic v objectu o.potions |
`switchWarModeWhenNeeded` | boolean | true | prepne war, pokud je potreba docepnout  |

**Returns:** void

___

### hiding

▸ `Static`**hiding**(): void

*Defined in [scripts/common.ts:51](https://github.com/msviha/orionuo/blob/f4a5ce9/src/scripts/common.ts#L51)*

Scripts.Common.hiding
stability beta

hidne, pripadne prepne war a hidne

**Returns:** void

___

### mysticCounter

▸ `Static`**mysticCounter**(): void

*Defined in [scripts/common.ts:161](https://github.com/msviha/orionuo/blob/f4a5ce9/src/scripts/common.ts#L161)*

**Returns:** void

___

### shrinkKad

▸ `Static`**shrinkKad**(): void

*Defined in [scripts/common.ts:34](https://github.com/msviha/orionuo/blob/f4a5ce9/src/scripts/common.ts#L34)*

Scripts.Common.shrinkKad
stability beta

Pouzije shrink kad

**Returns:** void

___

### svetlo

▸ `Static`**svetlo**(`shouldCast`: boolean): void

*Defined in [scripts/common.ts:16](https://github.com/msviha/orionuo/blob/f4a5ce9/src/scripts/common.ts#L16)*

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
