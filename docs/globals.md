**[orionuo](README.md)**

> Globals

# orionuo

## Index

### Namespaces

* [Scripts](modules/scripts.md)

### Enumerations

* [ColorEnum](enums/colorenum.md)
* [DirectionEnum](enums/directionenum.md)
* [FlagsEnum](enums/flagsenum.md)
* [NecroScrollEnum](enums/necroscrollenum.md)
* [NotorietyEnum](enums/notorietyenum.md)
* [PotionsEnum](enums/potionsenum.md)
* [ScrollEnum](enums/scrollenum.md)
* [TargetEnum](enums/targetenum.md)
* [TimersEnum](enums/timersenum.md)

### Variables

* [responseDelay](globals.md#responsedelay)

### Functions

* [Autostart](globals.md#autostart)
* [addCutWeapon](globals.md#addcutweapon)
* [addMount](globals.md#addmount)
* [alchemy](globals.md#alchemy)
* [bandageSelf](globals.md#bandageself)
* [carveBody](globals.md#carvebody)
* [cast](globals.md#cast)
* [castNecroScroll](globals.md#castnecroscroll)
* [castScroll](globals.md#castscroll)
* [craftNext](globals.md#craftnext)
* [craftSelect](globals.md#craftselect)
* [drink](globals.md#drink)
* [enemy](globals.md#enemy)
* [fillPotion](globals.md#fillpotion)
* [friend](globals.md#friend)
* [gmMortar](globals.md#gmmortar)
* [harp](globals.md#harp)
* [hideAll](globals.md#hideall)
* [hiding](globals.md#hiding)
* [inscription](globals.md#inscription)
* [kill](globals.md#kill)
* [lavaBomb](globals.md#lavabomb)
* [light](globals.md#light)
* [lockpicking](globals.md#lockpicking)
* [loot](globals.md#loot)
* [lootAll](globals.md#lootall)
* [lute](globals.md#lute)
* [make](globals.md#make)
* [manualTarget](globals.md#manualtarget)
* [mount](globals.md#mount)
* [nbRune](globals.md#nbrune)
* [resetEnemies](globals.md#resetenemies)
* [resetFriends](globals.md#resetfriends)
* [summon](globals.md#summon)
* [taming](globals.md#taming)
* [targetNext](globals.md#targetnext)
* [targetPrevious](globals.md#targetprevious)
* [tracking](globals.md#tracking)
* [unlock](globals.md#unlock)
* [use](globals.md#use)
* [useGGR](globals.md#useggr)
* [useKlamak](globals.md#useklamak)
* [useRR](globals.md#userr)
* [useShrinkKad](globals.md#useshrinkkad)

### Object literals

* [gameObject](globals.md#gameobject)
* [trackingFilter](globals.md#trackingfilter)

## Variables

### responseDelay

• `Const` **responseDelay**: 350 = 350

*Defined in [globals.ts:1](https://github.com/msviha/orionuo/blob/7b19bbe/src/globals.ts#L1)*

## Functions

### Autostart

▸ **Autostart**(): void

*Defined in [scripts.ts:4](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L4)*

Zaskrtnete si v Orion Assistantovi Autostart checkbox

**Returns:** void

___

### addCutWeapon

▸ **addCutWeapon**(): void

*Defined in [scripts.ts:37](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L37)*

Nastavi do Orion assistanta `cutWeapon` List Object (napr. pro script na lootovani, nebo samotne rezani tel)

**`example`** in client `_addCutWeapon`

**`example`** external code `addCutWeapon();`

**Returns:** void

___

### addMount

▸ **addMount**(): void

*Defined in [scripts.ts:46](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L46)*

Nastavi do Orion assistanta `myMount` List Object (pro nasedani na jezditko)

**`example`** in client `_addMount`

**`example`** external code `addMount();`

**Returns:** void

___

### alchemy

▸ **alchemy**(`potionName`: [PotionsEnum](enums/potionsenum.md)): void

*Defined in [scripts.ts:56](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L56)*

Micha pres obyc mortar

**`example`** in client `_alchemy tmr`

**`example`** external code `alchemy('tmr');`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`potionName` | [PotionsEnum](enums/potionsenum.md) | zkratka potionu |

**Returns:** void

___

### bandageSelf

▸ **bandageSelf**(`minimalCountForWarn`: number): void

*Defined in [scripts.ts:68](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L68)*

Da si bandu, pokud dosli tak prehraje zvuk z C:\critical.wav
Poslednich 10 band hlasi nad hracem

**`example`** in client `_bandageSelf`

**`example`** external code `bandageSelf();`

**`example`** external code `bandageSelf(10);`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`minimalCountForWarn` | number | 10 | zobrazi varovani pokud budes mit tento pocet band (a mene) |

**Returns:** void

___

### carveBody

▸ **carveBody**(`carveNearestBodyAutomatically`: boolean): void

*Defined in [scripts.ts:79](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L79)*

Hodi do ruky cutWeapon a pripadne rovnou rizne nejblizsi mrtvolku pokud je povolen parametr

**`example`** in client `_carveBody`

**`example`** external code `carveBody();`

**`example`** external code `carveBody(true);` rizne samo nejblizsi mrtvolku

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`carveNearestBodyAutomatically` | boolean | false | default je false, pokud se da true tak rizne samo nejblizsi pokud je v dosahu |

**Returns:** void

___

### cast

▸ **cast**(`spell`: string, `target?`: [TargetEnum](enums/targetenum.md)): void

*Defined in [scripts.ts:88](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L88)*

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

### castNecroScroll

▸ **castNecroScroll**(`scroll`: [NecroScrollEnum](enums/necroscrollenum.md), `target?`: [TargetEnum](enums/targetenum.md)): void

*Defined in [scripts.ts:97](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L97)*

Kouzli svitek z NecroScrollEnum na pozadovany target, pokud je uveden

**`example`** external code `castNecroScroll("kalnox", "self");`

**`example`** external code `castNecroScroll("vfp", "lastattack");`

#### Parameters:

Name | Type |
------ | ------ |
`scroll` | [NecroScrollEnum](enums/necroscrollenum.md) |
`target?` | [TargetEnum](enums/targetenum.md) |

**Returns:** void

___

### castScroll

▸ **castScroll**(`scroll`: [ScrollEnum](enums/scrollenum.md), `target?`: [TargetEnum](enums/targetenum.md), `backupHeadCast?`: string): void

*Defined in [scripts.ts:106](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L106)*

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

### craftNext

▸ **craftNext**(): void

*Defined in [scripts.ts:114](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L114)*

Zobrazi/prepina nabidku na crafteni

**`example`** external code `craftNext();`

**Returns:** void

___

### craftSelect

▸ **craftSelect**(): void

*Defined in [scripts.ts:122](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L122)*

Vybira z nabidky na crafteni

**`example`** external code `craftSelect();`

**Returns:** void

___

### drink

▸ **drink**(`potionName`: [PotionsEnum](enums/potionsenum.md), `switchWarModeWhenNeeded`: boolean): void

*Defined in [scripts.ts:133](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L133)*

Chlasta lahvicky

**`example`** in client `_drink tmr`

**`example`** external code `drink('tmr');`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`potionName` | [PotionsEnum](enums/potionsenum.md) | - | zkratka potionu |
`switchWarModeWhenNeeded` | boolean | true | date li 'false' pak neprepina war pokud nejde cepovat, tak necepne |

**Returns:** void

___

### enemy

▸ **enemy**(): void

*Defined in [scripts.ts:142](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L142)*

Prida enemy do enemylistu (dobre pouziti s targetNext)

**`example`** in client `_enemy`

**`example`** external code `enemy()`

**Returns:** void

___

### fillPotion

▸ **fillPotion**(`potionName`: [PotionsEnum](enums/potionsenum.md), `switchWarModeWhenNeeded`: boolean): void

*Defined in [scripts.ts:153](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L153)*

Docepne lahvicku z kade

**`example`** in client `_fillPotion tmr`

**`example`** external code `fillPotion('tmr');`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`potionName` | [PotionsEnum](enums/potionsenum.md) | - | zkratka potionu |
`switchWarModeWhenNeeded` | boolean | true | date li 'false' pak neprepina war pokud nejde cepovat, tak necepne |

**Returns:** void

___

### friend

▸ **friend**(): void

*Defined in [scripts.ts:162](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L162)*

Prida frienda do friendlistu (dobre pouziti s targetNext)

**`example`** in client `_friend`

**`example`** external code `friend()`

**Returns:** void

___

### gmMortar

▸ **gmMortar**(`potionName`: [PotionsEnum](enums/potionsenum.md)): void

*Defined in [scripts.ts:172](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L172)*

Micha na gm mortaru

**`example`** in client `_gmMortar tmr`

**`example`** external code `gmMortar('tmr');`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`potionName` | [PotionsEnum](enums/potionsenum.md) | zkratka potionu |

**Returns:** void

___

### harp

▸ **harp**(`target?`: [TargetEnum](enums/targetenum.md)): void

*Defined in [scripts.ts:184](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L184)*

Pouzije harfu

**`example`** in client `_harp`

**`example`** in client `_harp self`

**`example`** external code `harp()`

**`example`** external code `harp('self');`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`target?` | [TargetEnum](enums/targetenum.md) | na koho chces zahrat ? pokud nevyplnis tak hodi kurzor |

**Returns:** void

___

### hideAll

▸ **hideAll**(): void

*Defined in [scripts.ts:205](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L205)*

Prepina mezi dvema stavy - hiduje hrace v okruhu 15ti policek a dalsi volani dava resync/resend. Nevidim na cudlik protoze mi tam nekdo stoji atd.

**`example`** in client `_hideAll`

**`example`** external code `hideAll();`

**Returns:** void

___

### hiding

▸ **hiding**(): void

*Defined in [scripts.ts:214](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L214)*

Hidne hrace

**`example`** [_hiding](../examples/hiding.gif)

**`example`** external code `hiding();`

**Returns:** void

___

### inscription

▸ **inscription**(`circle`: number, `spell`: string, `quantity`: number): void

*Defined in [scripts.ts:225](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L225)*

pise svitky

**`example`** external code `inscription(2, 'Resurrection', 20);`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`circle` | number | - | cislo kruhu kouzel ve kterem se kouzlo nachazi |
`spell` | string | - | nazev kouzla (z nabidky ktera vyskoci kdyz vyberete kruh kouzel) |
`quantity` | number | 0 | pocet svitku k napsani (0 je default a znamena, ze pise dokud nedojde spotrebak) |

**Returns:** void

___

### kill

▸ **kill**(): void

*Defined in [scripts.ts:234](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L234)*

Prejmenuje vsechny summony a posle na lastattack

**`example`** `_kill`

**`example`** external code `kill();`

**Returns:** void

___

### lavaBomb

▸ **lavaBomb**(): void

*Defined in [scripts.ts:243](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L243)*

Cepne a odpali lavabombu - vyhodi target na koho ji chces pouzit

**`example`** in client `_lavaBomb`

**`example`** external code `lavaBomb()`

**Returns:** void

___

### light

▸ **light**(`shouldCast`: boolean): void

*Defined in [scripts.ts:254](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L254)*

Hodi svetlo z kade, pokud kad neni, tak hodi z hlavy (pokud za to nenapisete false)

**`example`** `_light`

**`example`** `_light false`

**`example`** external code `light();`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`shouldCast` | boolean | true | default je true, takze pokud nemas kad tak zakouzli svetlo |

**Returns:** void

___

### lockpicking

▸ **lockpicking**(): void

*Defined in [scripts.ts:264](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L264)*

Trenuje lockpicking pomoci bedynky a klice (rozbaleny lockpicking training kit)

**`example`** in client `_unlock`

**`example`** external code `unlock();`

**Returns:** void

___

### loot

▸ **loot**(`cut`: boolean): void

*Defined in [scripts.ts:279](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L279)*

Lotuje vse (vcetne hracu) v dosahu.
Vyzaduje nastaveni Objects a Find v Orion assistantovi v zalozce Lists
1. nastavit `cutWeapon` na zbran kterou chcete rezat v Objects pripadne zavolat `_addCutWeapon` ve hre
2. nastavit `lootItems` na veci ktere chcete z mrtvolky vybrat v Find

**`example`** in client `_loot`

**`example`** in client `_loot false` - nereze tela

**`example`** external code `loot();`

**`example`** external code `loot(false);`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`cut` | boolean | true | default je true, takze reze tela (krome lidskych - nevyzkouseno) |

**Returns:** void

___

### lootAll

▸ **lootAll**(`delay`: number): void

*Defined in [scripts.ts:292](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L292)*

Zameri target a premisti z nej vse do backpacku

**`example`** `_lootAll`

**`example`** `_lootAll 2000`

**`example`** external code `lootAll();`

**`example`** external code `lootAll(2000);`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`delay` | number | responseDelay | cas mezi presunem dvou itemu |

**Returns:** void

___

### lute

▸ **lute**(`target?`: [TargetEnum](enums/targetenum.md)): void

*Defined in [scripts.ts:196](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L196)*

Pouzije loutnu

**`example`** in client `_lute`

**`example`** in client `_lute self`

**`example`** external code `lute()`

**`example`** external code `lute('self');`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`target?` | [TargetEnum](enums/targetenum.md) | na koho chces zahrat ? pokud nevyplnis tak hodi kurzor |

**Returns:** void

___

### make

▸ **make**(`count`: number, `objectAsString`: string, `setInputs`: boolean): void

*Defined in [scripts.ts:302](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L302)*

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

___

### manualTarget

▸ **manualTarget**(): void

*Defined in [scripts.ts:312](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L312)*

Zobrazi zamerovac pro zamereni cile, ktery se ulozi pod lastattack
Cil je tim padem zbarven a jsou vypsany jeho zivoty

**`example`** in client `_manualTarget`

**`example`** external code `manualTarget()`

**Returns:** void

___

### mount

▸ **mount**(): void

*Defined in [scripts.ts:330](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L330)*

Naseda a seseda z jezditka. Pokud Vam jezditko umre, nebo mate nasetovane nejake ktere neni v dosahu, zobrazi se zamereni jezditka

**`example`** in client `_mount`

**`example`** external code `mount();`

**Returns:** void

___

### nbRune

▸ **nbRune**(): void

*Defined in [scripts.ts:321](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L321)*

Kopne pres NB runu

**`example`** in client `_nbRune`

**`example`** external code `nbRune()`

**Returns:** void

___

### resetEnemies

▸ **resetEnemies**(): void

*Defined in [scripts.ts:339](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L339)*

Resetuje cely enemylistu a ocekava naklikani noveho

**`example`** in client `_resetEnemies`

**`example`** external code `resetEnemies()`

**Returns:** void

___

### resetFriends

▸ **resetFriends**(): void

*Defined in [scripts.ts:348](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L348)*

Resetuje cely friendlist a ocekava naklikani noveho

**`example`** in client `_resetFriends`

**`example`** external code `resetFriends()`

**Returns:** void

___

### summon

▸ **summon**(`creature`: string, `target?`: [TargetEnum](enums/targetenum.md)): void

*Defined in [scripts.ts:357](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L357)*

Kouzli summona (jmeno je treba zadat tak jak je v nabidce summonu) na pozadovany target, pokud je uveden

**`example`** external code `summon("Horse", "self");`

**`example`** external code `summon("Giant Viper");`

#### Parameters:

Name | Type |
------ | ------ |
`creature` | string |
`target?` | [TargetEnum](enums/targetenum.md) |

**Returns:** void

___

### taming

▸ **taming**(): void

*Defined in [scripts.ts:366](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L366)*

Zacilis co chces tamnout a po tamnuti hodi do baglu

**`example`** in client `_taming`

**`example`** external code `taming()`

**Returns:** void

___

### targetNext

▸ **targetNext**(`timeToStorePreviousTargets`: number, `additionalFlags?`: [FlagsEnum](enums/flagsenum.md)[], `notoriety?`: [NotorietyEnum](enums/notorietyenum.md)[]): void

*Defined in [scripts.ts:380](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L380)*

Targeti zive jednotky okolo tebe. Uchovava list targetu po dobu 2,5 vteriny pro pouziti s `targetPrevious`.
Vybrany target ma rovnou status `attackLast` (ale neutocis to na nej, jen mas zaply war) takze je mozne na nej kouzlit

**`example`** external code `targetNext();`

**`example`** external code `targetNext(1000, [FlagsEnum.ignorefriends]);`

**`example`** external code `targetNext(1000, undefined, [NotorietyEnum.orange, NotorietyEnum.red, NotorietyEnum.criminal]);`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`timeToStorePreviousTargets` | number | 2500 | cas pro uchovavani predchozich targetu v pameti |
`additionalFlags?` | [FlagsEnum](enums/flagsenum.md)[] | - | pole flagu pro vyhledavani targetu ktere se spoji s defaultnim polem `['near', 'mobile', 'live', 'ignoreself']` |
`notoriety?` | [NotorietyEnum](enums/notorietyenum.md)[] | - | pole notoriety pro specifikaci targetu |

**Returns:** void

___

### targetPrevious

▸ **targetPrevious**(`timeToStorePreviousTargets`: number, `additionalFlags?`: string[], `notoriety?`: string[]): void

*Defined in [scripts.ts:394](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L394)*

Targeti zive jednotky okolo tebe. Uchovava list targetu po dobu 2,5 vteriny pro pouziti s `targetNext`
Vybrany target ma rovnou status `attackLast` (ale neutocis to na nej, jen mas zaply war) takze je mozne na nej kouzlit

**`example`** external code `targetPrevious();`

**`example`** external code `targetPrevious(1000, [FlagsEnum.ignorefriends]);`

**`example`** external code `targetPrevious(1000, undefined, [NotorietyEnum.orange, NotorietyEnum.red, NotorietyEnum.criminal]);`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`timeToStorePreviousTargets` | number | 2500 | cas pro uchovavani predchozich targetu v pameti |
`additionalFlags?` | string[] | - | pole flagu pro vyhledavani targetu ktere se spoji s defaultnim polem `['near', 'mobile', 'live', 'ignoreself']` |
`notoriety?` | string[] | - | pole notoriety pro specifikaci targetu |

**Returns:** void

___

### tracking

▸ **tracking**(`who`: string): void

*Defined in [scripts.ts:406](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L406)*

Trackuje hrace nebo pozadovanou volbu z menu

**`example`** in client `_tracking` trackuje hrace

**`example`** in client `_tracking Animals` trackuje zvirata

**`example`** external code `tracking()` trackuje hrace

**`example`** external code `tracking('Animals');` trackuje zvirata

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`who` | string | "Players" | volba z menu |

**Returns:** void

___

### unlock

▸ **unlock**(): void

*Defined in [scripts.ts:415](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L415)*

Lockpickuje zamcenou bednu, dokud ji neotevre (nebo nedojdou locky)

**`example`** in client `_unlock`

**`example`** external code `unlock();`

**Returns:** void

___

### use

▸ **use**(`object`: IMyGameObject \| IMyGameObject[], `name`: string, `minimalCountForWarn?`: number): void

*Defined in [scripts.ts:427](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L427)*

Pouzije objekt ktery ma nadefinovany graphic a color a upozorni v pripade nizkeho poctu

**`example`** external code `use(gameObject.ryba.modra, 'modra ryba', 3)`

**`example`** external code `use([gameObject.uncategorized.krvavaBanda1, gameObject.uncategorized.krvavaBanda2], 'krvave bandy', 200)`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`object` | IMyGameObject \| IMyGameObject[] | - | musi mit graphic a color |
`name` | string | "" | pouziva se pro vypisovani poctu abys vedel co ti dochazi |
`minimalCountForWarn?` | number | - | zobrazi varovani pokud budes mit tento pocet band (a mene) |

**Returns:** void

___

### useGGR

▸ **useGGR**(): void

*Defined in [scripts.ts:436](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L436)*

Pouzije Great Gold Ring

**`example`** in client `_useGGR`

**`example`** external code `useGGR()`

**Returns:** void

___

### useKlamak

▸ **useKlamak**(`lvl`: number, `useAim`: boolean, `priorityList?`: string[]): void

*Defined in [scripts.ts:449](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L449)*

Vyhodi klamaka

**`example`** external code `useKlamak(1)` vyhodi klamaka level 1

**`example`** external code `useKlamak(1, true)` zobrazi zamerovatko a pak vyhodi klamaka level 1 na target

**`example`** external code `useKlamak(3, false, ['Bull', 'Cow'])`vyhodi pod vas Bulla, pokud ho nemate, tak Kravu a pokud ani tu nemate tak zkusi vyhodit jiny lvl 3 klamak

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`lvl` | number | - | pozadovany level klamaka |
`useAim` | boolean | false | pokud chcete zamerovat misto kam ho vyhodit |
`priorityList?` | string[] | - | pokud chcete prioritizovat ktere klamaky to ma nejdrive v baglu hledat |

**Returns:** void

___

### useRR

▸ **useRR**(): void

*Defined in [scripts.ts:458](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L458)*

Pouzije Reflex Ring nebo Great Reflex Ring

**`example`** in client `_useRR`

**`example`** external code `useRR()`

**Returns:** void

___

### useShrinkKad

▸ **useShrinkKad**(): void

*Defined in [scripts.ts:467](https://github.com/msviha/orionuo/blob/7b19bbe/src/scripts.ts#L467)*

Pouzije shrink kad

**`example`** in client `_useShrinkKad`

**`example`** external code `useShrinkKad()`

**Returns:** void

## Object literals

### gameObject

▪ `Const` **gameObject**: object

*Defined in [globals.ts:2](https://github.com/msviha/orionuo/blob/7b19bbe/src/globals.ts#L2)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`books` | object | { bookOfDead: { color: string = "0x0455"; graphic: string = "0x0EFA"; bag: { x: number = 132; y: number = 5 }  } ; highMagicSpellBook: { color: string = "0x0021"; graphic: string = "0x0EFA"; bag: { x: number = 142; y: number = 5 }  } ; runeBook: { color: string = "0x08A5"; graphic: string = "0x0FF0"; bag: { x: number = 112; y: number = 5 }  } ; travelBook: { color: string = "0x0482"; graphic: string = "0x0FEF"; bag: { x: number = 122; y: number = 5 }  } ; unholySpellbook: { color: string = "0x0413"; graphic: string = "0x0EFA"; bag: { x: number = 142; y: number = 5 }  }  } |
`crafting` | object | { carpentry: { containersAndParts: { barrelLid: { color: string = "0x0000"; graphic: string = "0x1DB8"; make: { tool: string = "gameObject.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Containers & Cont. parts', 'Barrel Lid'] } ; refill: { crafting: { count: number = 2; item: string = "gameObject.crafting.carpentry.miscellaneous.boards" }[] = [{item: 'gameObject.crafting.carpentry.miscellaneous.boards', count: 2}]; resources: { count: number = 1; item: string = "gameObject.resources.logs" }[] = [{item: 'gameObject.resources.logs', count: 1}] }  }  } ; barrelStaves: { color: string = "0x0000"; graphic: string = "0x1EB1"; make: { tool: string = "gameObject.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Containers & Cont. parts', 'Barrel Staves'] } ; refill: { resources: { count: number = 3; item: string = "gameObject.resources.logs" }[] = [{item: 'gameObject.resources.logs', count: 3}] }  }  } ; formaNaLahve: { color: string = "0x0909"; graphic: string = "0x0E7F"; make: { tool: string = "gameObject.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Containers & Cont. parts', 'Forma na lahve'] } ; refill: { crafting: { count: number = 2; item: string = "gameObject.crafting.carpentry.containersAndParts.barrelLid" }[] = [                                  {item: 'gameObject.crafting.carpentry.containersAndParts.barrelLid', count: 2},                                  {item: 'gameObject.crafting.carpentry.containersAndParts.barrelStaves', count: 2}                              ]; resources: { count: number = 1; item: string = "gameObject.resources.logs" }[] = [{item: 'gameObject.resources.logs', count: 1}] }  }  }  } ; miscellaneous: { boards: { color: string = "0x0000"; graphic: string = "0x1BD7"; make: { outputCount: number = 3; tool: string = "gameObject.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Miscellaneous', 'Boards'] } ; refill: { resources: { count: number = 2; item: string = "gameObject.resources.logs" }[] = [{item: 'gameObject.resources.logs', count: 2}] }  }  } ; krabiceKadi: { color: string = "0x07E0"; graphic: string = "0x185E"; make: { tool: string = "gameObject.tools.saw"; menu: { name: string = "Carpentry"; selections: string[] = ['Miscellaneous', 'Krabice kadi'] } ; refill: { crafting: { count: number = 20; item: string = "gameObject.crafting.tinkering.containers.kadNaPotiony" }[] = [{item: 'gameObject.crafting.tinkering.containers.kadNaPotiony', count: 20}]; resources: { count: number = 2; item: string = "gameObject.resources.logs" }[] = [{item: 'gameObject.resources.logs', count: 2}] }  }  }  }  } ; tinkering: { containers: { animalBox: { color: string = "0x051E"; graphic: string = "0x09A8"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Containers', 'Animal Box'] } ; refill: { crafting: { count: number = 1; item: string = "gameObject.crafting.tinkering.containers.goldenBox" }[] = [                                  {item: 'gameObject.crafting.tinkering.containers.goldenBox', count: 1}                              ]; resources: { count: number = 5; item: string = "gameObject.resources.logs" }[] = [                                  {item: 'gameObject.resources.logs', count: 5},                                  {item: 'gameObject.resources.furs', count: 5}                              ] }  }  } ; bottle: { color: string = "0x0000"; graphic: string = "0x0F0E"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Containers', 'Bottle'] } ; refill: { resources: { count: number = 2; item: string = "gameObject.resources.logs" }[] = [                                  {item: 'gameObject.resources.logs', count: 2},                                  {item: 'gameObject.resources.ore.anyOre', count: 5}                              ] }  }  } ; goldenBox: { color: string = "0x0000"; graphic: string = "0x0E80"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Containers', 'Golden Box (W)'] } ; refill: { resources: { count: number = 5; item: string = "gameObject.resources.logs" }[] = [                                  {item: 'gameObject.resources.logs', count: 5},                                  {item: 'gameObject.resources.ingots.gold', count: 5},                                  {item: 'gameObject.resources.ingots.iron', count: 1}                              ] }  }  } ; kadNaPotiony: { color: string = "0x0000"; graphic: string = "0x1843"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Containers', 'Kad na potiony'] } ; refill: { crafting: { count: number = 1; item: string = "gameObject.crafting.carpentry.containersAndParts.formaNaLahve" }[] = [                                  {item: 'gameObject.crafting.carpentry.containersAndParts.formaNaLahve', count: 1}                              ]; resources: { count: number = 2; item: string = "gameObject.resources.logs" }[] = [                                  {item: 'gameObject.resources.logs', count: 2},                                  {item: 'gameObject.resources.ore.iron', count: 2},                                  {item: 'gameObject.resources.ingots.bronze', count: 1},                                  {item: 'gameObject.resources.ingots.iron', count: 1}                              ] }  }  } ; univerzalAnimalBox: { color: string = "0x0000"; graphic: string = "0x09A8"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Containers', 'Univerzal Animal Box'] } ; refill: { crafting: { count: number = 1; item: string = "gameObject.crafting.tinkering.containers.animalBox" }[] = [                                  {item: 'gameObject.crafting.tinkering.containers.animalBox', count: 1}                              ]; resources: { count: number = 5; item: string = "gameObject.resources.logs" }[] = [                                  {item: 'gameObject.resources.logs', count: 5},                                  {item: 'gameObject.resources.furs', count: 5}                              ] }  }  }  } ; parts: { springs: { color: string = "0x0000"; graphic: string = "0x105D"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Parts', 'Springs'] } ; refill: { resources: { count: number = 1; item: string = "gameObject.resources.ingots.iron" }[] = [{item: 'gameObject.resources.ingots.iron', count: 1}] }  }  }  } ; specialItems: { magicBall: { color: string = "0x0B86"; graphic: string = "0x0E2D"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Special Items', 'Magic Ball (10 charges)'] } ; refill: { crafting: { count: number = 2; item: string = "gameObject.crafting.tinkering.parts.springs" }[] = [                                  {item: 'gameObject.crafting.tinkering.parts.springs', count: 2},                                  {item: 'gameObject.crafting.tinkering.wires.copper', count: 5}                              ]; resources: { count: number = 1; item: string = "gameObject.resources.ingots.gold" }[] = [                                  {item: 'gameObject.resources.ingots.gold', count: 1},                                  {item: 'gameObject.resources.ingots.iron', count: 1},                                  {item: 'gameObject.resources.stones.pieceOfAmber', count: 1},                                  {item: 'gameObject.resources.stones.starSapphire', count: 3}                              ] }  }  }  } ; wires: { black: { color: string = "0x0455"; graphic: string = "0x1876"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Black Rock Wire'] } ; refill: { resources: { count: number = 2; item: string = "gameObject.resources.ingots.black" }[] = [                                  {item: 'gameObject.resources.ingots.black', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'gameObject.resources.ingots.iron', count: 2}                              ] }  }  } ; blood: { color: string = "0x04C2"; graphic: string = "0x1876"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Blood Rock Wire'] } ; refill: { resources: { count: number = 2; item: string = "gameObject.resources.ingots.blood" }[] = [                                  {item: 'gameObject.resources.ingots.blood', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'gameObject.resources.ingots.iron', count: 2}                              ] }  }  } ; copper: { color: string = "0x0000"; graphic: string = "0x1879"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Copper Wire'] } ; refill: { resources: { count: number = 2; item: string = "gameObject.resources.ingots.copper" }[] = [                                  {item: 'gameObject.resources.ingots.copper', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'gameObject.resources.ingots.iron', count: 2}                              ] }  }  } ; mytheril: { color: string = "0x052D"; graphic: string = "0x1876"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Mytheril Wire'] } ; refill: { resources: { count: number = 2; item: string = "gameObject.resources.ingots.mytheril" }[] = [                                  {item: 'gameObject.resources.ingots.mytheril', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'gameObject.resources.ingots.iron', count: 2}                              ] }  }  } ; rose: { color: string = "0x0665"; graphic: string = "0x1876"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Rose Wire'] } ; refill: { resources: { count: number = 2; item: string = "gameObject.resources.ingots.rose" }[] = [                                  {item: 'gameObject.resources.ingots.rose', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'gameObject.resources.ingots.iron', count: 2}                              ] }  }  } ; shadow: { color: string = "0x0770"; graphic: string = "0x1876"; make: { tool: string = "gameObject.tools.tinkerTools"; menu: { name: string = "Tinkering"; selections: string[] = ['Wires', 'Shadow Wire'] } ; refill: { resources: { count: number = 2; item: string = "gameObject.resources.ingots.shadow" }[] = [                                  {item: 'gameObject.resources.ingots.shadow', count: 2}, // 1 is enough but this is safe for the picking                                  {item: 'gameObject.resources.ingots.iron', count: 2}                              ] }  }  }  }  }  } |
`fish` | object | { modra: { color: string = "0x084C"; graphic: string = "0x09CD" }  } |
`klamak` | object | { lvl1: { chicken: { color: string = "0xFFFF"; graphic: string = "0x20D1" } ; giantRat: { color: string = "0xFFFF"; graphic: string = "0x20D0" } ; rabbit: { color: string = "0x090C"; graphic: string = "0x2125" } ; rat: { color: string = "0xFFFF"; graphic: string = "0x2123" }  } ; lvl2: { boar: { color: string = "0xFFFF"; graphic: string = "0x2101" } ; bullFrog: { color: string = "0xFFFF"; graphic: string = "0x2130" } ; cat: { color: string = "0xFFFF"; graphic: string = "0x211B" } ; dog: { color: string = "0xFFFF"; graphic: string = "0x09A8" } ; goat: { color: string = "0xFFFF"; graphic: string = "0x2108" } ; jackRabbit: { color: string = "0x01BB"; graphic: string = "0x2125" } ; squirrel: { color: string = "0xFFFF"; graphic: string = "0x2D97" } ; wolf: { color: string = "0xFFFF"; graphic: string = "0x20EA" }  } ; lvl3: { blackBear: { color: string = "0xFFFF"; graphic: string = "0x2118" } ; brownBear: { color: string = "0xFFFF"; graphic: string = "0x20CF" } ; bull: { color: string = "0xFFFF"; graphic: string = "0x20EF" } ; cow: { color: string = "0xFFFF"; graphic: string = "0x2103" } ; gorilla: { color: string = "0xFFFF"; graphic: string = "0x20F5" } ; hart: { color: string = "0xFFFF"; graphic: string = "0x20D4" } ; hind: { color: string = "0xFFFF"; graphic: string = "0x20D4" } ; sheep: { color: string = "0xFFFF"; graphic: string = "0x20EB" }  } ; lvl4: { cougar: { color: string = "0xFFFF"; graphic: string = "0x2119" } ; eagle: { color: string = "0xFFFF"; graphic: string = "0x211D" } ; panther: { color: string = "0xFFFF"; graphic: string = "0x2119" } ; timberWolf: { color: string = "0xFFFF"; graphic: string = "0x20EA" }  } ; lvl5: { alligator: { color: string = "0xFFFF"; graphic: string = "0x2131" } ; grizzly: { color: string = "0xFFFF"; graphic: string = "0x211E" } ; leopard: { color: string = "0xFFFF"; graphic: string = "0x2119" } ; polar: { color: string = "0xFFFF"; graphic: string = "0x20E1" } ; snake: { color: string = "0xFFFF"; graphic: string = "0x20FC" }  }  } |
`mystics` | object | { ball: { color: string = "0x0B9F"; graphic: string = "0x0E73"; name: string = "Ball" } ; beeds: { color: string = "0x0BB5"; graphic: string = "0x108B"; name: string = "Beeds" } ; crystal: { color: string = "0x0044"; graphic: string = "0x0F5A"; name: string = "Crystal" } ; flower: { color: string = "0x005B"; graphic: string = "0x0DC3"; name: string = "Flower" } ; leaf: { color: string = "0x0B9F"; graphic: string = "0x0DBD"; name: string = "Leaf" } ; mushroom: { color: string = "0x00A3"; graphic: string = "0x0D16"; name: string = "Mushroom" } ; plant: { color: string = "0x0899"; graphic: string = "0x0CB0"; name: string = "Stone" } ; stick: { color: string = "0x0481"; graphic: string = "0x1A9D"; name: string = "Stick" } ; stone: { color: string = "0x0B94"; graphic: string = "0x136C"; name: string = "Stone" }  } |
`necroRegy` | object | { batwings: { graphic: string = "0x0F78"; bag: { x: number = 155; y: number = 180 }  } ; blackmoor: { graphic: string = "0x0F79"; bag: { x: number = 155; y: number = 180 }  } ; bloodspawn: { graphic: string = "0x0F7C"; bag: { x: number = 155; y: number = 180 }  } ; bones: { graphic: string = "0x0F7E"; bag: { x: number = 155; y: number = 180 }  } ; brimstone: { graphic: string = "0x0F7F"; bag: { x: number = 155; y: number = 180 }  } ; daemon\_bones: { graphic: string = "0x0F80"; bag: { x: number = 155; y: number = 180 }  } ; deamon\_blood: { graphic: string = "0x0F7D"; bag: { x: number = 155; y: number = 180 }  } ; dragons\_blood: { graphic: string = "0x0F82"; bag: { x: number = 155; y: number = 180 }  } ; executioners\_cap: { graphic: string = "0x0F83"; bag: { x: number = 155; y: number = 180 }  } ; eyes\_of\_newt: { color: string = "0x0000"; graphic: string = "0x0F87"; bag: { x: number = 155; y: number = 180 }  } ; fertile\_dirt: { graphic: string = "0x0F81"; bag: { x: number = 155; y: number = 180 }  } ; obsidian: { graphic: string = "0x0F89"; bag: { x: number = 155; y: number = 180 }  } ; pumice: { graphic: string = "0x0F8B"; bag: { x: number = 155; y: number = 180 }  } ; serpent\_scales: { graphic: string = "0x0F8E"; bag: { x: number = 155; y: number = 180 }  } ; volcanic\_ash: { graphic: string = "0x0F8F"; bag: { x: number = 155; y: number = 180 }  } ; wyrms\_hearts: { graphic: string = "0x0F91"; bag: { x: number = 155; y: number = 180 }  }  } |
`potions` | object | { gc: { alchemySelection: string = "Greater Cure"; color: string = "0x0000"; gmMortarSelection: string = "Greater Cure (612 Garlics)"; graphic: string = "0x0F07"; bag: { x: number = 80; y: number = 15 } ; kad: { color: string = "0x0842"; graphic: string = "0x1843" }  } ; gh: { alchemySelection: string = "Greater Heal"; color: string = "0x0000"; gmMortarSelection: string = "Greater Heal (714 Ginsengs)"; graphic: string = "0x0F0C"; bag: { x: number = 25; y: number = 15 } ; kad: { color: string = "0x08A7"; graphic: string = "0x1843" }  } ; gs: { alchemySelection: string = "Greater Strength"; color: string = "0x0000"; gmMortarSelection: string = "Greater Strength (612 Mandrake Roots)"; graphic: string = "0x0F09"; bag: { x: number = 25; y: number = 25 } ; kad: { color: string = "0x0481"; graphic: string = "0x1843" }  } ; invis: { alchemySelection: string = "Invisibility"; color: string = "0x0B77"; graphic: string = "0x0F09"; kad: { color: string = "0x0B77"; graphic: string = "0x1843" }  } ; lavabomb: { alchemySelection: string = "Lava Bomb"; color: string = "0x000E"; gmMortarSelection: string = "Lava Bomb (612 Volcanic Ashes)"; graphic: string = "0x0F0D"; kad: { color: string = "0x000E"; graphic: string = "0x1843" }  } ; lc: { color: string = "0x0000"; graphic: string = "0x0F07"; bag: { x: number = 80; y: number = 15 } ; kad: { color: string = "0x0091"; graphic: string = "0x1843" }  } ; mr: { alchemySelection: string = "Mana Refresh"; color: string = "0x0005"; graphic: string = "0x0F09"; kad: { color: string = "0x0005"; graphic: string = "0x1843" }  } ; ns: { alchemySelection: string = "Nightsight"; color: string = "0x0000"; graphic: string = "0x0F06"; kad: { color: string = "0x03C4"; graphic: string = "0x1843" }  } ; shrink: { alchemySelection: string = "Shrink"; color: string = "0x045E"; gmMortarSelection: string = "Shrink (306 Batwings)"; graphic: string = "0x0F09"; bag: { x: number = 80; y: number = 25 } ; kad: { color: string = "0x0724"; graphic: string = "0x1843" }  } ; tmr: { alchemySelection: string = "Total Mana Refresh"; color: string = "0x0003"; gmMortarSelection: string = "Total Mana Refresh (612 Eyes of Newt nebo 306 Blue Eyes of Newt)"; graphic: string = "0x0F09"; bag: { x: number = 25; y: number = 5 } ; kad: { color: string = "0x0003"; graphic: string = "0x1843" }  } ; tr: { alchemySelection: string = "Total Refresh"; color: string = "0x0000"; gmMortarSelection: string = "Total Refresh (510 Black Pearls)"; graphic: string = "0x0F0B"; bag: { x: number = 80; y: number = 5 } ; kad: { color: string = "0x014D"; graphic: string = "0x1843" }  }  } |
`regy` | object | { bm: { graphic: string = "0x0F7B"; bag: { x: number = 50; y: number = 180 }  } ; bp: { graphic: string = "0x0F7A"; bag: { x: number = 61; y: number = 180 }  } ; ga: { graphic: string = "0x0F84"; bag: { x: number = 80; y: number = 180 }  } ; gi: { graphic: string = "0x0F85"; bag: { x: number = 92; y: number = 180 }  } ; mr: { graphic: string = "0x0F86"; bag: { x: number = 20; y: number = 180 }  } ; ns: { graphic: string = "0x0F88"; bag: { x: number = 110; y: number = 180 }  } ; sa: { graphic: string = "0x0F8C"; bag: { x: number = 125; y: number = 180 }  } ; ss: { graphic: string = "0x0F8D"; bag: { x: number = 35; y: number = 180 }  }  } |
`resources` | object | { boards: { color: string = "0x0000"; graphic: string = "0x1BD7" } ; furs: { color: string = "0x0000"; graphic: string = "0x11FA" } ; ingots: { black: { color: string = "0x0455"; graphic: string = "0x1BEF" } ; blood: { color: string = "0x04C2"; graphic: string = "0x1BEF" } ; bronze: { color: string = "0x06D6"; graphic: string = "0x1BEF" } ; copper: { color: string = "0x0000"; graphic: string = "0x1BE3" } ; gold: { color: string = "0x0000"; graphic: string = "0x1BE9" } ; iron: { color: string = "0x0000"; graphic: string = "0x1BEF" } ; mytheril: { color: string = "0x052D"; graphic: string = "0x1BEF" } ; rose: { color: string = "0x0665"; graphic: string = "0x1BEF" } ; shadow: { color: string = "0x0770"; graphic: string = "0x1BEF" }  } ; logs: { color: string = "0x0000"; graphic: string = "0x1BDD" } ; ore: { anyOre: { graphic: string = "0x19B9" } ; iron: { color: string = "0x0000"; graphic: string = "0x19B9" }  } ; stones: { pieceOfAmber: { color: string = "0x0000"; graphic: string = "0x0F25" } ; starSapphire: { color: string = "0x0000"; graphic: string = "0x0F0F" }  }  } |
`rings` | object | { ggr: { color: string = "0x0000"; graphic: string = "0x108A"; bag: { x: number = 59; y: number = 35 }  } ; grr: { color: string = "0x0B21"; graphic: string = "0x108A"; bag: { x: number = 53; y: number = 35 }  } ; grr2: { color: string = "0x0B98"; graphic: string = "0x108A"; bag: { x: number = 56; y: number = 35 }  } ; rr: { color: string = "0x0496"; graphic: string = "0x108A"; bag: { x: number = 50; y: number = 35 }  }  } |
`scrolls` | object | { blank: { color: string = "0x0000"; graphic: string = "0x0E34" } ; necro: { haluze: { color: string = "0x0010"; graphic: string = "0x0E35" } ; kalnox: { color: string = "0x0005"; graphic: string = "0x0E35" } ; vfp: { color: string = "0x0070"; graphic: string = "0x0E35"; minMana: number = 20 }  } ; standard: { bolt: { color: string = "0x0000"; graphic: string = "0x1F56" } ; ef: { color: string = "0x0000"; graphic: string = "0x1F5E" } ; ijs: { color: string = "0x0000"; graphic: string = "0x1F50"; minMana: number = 7; timer: number = 9600 } ; ivm: { color: string = "0x0000"; graphic: string = "0x1F49" } ; kvf: { color: string = "0x0000"; graphic: string = "0x1F5F"; minMana: number = 20; timer: number = 5000 } ; para: { color: string = "0x0000"; graphic: string = "0x1F52"; minMana: number = 7; timer: number = 4000 } ; pog: { color: string = "0x0000"; graphic: string = "0x1F4A"; minMana: number = 5; timer: number = 4000 } ; port: { color: string = "0x0000"; graphic: string = "0x1F42" } ; ress: { color: string = "0x0000"; graphic: string = "0x1F67" } ; wos: { color: string = "0x0000"; graphic: string = "0x1F44" }  }  } |
`taming` | object | { staffs: { taming: { color: string = "0x076B"; graphic: string = "0x13F4" } ; tamingShrink: { color: string = "0x096D"; graphic: string = "0x13F4" } ; training: { color: string = "0x04B9"; graphic: string = "0x13F4" }  }  } |
`tools` | object | { saw: { color: string = "0x0000"; graphic: string = "0x1035" } ; tinkerTools: { color: string = "0x0000"; graphic: string = "0x1EBC" }  } |
`uncategorized` | object | { anyKey: { graphic: string = "0x1012"; bag: { x: number = 160; y: number = 5 }  } ; bandy: { color: string = "0x0000"; graphic: string = "0x0E21"; bag: { x: number = 123; y: number = 20 }  } ; emptyBottles: { color: string = "0x0000"; graphic: string = "0x0F0E" } ; emptyKad: { color: string = "0x0000"; graphic: string = "0x1843" } ; krvavaBanda1: { color: string = "0x0000"; graphic: string = "0x0E22" } ; krvavaBanda2: { color: string = "0x0000"; graphic: string = "0x0E20" } ; lockpicks: { color: string = "0x0000"; graphic: string = "0x14FB" } ; mortar: { color: string = "0x0000"; graphic: string = "0x0E9B"; bag: { x: number = 116; y: number = 24 }  } ; nbDagger: { color: string = "0x0B80"; graphic: string = "0x0F51"; bag: { x: number = 150; y: number = 30 }  } ; nbRuna: { color: string = "0x0B1D"; graphic: string = "0x1F14" } ; salat: { color: string = "0x06AB"; graphic: string = "0x09EC" }  } |

___

### trackingFilter

▪ `Const` **trackingFilter**: object

*Defined in [globals.ts:1130](https://github.com/msviha/orionuo/blob/7b19bbe/src/globals.ts#L1130)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`0x20D9` | string[] | ['Gargoyle'] |
`0x20F9` | string[] | ['Imp'] |
`0x2100` | undefined[] | [] |
`0x2106` | undefined[] | [] |
`0x2107` | undefined[] | [] |
