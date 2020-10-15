**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Spells

# Class: Spells

## Hierarchy

* **Spells**

## Index

### Methods

* [cast](scripts.spells.md#cast)
* [castNecroScroll](scripts.spells.md#castnecroscroll)
* [castScroll](scripts.spells.md#castscroll)
* [castUntilSuccess](scripts.spells.md#castuntilsuccess)
* [inscription](scripts.spells.md#inscription)
* [summon](scripts.spells.md#summon)

## Methods

### cast

▸ `Static`**cast**(`spell`: string, `target?`: TargetEnum): void

*Defined in [scripts/spells.ts:11](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/spells.ts#L11)*

Scripts.Spells.cast
stability released

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`spell` | string | nazev kouzla |
`target?` | TargetEnum | na koho ma kouzlit  |

**Returns:** void

___

### castNecroScroll

▸ `Static`**castNecroScroll**(`scroll`: NecroScrollEnum, `target?`: TargetEnum): void

*Defined in [scripts/spells.ts:81](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/spells.ts#L81)*

CastScroll(NecroScrollEnum.vfp, TargetEnum.lastattack)
CastScroll('vfp', 'lastattack')
CastScroll('kalnox')

#### Parameters:

Name | Type |
------ | ------ |
`scroll` | NecroScrollEnum |
`target?` | TargetEnum |

**Returns:** void

___

### castScroll

▸ `Static`**castScroll**(`scroll`: ScrollEnum, `target?`: TargetEnum, `backupHeadCast?`: string): void

*Defined in [scripts/spells.ts:39](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/spells.ts#L39)*

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
`scroll` | ScrollEnum |
`target?` | TargetEnum |
`backupHeadCast?` | string |

**Returns:** void

___

### castUntilSuccess

▸ `Static`**castUntilSuccess**(`spell`: string, `target`: TargetEnum, `castTime`: number): void

*Defined in [scripts/spells.ts:120](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/spells.ts#L120)*

Scripts.Spells.castUntilSuccess
stability beta

Kouzli tak dlouho, dokud se mu to nepovede, nebo nedojde mana

#### Parameters:

Name | Type |
------ | ------ |
`spell` | string |
`target` | TargetEnum |
`castTime` | number |

**Returns:** void

___

### inscription

▸ `Static`**inscription**(`circle`: number, `spell`: string, `quantity`: number): void

*Defined in [scripts/spells.ts:137](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/spells.ts#L137)*

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

▸ `Static`**summon**(`creature`: string, `target?`: TargetEnum): void

*Defined in [scripts/spells.ts:21](https://github.com/msviha/orionuo/blob/dc3b709/src/scripts/spells.ts#L21)*

Scripts.Spells.summon

vykouzli summona

#### Parameters:

Name | Type |
------ | ------ |
`creature` | string |
`target?` | TargetEnum |

**Returns:** void
