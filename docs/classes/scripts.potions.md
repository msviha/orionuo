**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Potions

# Class: Potions

## Hierarchy

* **Potions**

## Index

### Methods

* [alchemy](scripts.potions.md#alchemy)
* [drinkPotion](scripts.potions.md#drinkpotion)
* [fillPotion](scripts.potions.md#fillpotion)
* [getEmptyBottle](scripts.potions.md#getemptybottle)
* [getKadForPotion](scripts.potions.md#getkadforpotion)
* [getMortar](scripts.potions.md#getmortar)
* [getPotion](scripts.potions.md#getpotion)
* [gmMortar](scripts.potions.md#gmmortar)

## Methods

### alchemy

▸ `Static`**alchemy**(`potionName`: [PotionsEnum](../enums/potionsenum.md)): void

*Defined in [scripts/potions.ts:124](https://github.com/msviha/orionuo/blob/236ae05/src/scripts/potions.ts#L124)*

#### Parameters:

Name | Type |
------ | ------ |
`potionName` | [PotionsEnum](../enums/potionsenum.md) |

**Returns:** void

___

### drinkPotion

▸ `Static`**drinkPotion**(`potionName`: [PotionsEnum](../enums/potionsenum.md), `switchWarModeWhenNeeded`: boolean): void

*Defined in [scripts/potions.ts:44](https://github.com/msviha/orionuo/blob/236ae05/src/scripts/potions.ts#L44)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`potionName` | [PotionsEnum](../enums/potionsenum.md) | - | nazev potionu, ktery je definovan jako klic v objectu o.potions |
`switchWarModeWhenNeeded` | boolean | true | prepne war, pokud je potreba docepnout  |

**Returns:** void

___

### fillPotion

▸ `Static`**fillPotion**(`potionName`: [PotionsEnum](../enums/potionsenum.md), `switchWarModeWhenNeeded`: boolean): void

*Defined in [scripts/potions.ts:162](https://github.com/msviha/orionuo/blob/236ae05/src/scripts/potions.ts#L162)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`potionName` | [PotionsEnum](../enums/potionsenum.md) | - |
`switchWarModeWhenNeeded` | boolean | true |

**Returns:** void

___

### getEmptyBottle

▸ `Static`**getEmptyBottle**(): string

*Defined in [scripts/potions.ts:5](https://github.com/msviha/orionuo/blob/236ae05/src/scripts/potions.ts#L5)*

**Returns:** string

___

### getKadForPotion

▸ `Static`**getKadForPotion**(`potion`: IPotion): string

*Defined in [scripts/potions.ts:14](https://github.com/msviha/orionuo/blob/236ae05/src/scripts/potions.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`potion` | IPotion |

**Returns:** string

___

### getMortar

▸ `Static`**getMortar**(): string

*Defined in [scripts/potions.ts:31](https://github.com/msviha/orionuo/blob/236ae05/src/scripts/potions.ts#L31)*

**Returns:** string

___

### getPotion

▸ `Static`**getPotion**(`potion`: IPotion): string \| false

*Defined in [scripts/potions.ts:23](https://github.com/msviha/orionuo/blob/236ae05/src/scripts/potions.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`potion` | IPotion |

**Returns:** string \| false

___

### gmMortar

▸ `Static`**gmMortar**(`potionName`: [PotionsEnum](../enums/potionsenum.md)): void

*Defined in [scripts/potions.ts:73](https://github.com/msviha/orionuo/blob/236ae05/src/scripts/potions.ts#L73)*

#### Parameters:

Name | Type |
------ | ------ |
`potionName` | [PotionsEnum](../enums/potionsenum.md) |

**Returns:** void
