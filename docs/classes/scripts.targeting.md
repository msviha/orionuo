**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Targeting

# Class: Targeting

stability EXPERIMENTAL
scripty na pvp a targetovani

## Hierarchy

* **Targeting**

## Index

### Methods

* [addEnemy](scripts.targeting.md#addenemy)
* [addFriend](scripts.targeting.md#addfriend)
* [highlightEnemy](scripts.targeting.md#highlightenemy)
* [manualTarget](scripts.targeting.md#manualtarget)
* [resetEnemies](scripts.targeting.md#resetenemies)
* [resetFriends](scripts.targeting.md#resetfriends)
* [targetNext](scripts.targeting.md#targetnext)

## Methods

### addEnemy

▸ `Static`**addEnemy**(): string

*Defined in [scripts/targeting.ts:20](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/targeting.ts#L20)*

**Returns:** string

___

### addFriend

▸ `Static`**addFriend**(): string

*Defined in [scripts/targeting.ts:8](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/targeting.ts#L8)*

**Returns:** string

___

### highlightEnemy

▸ `Static`**highlightEnemy**(`enemySerial`: string, `enemy`: GameObject): void

*Defined in [scripts/targeting.ts:132](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/targeting.ts#L132)*

#### Parameters:

Name | Type |
------ | ------ |
`enemySerial` | string |
`enemy` | GameObject |

**Returns:** void

___

### manualTarget

▸ `Static`**manualTarget**(): void

*Defined in [scripts/targeting.ts:118](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/targeting.ts#L118)*

**Returns:** void

___

### resetEnemies

▸ `Static`**resetEnemies**(): void

*Defined in [scripts/targeting.ts:37](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/targeting.ts#L37)*

**Returns:** void

___

### resetFriends

▸ `Static`**resetFriends**(): void

*Defined in [scripts/targeting.ts:32](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/targeting.ts#L32)*

**Returns:** void

___

### targetNext

▸ `Static`**targetNext**(`reverse`: boolean, `timeToStorePreviousTargets`: number, `additionalFlags`: string[], `notoriety`: string[]): void

*Defined in [scripts/targeting.ts:47](https://github.com/msviha/orionuo/blob/2ad0399/src/scripts/targeting.ts#L47)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`reverse` | boolean | false | if true.. it behaves like TargetPrevious |
`timeToStorePreviousTargets` | number | 1500 | - |
`additionalFlags` | string[] | [] | - |
`notoriety` | string[] | [] | - |

**Returns:** void
