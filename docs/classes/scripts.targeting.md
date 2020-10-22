**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Targeting

# Class: Targeting

stability EXPERIMENTAL
scripty na pvp a targetovani

## Hierarchy

* **Targeting**

## Index

### Methods

* [highlightEnemy](scripts.targeting.md#highlightenemy)
* [manualTarget](scripts.targeting.md#manualtarget)
* [targetNext](scripts.targeting.md#targetnext)

## Methods

### highlightEnemy

▸ `Static`**highlightEnemy**(`enemySerial`: string, `enemy`: GameObject): void

*Defined in [scripts/targeting.ts:92](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/targeting.ts#L92)*

#### Parameters:

Name | Type |
------ | ------ |
`enemySerial` | string |
`enemy` | GameObject |

**Returns:** void

___

### manualTarget

▸ `Static`**manualTarget**(): void

*Defined in [scripts/targeting.ts:78](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/targeting.ts#L78)*

**Returns:** void

___

### targetNext

▸ `Static`**targetNext**(`reverse`: boolean): void

*Defined in [scripts/targeting.ts:13](https://github.com/msviha/orionuo/blob/597f2ef/src/scripts/targeting.ts#L13)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`reverse` | boolean | false | if true.. it behaves like TargetPrevious |

**Returns:** void
