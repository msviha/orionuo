# CHANGELOG

## 0.1.2
### features
- `resetWeapons` nastavi zbrane a stit ( nasledne vyuziti u funkci nextWeapon a previousWeapon )
- `nextWeapon` prepne na dalsi zbran
- `previousWeapon` prepne na dalsi zbran

### enhancements
- `lavaBomb` funguje i bez kade, pokud mate ceple lahvicky s lavabombama
- `ScrollEnum` obsahuje `ress` a `recall`

## 0.1.1 - hotfix
### fixes
- `make` spatny soucet celkovych vyrobku (preklep)

## 0.1.0
### features
- `taming` pridan parametr, aby byla moznost automaticky potamovat vse okolo sebe

### enhancements
- `poisonTrain` poisnuje i humany (vse cervene a sedive), upraveno jednorazove volani - jiz se nevola pred prichodem k monstru ale az u nej
- `PortBookOptionsEnum` obsahuje hodnotu `nabiti` takze je mozne jiz mozne scriptem nabijet `travelBook` nebo `cestovniKniha`
- pridana kontrola ze netargetis sebe k nekolika funkcim

### fixes
- `make` ucrafteny item uz presouva do zvoleneho kontejneru
- `lootAll` pri zamereni sebe uz neprehazuje veci v baglu (neseseda z jezditka)

## 0.0.9
### features
- `drink('gs')` zobrazuje timer a informuje o konci GS
- `equip` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#equip)
- `saveEquip` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#saveequip)
- `resetStats` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#resetstats)
- `cestovniKniha` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#cestovnikniha)
- `tamingTrain` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#tamingTrain)
- `travelBook` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#travelbook)

### enhancements
- `TargetEnum` rozsiren o `laststatus` - odstraneno podminene pouzivani TargetEnum z nekterych funkci (napr. `castScroll`) takze je mozne kouzlit klidne na ten `laststatus` nebo primo nejaky serial nebo jiny ulozeny alias
- zobrazeni verze po pripojeni do hry
- ulozeni equipu po pripojeni do hry
- vliv halucinaci nyni neprekazi bandeni, zrani band, salatu, kouzleni ze svitku (i necro), chlastani a cepovani napoju
- `drink` presunuti timeru (vlevo nahore), dale je mozne vypnout timery pomoci parametru funkce
- `drink` presunuti timeru (vlevo nahore), dale je mozne vypnout timery pomoci parametru funkce
- `targetNext` a `targetPrevious` si defaultne drzi targety v pameti jen 1,5sec (puvodne 2,5sec)

### fixes
- pridan bird do `gameObject.klamak.lvl1`
- `drink('gb')` pridan Greater Blood do `PotionsEnum` takze je mozne chlastat GB
- `bandageSelf` opraveno pouziti s halucinacemi
- `drink` pridana pauza aby se nestavalo ze se nezobrazi timer
- `hiding` upraven beh a zobrazeni hlasek pri interuption od monstra / opakovanem volani
- `use` opraveno pouziti s halucinacemi (bude fungovat jen na objekty ktere pro to maji zatim podporu, pokud budete potrebovat nejaky pridat, tak mne kontaktujte)

## 0.0.8
### features
- pridana `cleanObjectInBag` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#cleanObjectInBag)
- pridana `drum` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#drum)
- pridana `poisonTrain` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#poisonTrain)
- pridana `webDestroyer` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#webDestroyer)

- funkce pro krafteni ktere je nutne pouzivat spolu (na dvou klavesach)
    - pridana `craftNext` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#craftNext)
    - pridana `craftSelect` [funkce](https://github.com/msviha/orionuo/blob/master/docs/globals.md#craftSelect)

### enhancements
- `gameObject` obsahuje nyni opet o trochu vice itemu a vyrobku (dekuji hraci Divine za prispevek do crafting objektu)

### fixes
- `nbRune` opraven error ve scriptu

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
