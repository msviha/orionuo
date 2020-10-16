**[orionuo](README.md)**

> Globals

# orionuo

## Index

### Namespaces

* [Scripts](modules/scripts.md)

### Enumerations

* [ColorEnum](enums/colorenum.md)
* [DirectionEnum](enums/directionenum.md)
* [NecroScrollEnum](enums/necroscrollenum.md)
* [PotionsEnum](enums/potionsenum.md)
* [ScrollEnum](enums/scrollenum.md)
* [TargetEnum](enums/targetenum.md)
* [TimersEnum](enums/timersenum.md)

### Variables

* [responseDelay](globals.md#responsedelay)

### Functions

* [Autostart](globals.md#autostart)
* [cast](globals.md#cast)
* [castScroll](globals.md#castscroll)
* [gmMortar](globals.md#gmmortar)
* [hideAll](globals.md#hideall)
* [hiding](globals.md#hiding)
* [kill](globals.md#kill)
* [light](globals.md#light)
* [lootAll](globals.md#lootall)
* [make](globals.md#make)

### Object literals

* [gameObject](globals.md#gameobject)

## Variables

### responseDelay

• `Const` **responseDelay**: 350 = 350

*Defined in [globals.ts:1](https://github.com/msviha/orionuo/blob/43b8a75/src/globals.ts#L1)*

## Functions

### Autostart

▸ **Autostart**(): void

*Defined in [scripts.ts:4](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L4)*

Zaskrtnete si v Orion Assistantovi Autostart checkbox

**Returns:** void

___

### cast

▸ **cast**(`spell`: string, `target?`: [TargetEnum](enums/targetenum.md)): void

*Defined in [scripts.ts:73](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L73)*

Kouzli na pozadovany target, pokud je uveden

**`example`** external code `cast("Harm", "lastattack");`

**`example`** external code `cast("Magic Reflection", "self");`

#### Parameters:

Name | Type |
------ | ------ |
`spell` | string |
`target?` | [TargetEnum](enums/targetenum.md) |

**Returns:** void

___

### castScroll

▸ **castScroll**(`scroll`: [ScrollEnum](enums/scrollenum.md), `target?`: [TargetEnum](enums/targetenum.md), `backupHeadCast?`: string): void

*Defined in [scripts.ts:82](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L82)*

Kouzli svitek na pozadovany target, pokud je uveden, pokud neni timer na svitek zakouzli z hlavy backupHeadCast

**`example`** external code `castScroll("ijs", "self", "Magic Reflection");`

**`example`** external code `castScroll("pog", "lastattack");`

#### Parameters:

Name | Type |
------ | ------ |
`scroll` | [ScrollEnum](enums/scrollenum.md) |
`target?` | [TargetEnum](enums/targetenum.md) |
`backupHeadCast?` | string |

**Returns:** void

___

### gmMortar

▸ **gmMortar**(`potionName`: [PotionsEnum](enums/potionsenum.md)): void

*Defined in [scripts.ts:102](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L102)*

Micha na gm mortaru

**`example`** in client `_gmMortar tmr`

**`example`** external code `gmMortar('tmr');`

#### Parameters:

Name | Type |
------ | ------ |
`potionName` | [PotionsEnum](enums/potionsenum.md) |

**Returns:** void

___

### hideAll

▸ **hideAll**(): void

*Defined in [scripts.ts:111](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L111)*

Prepina mezi dvema stavy - hiduje hrace v okruhu 15ti policek a nasledne dava resync/resend. Pouziti vyhradne pro dungovani (hazim zed a prekazi mi neco v zamereni policka)

**`example`** in client `_hideAll`

**`example`** in client `hideAll();`

**Returns:** void

___

### hiding

▸ **hiding**(): void

*Defined in [scripts.ts:45](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L45)*

Hidne hrace

**`example`** [_hiding](../examples/hiding.gif)

**Returns:** void

___

### kill

▸ **kill**(): void

*Defined in [scripts.ts:64](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L64)*

Prejmenuje vsechny summony a posle na lastattack

**`example`** `_kill`

**Returns:** void

___

### light

▸ **light**(`shouldCast`: boolean): void

*Defined in [scripts.ts:55](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L55)*

Hodi svetlo z kade, pokud kad neni, tak hodi z hlavy (pokud za to nenapisete false)

**`example`** `_light`

**`example`** `_light false`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`shouldCast` | boolean | true | default je true, takze pokud nemas kad tak zakouzli svetlo |

**Returns:** void

___

### lootAll

▸ **lootAll**(`delay`: number): void

*Defined in [scripts.ts:37](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L37)*

Zameri target a premisti z nej vse do backpacku

**`example`** `_lootAll 2000`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`delay` | number | responseDelay | cas mezi presunem dvou itemu |

**Returns:** void

___

### make

▸ **make**(`count`: number, `objectAsString`: string, `setInputs`: boolean): void

*Defined in [scripts.ts:92](https://github.com/msviha/orionuo/blob/43b8a75/src/scripts.ts#L92)*

Vyrabi s craftem

**`example`** external code `make(100, 'gameObject.crafting.carpentry.miscellaneous.krabiceKadi');`

**`example`** external code `make(70, 'gameObject.crafting.tinkering.wires.shadow');`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`count` | number | - | - |
`objectAsString` | string | - | zde je potreba nadefinovat cestu k itemu skrze [gameObject](./globals.md#gameObject) |
`setInputs` | boolean | true | - |

**Returns:** void

## Object literals

### gameObject

▪ `Const` **gameObject**: object

*Defined in [globals.ts:2](https://github.com/msviha/orionuo/blob/43b8a75/src/globals.ts#L2)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`books` | object | { bookOfDead: { color: string = "0x0455"; graphic: string = "0x0EFA"; bag: { x: number = 132; y: number = 5 }  } ; highMagicSpellBook: { color: string = "0x0021"; graphic: string = "0x0EFA"; bag: { x: number = 142; y: number = 5 }  } ; runeBook: { color: string = "0x08A5"; graphic: string = "0x0FF0"; bag: { x: number = 112; y: number = 5 }  } ; travelBook: { color: string = "0x0482"; graphic: string = "0x0FEF"; bag: { x: number = 122; y: number = 5 }  } ; unholySpellbook: { color: string = "0x0413"; graphic: string = "0x0EFA"; bag: { x: number = 142; y: number = 5 }  }  } |
`crafting` | object | { carpentry: { containersAndParts: { barrelLid: { color: string = "0x0000"; graphic: string = "0x1DB8"; make: { tool: string = "o.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Containers & Cont. parts', 'Barrel Lid'] } ; refill: { crafting: { count: number = 2; item: string = "o.crafting.carpentry.miscellaneous.boards" }[] = [{item: 'o.crafting.carpentry.miscellaneous.boards', count: 2}]; resources: { count: number = 1; item: string = "o.resources.logs" }[] = [{item: 'o.resources.logs', count: 1}] }  }  } ; barrelStaves: { color: string = "0x0000"; graphic: string = "0x1EB1"; make: { tool: string = "o.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Containers & Cont. parts', 'Barrel Staves'] } ; refill: { resources: { count: number = 3; item: string = "o.resources.logs" }[] = [{item: 'o.resources.logs', count: 3}] }  }  } ; formaNaLahve: { color: string = "0x0909"; graphic: string = "0x0E7F"; make: { tool: string = "o.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Containers & Cont. parts', 'Forma na lahve'] } ; refill: { crafting: { count: number = 2; item: string = "o.crafting.carpentry.containersAndParts.barrelLid" }[] = [                                  {item: 'o.crafting.carpentry.containersAndParts.barrelLid', count: 2},                                  {item: 'o.crafting.carpentry.containersAndParts.barrelStaves', count: 2}                              ]; resources: { count: number = 1; item: string = "o.resources.logs" }[] = [{item: 'o.resources.logs', count: 1}] }  }  }  } ; miscellaneous: { boards: { color: string = "0x0000"; graphic: string = "0x1BD7"; make: { outputCount: number = 3; tool: string = "o.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Miscellaneous', 'Boards'] } ; refill: { resources: { count: number = 2; item: string = "o.resources.logs" }[] = [{item: 'o.resources.logs', count: 2}] }  }  } ; krabiceKadi: { color: string = "0x07E0"; graphic: string = "0x185E"; make: { tool: string = "o.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Miscellaneous', 'Krabice kadi'] } ; refill: { crafting: { count: number = 20; item: string = "o.crafting.tinkering.containers.kadNaPotiony" }[] = [{item: 'o.crafting.tinkering.containers.kadNaPotiony', count: 20}]; resources: { count: number = 2; item: string = "o.resources.logs" }[] = [{item: 'o.resources.logs', count: 2}] }  }  }  }  } ; tinkering: { containers: { animalBox: { color: string = "0x051E"; graphic: string = "0x09A8"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Containers', 'Animal Box'] } ; refill: { crafting: { count: number = 1; item: string = "o.crafting.tinkering.containers.goldenBox" }[] = [                                  {item: 'o.crafting.tinkering.containers.goldenBox', count: 1}                              ]; resources: { count: number = 5; item: string = "o.resources.logs" }[] = [                                  {item: 'o.resources.logs', count: 5},                                  {item: 'o.resources.furs', count: 5}                              ] }  }  } ; goldenBox: { color: string = "0x0000"; graphic: string = "0x0E80"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Containers', 'Golden Box (W)'] } ; refill: { resources: { count: number = 5; item: string = "o.resources.logs" }[] = [                                  {item: 'o.resources.logs', count: 5},                                  {item: 'o.resources.ingots.gold', count: 5},                                  {item: 'o.resources.ingots.iron', count: 1}                              ] }  }  } ; kadNaPotiony: { color: string = "0x0000"; graphic: string = "0x1843"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Containers', 'Kad na potiony'] } ; refill: { crafting: { count: number = 1; item: string = "o.crafting.carpentry.containersAndParts.formaNaLahve" }[] = [                                  {item: 'o.crafting.carpentry.containersAndParts.formaNaLahve', count: 1}                              ]; resources: { count: number = 2; item: string = "o.resources.logs" }[] = [                                  {item: 'o.resources.logs', count: 2},                                  {item: 'o.resources.ore.iron', count: 2},                                  {item: 'o.resources.ingots.bronze', count: 1},                                  {item: 'o.resources.ingots.iron', count: 1}                              ] }  }  } ; univerzalAnimalBox: { color: string = "0x0000"; graphic: string = "0x09A8"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Containers', 'Univerzal Animal Box'] } ; refill: { crafting: { count: number = 1; item: string = "o.crafting.tinkering.containers.animalBox" }[] = [                                  {item: 'o.crafting.tinkering.containers.animalBox', count: 1}                              ]; resources: { count: number = 5; item: string = "o.resources.logs" }[] = [                                  {item: 'o.resources.logs', count: 5},                                  {item: 'o.resources.furs', count: 5}                              ] }  }  }  } ; parts: { springs: { color: string = "0x0000"; graphic: string = "0x105D"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Parts', 'Springs'] } ; refill: { resources: { count: number = 1; item: string = "o.resources.ingots.iron" }[] = [{item: 'o.resources.ingots.iron', count: 1}] }  }  }  } ; specialItems: { magicBall: { color: string = "0x0B86"; graphic: string = "0x0E2D"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Special Items', 'Magic Ball (10 charges)'] } ; refill: { crafting: { count: number = 2; item: string = "o.crafting.tinkering.parts.springs" }[] = [                                  {item: 'o.crafting.tinkering.parts.springs', count: 2},                                  {item: 'o.crafting.tinkering.wires.copper', count: 5}                              ]; resources: { count: number = 1; item: string = "o.resources.ingots.gold" }[] = [                                  {item: 'o.resources.ingots.gold', count: 1},                                  {item: 'o.resources.ingots.iron', count: 1},                                  {item: 'o.resources.stones.pieceOfAmber', count: 1},                                  {item: 'o.resources.stones.starSapphire', count: 3}                              ] }  }  }  } ; wires: { black: { color: string = "0x0455"; graphic: string = "0x1876"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Black Rock Wire'] } ; refill: { resources: { count: number = 2; item: string = "o.resources.ingots.black" }[] = [                                  {item: 'o.resources.ingots.black', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'o.resources.ingots.iron', count: 2}                              ] }  }  } ; blood: { color: string = "0x04C2"; graphic: string = "0x1876"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Blood Rock Wire'] } ; refill: { resources: { count: number = 2; item: string = "o.resources.ingots.blood" }[] = [                                  {item: 'o.resources.ingots.blood', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'o.resources.ingots.iron', count: 2}                              ] }  }  } ; copper: { color: string = "0x0000"; graphic: string = "0x1879"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Copper Wire'] } ; refill: { resources: { count: number = 2; item: string = "o.resources.ingots.copper" }[] = [                                  {item: 'o.resources.ingots.copper', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'o.resources.ingots.iron', count: 2}                              ] }  }  } ; mytheril: { color: string = "0x052D"; graphic: string = "0x1876"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Mytheril Wire'] } ; refill: { resources: { count: number = 2; item: string = "o.resources.ingots.mytheril" }[] = [                                  {item: 'o.resources.ingots.mytheril', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'o.resources.ingots.iron', count: 2}                              ] }  }  } ; rose: { color: string = "0x0665"; graphic: string = "0x1876"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Rose Wire'] } ; refill: { resources: { count: number = 2; item: string = "o.resources.ingots.rose" }[] = [                                  {item: 'o.resources.ingots.rose', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'o.resources.ingots.iron', count: 2}                              ] }  }  } ; shadow: { color: string = "0x0770"; graphic: string = "0x1876"; make: { tool: string = "o.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Shadow Wire'] } ; refill: { resources: { count: number = 2; item: string = "o.resources.ingots.shadow" }[] = [                                  {item: 'o.resources.ingots.shadow', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'o.resources.ingots.iron', count: 2}                              ] }  }  }  }  }  } |
`mystics` | object | { ball: { color: string = "0x0B9F"; graphic: string = "0x0E73"; name: string = "Ball" } ; beeds: { color: string = "0x0BB5"; graphic: string = "0x108B"; name: string = "Beeds" } ; crystal: { color: string = "0x0044"; graphic: string = "0x0F5A"; name: string = "Crystal" } ; flower: { color: string = "0x005B"; graphic: string = "0x0DC3"; name: string = "Flower" } ; leaf: { color: string = "0x0B9F"; graphic: string = "0x0DBD"; name: string = "Leaf" } ; mushroom: { color: string = "0x00A3"; graphic: string = "0x0D16"; name: string = "Mushroom" } ; plant: { color: string = "0x0899"; graphic: string = "0x0CB0"; name: string = "Stone" } ; stick: { color: string = "0x0481"; graphic: string = "0x1A9D"; name: string = "Stick" } ; stone: { color: string = "0x0B94"; graphic: string = "0x136C"; name: string = "Stone" }  } |
`necroRegy` | object | { batwings: { graphic: string = "0x0F78"; bag: { x: number = 155; y: number = 180 }  } ; blackmoor: { graphic: string = "0x0F79"; bag: { x: number = 155; y: number = 180 }  } ; bloodspawn: { graphic: string = "0x0F7C"; bag: { x: number = 155; y: number = 180 }  } ; bones: { graphic: string = "0x0F7E"; bag: { x: number = 155; y: number = 180 }  } ; brimstone: { graphic: string = "0x0F7F"; bag: { x: number = 155; y: number = 180 }  } ; daemon\_bones: { graphic: string = "0x0F80"; bag: { x: number = 155; y: number = 180 }  } ; deamon\_blood: { graphic: string = "0x0F7D"; bag: { x: number = 155; y: number = 180 }  } ; dragons\_blood: { graphic: string = "0x0F82"; bag: { x: number = 155; y: number = 180 }  } ; executioners\_cap: { graphic: string = "0x0F83"; bag: { x: number = 155; y: number = 180 }  } ; eyes\_of\_newt: { color: string = "0x0000"; graphic: string = "0x0F87"; bag: { x: number = 155; y: number = 180 }  } ; fertile\_dirt: { graphic: string = "0x0F81"; bag: { x: number = 155; y: number = 180 }  } ; obsidian: { graphic: string = "0x0F89"; bag: { x: number = 155; y: number = 180 }  } ; pumice: { graphic: string = "0x0F8B"; bag: { x: number = 155; y: number = 180 }  } ; serpent\_scales: { graphic: string = "0x0F8E"; bag: { x: number = 155; y: number = 180 }  } ; volcanic\_ash: { graphic: string = "0x0F8F"; bag: { x: number = 155; y: number = 180 }  } ; wyrms\_hearts: { graphic: string = "0x0F91"; bag: { x: number = 155; y: number = 180 }  }  } |
`potions` | object | { gc: { color: string = "0x0000"; gmMortarSelection: string = "Greater Cure (612 Garlics)"; graphic: string = "0x0F07"; bag: { x: number = 80; y: number = 15 } ; kad: { color: string = "0x0842"; graphic: string = "0x1843" }  } ; gh: { color: string = "0x0000"; gmMortarSelection: string = "Greater Heal (714 Ginsengs)"; graphic: string = "0x0F0C"; bag: { x: number = 25; y: number = 15 } ; kad: { color: string = "0x08A7"; graphic: string = "0x1843" }  } ; gs: { color: string = "0x0000"; gmMortarSelection: string = "Greater Strength (612 Mandrake Roots)"; graphic: string = "0x0F09"; bag: { x: number = 25; y: number = 25 } ; kad: { color: string = "0x0481"; graphic: string = "0x1843" }  } ; lavabomb: { color: string = "0x000E"; gmMortarSelection: string = "Lava Bomb (612 Volcanic Ashes)"; graphic: string = "0x0F0D"; kad: { color: string = "0x000E"; graphic: string = "0x1843" }  } ; lc: { color: string = "0x0000"; graphic: string = "0x0F07"; bag: { x: number = 80; y: number = 15 } ; kad: { color: string = "0x0091"; graphic: string = "0x1843" }  } ; ns: { color: string = "0x0000"; graphic: string = "0x0F06"; kad: { color: string = "0x03C4"; graphic: string = "0x1843" }  } ; shrink: { color: string = "0x045E"; gmMortarSelection: string = "Shrink (306 Batwings)"; graphic: string = "0x0F09"; bag: { x: number = 80; y: number = 25 } ; kad: { color: string = "0x0724"; graphic: string = "0x1843" }  } ; tmr: { color: string = "0x0003"; gmMortarSelection: string = "Total Mana Refresh (612 Eyes of Newt nebo 306 Blue Eyes of Newt)"; graphic: string = "0x0F09"; bag: { x: number = 25; y: number = 5 } ; kad: { color: string = "0x0003"; graphic: string = "0x1843" }  } ; tr: { color: string = "0x0000"; gmMortarSelection: string = "Total Refresh (510 Black Pearls)"; graphic: string = "0x0F0B"; bag: { x: number = 80; y: number = 5 } ; kad: { color: string = "0x014D"; graphic: string = "0x1843" }  }  } |
`regy` | object | { bm: { graphic: string = "0x0F7B"; bag: { x: number = 50; y: number = 180 }  } ; bp: { graphic: string = "0x0F7A"; bag: { x: number = 61; y: number = 180 }  } ; ga: { graphic: string = "0x0F84"; bag: { x: number = 80; y: number = 180 }  } ; gi: { graphic: string = "0x0F85"; bag: { x: number = 92; y: number = 180 }  } ; mr: { graphic: string = "0x0F86"; bag: { x: number = 20; y: number = 180 }  } ; ns: { graphic: string = "0x0F88"; bag: { x: number = 110; y: number = 180 }  } ; sa: { graphic: string = "0x0F8C"; bag: { x: number = 125; y: number = 180 }  } ; ss: { graphic: string = "0x0F8D"; bag: { x: number = 35; y: number = 180 }  }  } |
`resources` | object | { boards: { color: string = "0x0000"; graphic: string = "0x1BD7" } ; furs: { color: string = "0x0000"; graphic: string = "0x11FA" } ; ingots: { black: { color: string = "0x0455"; graphic: string = "0x1BEF" } ; blood: { color: string = "0x04C2"; graphic: string = "0x1BEF" } ; bronze: { color: string = "0x06D6"; graphic: string = "0x1BEF" } ; copper: { color: string = "0x0000"; graphic: string = "0x1BE3" } ; gold: { color: string = "0x0000"; graphic: string = "0x1BE9" } ; iron: { color: string = "0x0000"; graphic: string = "0x1BEF" } ; mytheril: { color: string = "0x052D"; graphic: string = "0x1BEF" } ; rose: { color: string = "0x0665"; graphic: string = "0x1BEF" } ; shadow: { color: string = "0x0770"; graphic: string = "0x1BEF" }  } ; logs: { color: string = "0x0000"; graphic: string = "0x1BDD" } ; ore: { iron: { color: string = "0x0000"; graphic: string = "0x19B9" }  } ; stones: { pieceOfAmber: { color: string = "0x0000"; graphic: string = "0x0F25" } ; starSapphire: { color: string = "0x0000"; graphic: string = "0x0F0F" }  }  } |
`rings` | object | { ggr: { color: string = "0x0000"; graphic: string = "0x108A"; bag: { x: number = 59; y: number = 35 }  } ; grr: { color: string = "0x0B21"; graphic: string = "0x108A"; bag: { x: number = 53; y: number = 35 }  } ; grr2: { color: string = "0x0B98"; graphic: string = "0x108A"; bag: { x: number = 56; y: number = 35 }  } ; rr: { color: string = "0x0496"; graphic: string = "0x108A"; bag: { x: number = 50; y: number = 35 }  }  } |
`scrolls` | object | { blank: { color: string = "0x0000"; graphic: string = "0x0E34" } ; necro: { haluze: { color: string = "0x0010"; graphic: string = "0x0E35" } ; kalnox: { color: string = "0x0005"; graphic: string = "0x0E35" } ; vfp: { color: string = "0x0070"; graphic: string = "0x0E35"; minMana: number = 20 }  } ; standard: { bolt: { color: string = "0x0000"; graphic: string = "0x1F56" } ; ef: { color: string = "0x0000"; graphic: string = "0x1F5E" } ; ijs: { color: string = "0x0000"; graphic: string = "0x1F50"; minMana: number = 7; timer: number = 9600 } ; ivm: { color: string = "0x0000"; graphic: string = "0x1F49" } ; kvf: { color: string = "0x0000"; graphic: string = "0x1F5F"; minMana: number = 20; timer: number = 5000 } ; para: { color: string = "0x0000"; graphic: string = "0x1F52" } ; pog: { color: string = "0x0000"; graphic: string = "0x1F4A"; minMana: number = 5; timer: number = 5000 } ; port: { color: string = "0x0000"; graphic: string = "0x1F42" } ; wos: { color: string = "0x0000"; graphic: string = "0x1F44" }  }  } |
`taming` | object | { staffs: { taming: { color: string = "0x04B9"; graphic: string = "0x13F4" } ; tamingShrink: { color: string = "0x096D"; graphic: string = "0x13F4" } ; training: { color: string = "0x04B9"; graphic: string = "0x13F4" }  }  } |
`tools` | object | { saw: { color: string = "0x0000"; graphic: string = "0x1035" } ; tinkerTools: { color: string = "0x0000"; graphic: string = "0x1EBC" }  } |
`uncategorized` | object | { anyKey: { graphic: string = "0x1012"; bag: { x: number = 160; y: number = 5 }  } ; bandy: { color: string = "0x0000"; graphic: string = "0x0E21"; bag: { x: number = 123; y: number = 20 }  } ; emptyBottles: { color: string = "0x0000"; graphic: string = "0x0F0E" } ; emptyKad: { color: string = "0x0000"; graphic: string = "0x1843" } ; lockpicks: { color: string = "0x0000"; graphic: string = "0x14FB" } ; mortar: { color: string = "0x0000"; graphic: string = "0x0E9B"; bag: { x: number = 116; y: number = 24 }  } ; nbRuna: { color: string = "0x0B1D"; graphic: string = "0x1F14" } ; ngDagger: { color: string = "0x0B80"; graphic: string = "0x0F51"; bag: { x: number = 150; y: number = 30 }  } ; salat: { color: string = "0x06AB"; graphic: string = "0x09EC" }  } |
