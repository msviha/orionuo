**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Spells

# Class: Spells

## Hierarchy

* **Spells**

## Index

### Methods

* [backupHeadCast](scripts.spells.md#backupheadcast)
* [cast](scripts.spells.md#cast)
* [castNecroScroll](scripts.spells.md#castnecroscroll)
* [castScroll](scripts.spells.md#castscroll)
* [castUntilSuccess](scripts.spells.md#castuntilsuccess)
* [inscription](scripts.spells.md#inscription)
* [summon](scripts.spells.md#summon)

## Methods

### backupHeadCast

▸ `Static`**backupHeadCast**(`reason`: string, `spell`: string, `target?`: [TargetEnum](../enums/targetenum.md) \| string): void

*Defined in [scripts/spells.ts:71](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/spells.ts#L71)*

#### Parameters:

Name | Type |
------ | ------ |
`reason` | string |
`spell` | string |
`target?` | [TargetEnum](../enums/targetenum.md) \| string |

**Returns:** void

___

### cast

▸ `Static`**cast**(`spell`: string, `target?`: [TargetEnum](../enums/targetenum.md) \| string): void

*Defined in [scripts/spells.ts:11](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/spells.ts#L11)*

Scripts.Spells.cast
stability released

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`spell` | string | nazev kouzla |
`target?` | [TargetEnum](../enums/targetenum.md) \| string | na koho ma kouzlit  |

**Returns:** void

___

### castNecroScroll

▸ `Static`**castNecroScroll**(`scroll`: [NecroScrollEnum](../enums/necroscrollenum.md), `target?`: [TargetEnum](../enums/targetenum.md) \| string): void

*Defined in [scripts/spells.ts:81](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/spells.ts#L81)*

CastScroll(NecroScrollEnum.vfp, TargetEnum.lastattack)
CastScroll('vfp', 'lastattack')
CastScroll('kalnox')

#### Parameters:

Name | Type |
------ | ------ |
`scroll` | [NecroScrollEnum](../enums/necroscrollenum.md) |
`target?` | [TargetEnum](../enums/targetenum.md) \| string |

**Returns:** void

___

### castScroll

▸ `Static`**castScroll**(`scroll`: [ScrollEnum](../enums/scrollenum.md), `target?`: [TargetEnum](../enums/targetenum.md) \| string, `backupHeadCast?`: string): void

*Defined in [scripts/spells.ts:39](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/spells.ts#L39)*

Scripts.Spells.CastScroll
stability beta

examples - with/without target
CastScroll(NecroScrollEnum.vfp, TargetEnum.lastattack)
CastScroll('vfp', 'lastattack')
CastScroll(ScrollEnum.ijs, TargetEnum.self)
CastScroll('ijs', 'self')
CastScroll(ScrollEnum.port)
CastScroll('port')

#### Parameters:

Name | Type |
------ | ------ |
`scroll` | [ScrollEnum](../enums/scrollenum.md) |
`target?` | [TargetEnum](../enums/targetenum.md) \| string |
`backupHeadCast?` | string |

**Returns:** void

___

### castUntilSuccess

▸ `Static`**castUntilSuccess**(`spell`: string, `target`: [TargetEnum](../enums/targetenum.md), `castTime`: number): void

*Defined in [scripts/spells.ts:117](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/spells.ts#L117)*

Scripts.Spells.castUntilSuccess
stability beta

Kouzli tak dlouho, dokud se mu to nepovede, nebo nedojde mana

#### Parameters:

Name | Type |
------ | ------ |
`spell` | string |
`target` | [TargetEnum](../enums/targetenum.md) |
`castTime` | number |

**Returns:** void

___

### inscription

▸ `Static`**inscription**(`circle`: number, `spell`: string, `quantity`: number): void

*Defined in [scripts/spells.ts:134](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/spells.ts#L134)*

Scripts.Spells.inscription
stability beta

Pise svitky

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`circle` | number | - |
`spell` | string | - |
`quantity` | number | 0 |

**Returns:** void

___

### summon

▸ `Static`**summon**(`creature`: string, `target?`: [TargetEnum](../enums/targetenum.md)): void

*Defined in [scripts/spells.ts:21](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/spells.ts#L21)*

Scripts.Spells.summon

vykouzli summona

#### Parameters:

Name | Type |
------ | ------ |
`creature` | string |
`target?` | [TargetEnum](../enums/targetenum.md) |

**Returns:** void
