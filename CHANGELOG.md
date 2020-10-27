# CHANGELOG

## 0.0.7
### features
- pridana `friend` [funkce]
- pridana `enemy` [funkce]
- pridana `resetFriends` [funkce]
- pridana `resetEmemies` [funkce]

### enhancements
- `use` nyni podporuje pole hernich objektu `IMyGameObject|IMyGameObject[]` - duvodem jsou napriklad odlisne grafiky pro krvave bandy, takze jejich pouziti je nyni mozne napriklad takto: `use([gameObject.uncategorized.krvavaBanda1, gameObject.uncategorized.krvavaBanda2], 'krvave bandy', 200)`
- `targetNext` a `targetPrevious` prijimaji pole `FlagEnum` a pole `NotorietyEnum` pro lepsi filtrovani targetu viz  [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#targetNext)
### fixes
- pridan timer na para svitek. Opraven blokujici timer u svitku, tak aby neblokoval pouziti svitku (timery jsou nyni jen informativni)
- `carveBody` nyni dokonci rezani tela, pokud je volan poprve a setuje se `cutWeapon`

## 0.0.6
### features
- added `lavaBomb` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#lavaBomb)
- added `taming` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#taming)
- added `useShrinkKad` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#useShrinkKad)

## 0.0.5
### features
- added `alchemy` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#alchemy)
- added `bandageSelf` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#bandageSelf)
- added `carveBody` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#carveBody)
- added `fillPotion` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#fillPotion)
- added `harp` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#harp)
- added `lute` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#lute)
- added `manualTarget` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#manualTarget)
- added `nbRune` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#nbRune)
- added `tracking` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#tracking)
- added `use` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#use)
- added `useGGR` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#useGGR)
- added `useKlamak` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#useKlamak)
- added `useRR` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#useRR)

## 0.0.4
### breaking changes
- `main.ts` is sliced to several files.
- main `o` object has been renamed to `gameObject`
### features
- `scripts.ts` has been created for the shortcuts to `Scripts` namespace
- added `mysticCounter` function to `Common` package
- added `gmMortar` function
- added `hideAll` function
- `kill` now renames summons just once
### fixes
- fixed `kill` with new version of Orion
### documentation
- added md documentation 

## 0.0.3
### features
- added `mysticCounter` function to `Common` package
### enhancements
- fixed some issues with `Crafting.make` 

## 0.0.2
### features
- added `Targeting` package with `targetNext` function
- added 'Autostart' function which updates the hp on player and attacklast
### enhancements
- few new crafting stuffs are defined `krabiceKadi`, `univerzalAnimalBox`, `magicBall` etc.
- fixed some issues with `Crafting.make` 

## 0.0.1
### info
- first changelog (does not contain all changes from the current and previous releases)
### features
- added `Crafting` package with `make` function and few items with definitions to make
    - try `Scripts.Crafting.make(o.crafting.tinkering.magicBall, 2);`
- added `Lockpicking` package
- added server lag check for the `lootCorpseId`
