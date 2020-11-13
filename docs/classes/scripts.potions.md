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
* [gmMortar](scripts.potions.md#gmmortar)

## Methods

### alchemy

▸ `Static`**alchemy**(`potionName`: [PotionsEnum](../enums/potionsenum.md)): void

*Defined in [scripts/potions.ts:126](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/potions.ts#L126)*

#### Parameters:

Name | Type |
------ | ------ |
`potionName` | [PotionsEnum](../enums/potionsenum.md) |

**Returns:** void

___

### drinkPotion

▸ `Static`**drinkPotion**(`potionName`: [PotionsEnum](../enums/potionsenum.md), `switchWarModeWhenNeeded`: boolean, `displayTimers`: boolean, `displayInfo`: boolean): void

*Defined in [scripts/potions.ts:36](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/potions.ts#L36)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`potionName` | [PotionsEnum](../enums/potionsenum.md) | - | nazev potionu, ktery je definovan jako klic v objectu o.potions |
`switchWarModeWhenNeeded` | boolean | true | prepne war, pokud je potreba docepnout  |
`displayTimers` | boolean | true | - |
`displayInfo` | boolean | true | - |

**Returns:** void

___

### fillPotion

▸ `Static`**fillPotion**(`potionName`: [PotionsEnum](../enums/potionsenum.md), `switchWarModeWhenNeeded`: boolean): void

*Defined in [scripts/potions.ts:164](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/potions.ts#L164)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`potionName` | [PotionsEnum](../enums/potionsenum.md) | - |
`switchWarModeWhenNeeded` | boolean | true |

**Returns:** void

___

### getEmptyBottle

▸ `Static`**getEmptyBottle**(): string

*Defined in [scripts/potions.ts:5](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/potions.ts#L5)*

**Returns:** string

___

### getKadForPotion

▸ `Static`**getKadForPotion**(`potion`: IPotion): string

*Defined in [scripts/potions.ts:14](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/potions.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`potion` | IPotion |

**Returns:** string

___

### getMortar

▸ `Static`**getMortar**(): string

*Defined in [scripts/potions.ts:23](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/potions.ts#L23)*

**Returns:** string

___

### gmMortar

▸ `Static`**gmMortar**(`potionName`: [PotionsEnum](../enums/potionsenum.md)): void

*Defined in [scripts/potions.ts:75](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/potions.ts#L75)*

#### Parameters:

Name | Type |
------ | ------ |
`potionName` | [PotionsEnum](../enums/potionsenum.md) |

**Returns:** void
