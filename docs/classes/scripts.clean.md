**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Clean

# Class: Clean

## Hierarchy

* **Clean**

## Index

### Methods

* [cleanBag](scripts.clean.md#cleanbag)
* [cleanMyGameObjectInBag](scripts.clean.md#cleanmygameobjectinbag)
* [cleanObjectInBag](scripts.clean.md#cleanobjectinbag)

## Methods

### cleanBag

▸ `Static`**cleanBag**(): void

*Defined in [scripts/clean.ts:9](https://github.com/msviha/orionuo/blob/60ea7a5/src/scripts/clean.ts#L9)*

Scripts.Clean.cleanBag()
stability released

Hlavni script pro uklizeni veci v baglu, tento script je mozne si upravit podle sebe

**Returns:** void

___

### cleanMyGameObjectInBag

▸ `Static`**cleanMyGameObjectInBag**(`type`: IMyGameObject, `tName?`: string): void

*Defined in [scripts/clean.ts:44](https://github.com/msviha/orionuo/blob/60ea7a5/src/scripts/clean.ts#L44)*

Scripts.Clean.cleanMyGameObjectInBag
stability released

Uklidi vsechny veci ktere maji nastaveny bag v danem objectu

#### Parameters:

Name | Type |
------ | ------ |
`type` | IMyGameObject |
`tName?` | string |

**Returns:** void

___

### cleanObjectInBag

▸ `Static`**cleanObjectInBag**(`object`: any, `objectName?`: string): void

*Defined in [scripts/clean.ts:24](https://github.com/msviha/orionuo/blob/60ea7a5/src/scripts/clean.ts#L24)*

Scripts.Clean.cleanObjectInBag()
stability released

Uklidi vsechny veci ktere maji nastaveny bag v danem objectu, uklizi celou strukturu objektu

#### Parameters:

Name | Type |
------ | ------ |
`object` | any |
`objectName?` | string |

**Returns:** void
