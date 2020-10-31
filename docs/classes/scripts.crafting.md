**[orionuo](../README.md)**

> [Globals](../globals.md) / [Scripts](../modules/scripts.md) / Crafting

# Class: Crafting

Scripty na vyrobu cehokoliv

stability beta

hlavni script na vyrobu je - Scripts.Crafting.Make
example - Scripts.Crafting.Make(o.crafting.tinkering.wires.copper, 5)

## Hierarchy

* **Crafting**

## Index

### Methods

* [confirmMakeMenu](scripts.crafting.md#confirmmakemenu)
* [listMakeMenu](scripts.crafting.md#listmakemenu)
* [make](scripts.crafting.md#make)
* [makeFromSelection](scripts.crafting.md#makefromselection)
* [makeProgress](scripts.crafting.md#makeprogress)
* [refOrMake](scripts.crafting.md#reformake)
* [setInputs](scripts.crafting.md#setinputs)

## Methods

### confirmMakeMenu

▸ `Static`**confirmMakeMenu**(): void

*Defined in [scripts/crafting.ts:164](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts/crafting.ts#L164)*

**Returns:** void

___

### listMakeMenu

▸ `Static`**listMakeMenu**(): void

*Defined in [scripts/crafting.ts:122](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts/crafting.ts#L122)*

**Returns:** void

___

### make

▸ `Static`**make**(`count`: number, `objectAsString`: string, `setInputs`: boolean): void

*Defined in [scripts/crafting.ts:56](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts/crafting.ts#L56)*

Main function for crafting

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`count` | number | - | number of items to be successfully crafted |
`objectAsString` | string | - | object from the global 'o' which will be crafted |
`setInputs` | boolean | true | defines whether the function should ask for the containers (resources & finished)  |

**Returns:** void

___

### makeFromSelection

▸ `Static`**makeFromSelection**(): void

*Defined in [scripts/crafting.ts:101](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts/crafting.ts#L101)*

**Returns:** void

___

### makeProgress

▸ `Static`**makeProgress**(): boolean

*Defined in [scripts/crafting.ts:29](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts/crafting.ts#L29)*

Waits for the journal message with the crafting status

**Returns:** boolean

success/fail

___

### refOrMake

▸ `Static`**refOrMake**(`count`: number, `resourcePath`: string): void

*Defined in [scripts/crafting.ts:40](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts/crafting.ts#L40)*

Refills the resources for crafting, or creates them, if they are not present

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`count` | number | number of resources |
`resourcePath` | string | objectAsString which targets the resource from the global object 'o'  |

**Returns:** void

___

### setInputs

▸ `Static`**setInputs**(`itemName`: string): void

*Defined in [scripts/crafting.ts:17](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts/crafting.ts#L17)*

Creates globals for setting the containers with resources and the finished items

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`itemName` | string | name of the item which will be crafted  |

**Returns:** void
