**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Loot

# Class: Loot

## Hierarchy

* **Loot**

## Index

### Methods

* [attackOnEnemy](scripts.loot.md#attackonenemy)
* [harving](scripts.loot.md#harving)
* [healAndCureWhenHarving](scripts.loot.md#healandcurewhenharving)
* [lootAllFrom](scripts.loot.md#lootallfrom)
* [lootCorpseId](scripts.loot.md#lootcorpseid)
* [lootCorpsesAround](scripts.loot.md#lootcorpsesaround)
* [moveToNextWaypointWhenNeeded](scripts.loot.md#movetonextwaypointwhenneeded)

## Methods

### attackOnEnemy

▸ `Static`**attackOnEnemy**(`enemySerialsAround`: string[], `lastAttackSerial?`: string): string \| undefined

*Defined in [scripts/loot.ts:190](https://github.com/msviha/orionuo/blob/4da48c7/src/scripts/loot.ts#L190)*

#### Parameters:

Name | Type |
------ | ------ |
`enemySerialsAround` | string[] |
`lastAttackSerial?` | string |

**Returns:** string \| undefined

___

### harving

▸ `Static`**harving**(`__namedParameters`: { castCure: boolean = false; castReactive: boolean = false; cut: boolean ; dmgToStartHeal: number = 40; drinkCure: boolean = false; enemiesTypesToHarv: string[] ; fullHeal: boolean = false; trapDelay: number = 10000; wayPoints: any[] ; weapon: boolean = true }): void

*Defined in [scripts/loot.ts:24](https://github.com/msviha/orionuo/blob/4da48c7/src/scripts/loot.ts#L24)*

Scripts.Loot.harving
stability beta

TODO nahozeni zbrane po rezani (pokud se mlati jinou nez reze)

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { castCure: boolean = false; castReactive: boolean = false; cut: boolean ; dmgToStartHeal: number = 40; drinkCure: boolean = false; enemiesTypesToHarv: string[] ; fullHeal: boolean = false; trapDelay: number = 10000; wayPoints: any[] ; weapon: boolean = true } |

**Returns:** void

___

### healAndCureWhenHarving

▸ `Static`**healAndCureWhenHarving**(`dmgToStartHeal`: number, `fullHeal`: boolean, `castCure`: boolean, `drinkCure`: boolean): void

*Defined in [scripts/loot.ts:141](https://github.com/msviha/orionuo/blob/4da48c7/src/scripts/loot.ts#L141)*

Scripts.Loot.healAndCureWhenHarving
stability beta

leci pokud je potreba

#### Parameters:

Name | Type |
------ | ------ |
`dmgToStartHeal` | number |
`fullHeal` | boolean |
`castCure` | boolean |
`drinkCure` | boolean |

**Returns:** void

___

### lootAllFrom

▸ `Static`**lootAllFrom**(`delay`: number): void

*Defined in [scripts/loot.ts:210](https://github.com/msviha/orionuo/blob/4da48c7/src/scripts/loot.ts#L210)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`delay` | number | responseDelay |

**Returns:** void

___

### lootCorpseId

▸ `Static`**lootCorpseId**(`id`: string): void

*Defined in [scripts/loot.ts:121](https://github.com/msviha/orionuo/blob/4da48c7/src/scripts/loot.ts#L121)*

Scripts.Loot.lootCorpseId
stability beta

vylotuje z konkretni mrtvolky veci nastavene v lootItems listu

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |

**Returns:** void

___

### lootCorpsesAround

▸ `Static`**lootCorpsesAround**(`cut?`: boolean, `weapon?`: boolean): void

*Defined in [scripts/loot.ts:93](https://github.com/msviha/orionuo/blob/4da48c7/src/scripts/loot.ts#L93)*

Scripts.Loot.lootCorpseId
stability beta

vylotuje mrtvolky v okoli

#### Parameters:

Name | Type |
------ | ------ |
`cut?` | boolean |
`weapon?` | boolean |

**Returns:** void

___

### moveToNextWaypointWhenNeeded

▸ `Static`**moveToNextWaypointWhenNeeded**(`wayPoints`: ICoordinates[], `enemySerialsAround`: string[], `currentWaypointIndex`: number, `trapDelay`: number): number

*Defined in [scripts/loot.ts:169](https://github.com/msviha/orionuo/blob/4da48c7/src/scripts/loot.ts#L169)*

Scripts.Loot.moveToNextWaypointWhenNeeded
stability beta

presouva se na dalsi waypoint pokud je potreba
return nextWaypointIndex

#### Parameters:

Name | Type |
------ | ------ |
`wayPoints` | ICoordinates[] |
`enemySerialsAround` | string[] |
`currentWaypointIndex` | number |
`trapDelay` | number |

**Returns:** number
