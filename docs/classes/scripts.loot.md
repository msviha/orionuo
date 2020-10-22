**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Loot

# Class: Loot

## Hierarchy

* **Loot**

## Index

### Methods

* [addCutWeapon](scripts.loot.md#addcutweapon)
* [attackOnEnemy](scripts.loot.md#attackonenemy)
* [carveBody](scripts.loot.md#carvebody)
* [harving](scripts.loot.md#harving)
* [healAndCureWhenHarving](scripts.loot.md#healandcurewhenharving)
* [lootAllFrom](scripts.loot.md#lootallfrom)
* [lootCorpseId](scripts.loot.md#lootcorpseid)
* [lootCorpsesAround](scripts.loot.md#lootcorpsesaround)
* [moveToNextWaypointWhenNeeded](scripts.loot.md#movetonextwaypointwhenneeded)

## Methods

### addCutWeapon

▸ `Static`**addCutWeapon**(): number

*Defined in [scripts/loot.ts:86](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/loot.ts#L86)*

**Returns:** number

___

### attackOnEnemy

▸ `Static`**attackOnEnemy**(`enemySerialsAround`: string[], `lastAttackSerial?`: string): string \| undefined

*Defined in [scripts/loot.ts:194](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/loot.ts#L194)*

#### Parameters:

Name | Type |
------ | ------ |
`enemySerialsAround` | string[] |
`lastAttackSerial?` | string |

**Returns:** string \| undefined

___

### carveBody

▸ `Static`**carveBody**(`carveNearestBodyAutomatically`: boolean): void

*Defined in [scripts/loot.ts:228](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/loot.ts#L228)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`carveNearestBodyAutomatically` | boolean | false |

**Returns:** void

___

### harving

▸ `Static`**harving**(`__namedParameters`: { castCure: boolean = false; castReactive: boolean = false; cut: boolean ; dmgToStartHeal: number = 40; drinkCure: boolean = false; enemiesTypesToHarv: string[] ; fullHeal: boolean = false; trapDelay: number = 10000; wayPoints: any[] ; weapon: boolean = true }): void

*Defined in [scripts/loot.ts:24](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/loot.ts#L24)*

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

*Defined in [scripts/loot.ts:145](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/loot.ts#L145)*

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

*Defined in [scripts/loot.ts:214](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/loot.ts#L214)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`delay` | number | responseDelay |

**Returns:** void

___

### lootCorpseId

▸ `Static`**lootCorpseId**(`id`: string): void

*Defined in [scripts/loot.ts:125](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/loot.ts#L125)*

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

*Defined in [scripts/loot.ts:97](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/loot.ts#L97)*

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

*Defined in [scripts/loot.ts:173](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/loot.ts#L173)*

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
