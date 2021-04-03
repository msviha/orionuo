# CHANGELOG

## 1.1.1

### fixes
- `gameObject.medik.kpz` neexistoval nedavno byl omylem odstranen, nefungovalo KPZ 
- `config.js` - oprava z GetVar na AddVar

## 1.1.0

### features
- `auto` automaticke prejmenovani sumu
- `mobKill` postupne posilani prikazu kill zasebou na zvoleny target. Upravena verze, jiz lze zadat vlastni target jako vstupni parametr a vypnout si ukladani. napr mobKill('lastattack', false); - je asi nebeznejsi jak hraci tento prikaz pouzivaji summy vzdy utoci na aktualni vas lasttattack
- `mobGo` prime volani posledniho laststatus klamaka prikazem go
- `mobCome` volani prikazu all come, pri pouzivani mobKill s ukladanim targetu nutne, protoze provadi zaroven reset ulozeneho targetu
- `mobStop` volani prikazu all stop, pri pouzivani mobKill s ukladanim targetu nutne, protoze provadi zaroven reset ulozeneho targetu
- `shrinkOne` shrinkovani jednoho klamaka, primarne bere nejvic zraneneho. Bere ze zeme Leopardy, havky atd. Bere je i bez shrinknuti, tj. 2 in 1
- `attackTarget` klasicky attack s vyuzitim rozsirenych aliasu targetovani
- `bandageTarget` badage s vyuzitim rozsirenych aliasu targetovani, idealni na healeni petu. 1x spusteni = 1x banda. Ukazuje timer bandaze.
- `castSpell` standardni cast kouzla s vyuzitim rosirenych aliasu targetovani
- `drinkFill` jako drink jen doplnuje lahvicky kdyz nemuzete pit, vychozi omezeni je do min 2 prazdnych
- `drink + drinkFill` nova pretizeni a timery na invis a invis logn (5min30s - destro, srnka). Timery se pridavaji za sebe (postupne vas odhidovavaji) 
- `nove aliasy targetu` viz popis enum TargetEx

### fixes
- `shrinkOne` opraveno zvedani nongenu na klamaky (hnedej ctverecek), zpusobovalo ze prestalio fungovat vyhazovani. 
- `gameObject.klamak.lvl2.dog` chybna grafika. 

### gameObject 
- `weapons.fencing` zbrane fenc
- `weapons.swordsmanship` zbrane sword
- `weapons.macefighting` zbrane mace
- `weapons.arcehry` zbrane archery
- `wapons.shields` stity

### config
- `autoHandlers.autoRename.enabled` - true/false - zapne automaticke prejmenovani, vychozi false
- `autoHandlers.autoRename.renameMounts` - true/false - prejmenovani jezditek, vychozi false
- `autoHandlers.printDamageDiffOnly` - vypisuje jen zraneni a ne hodnotu hits/maxHits 

- `mobMaster.sayColor` - vychozi barva pro prikazy mobkill, mobgo, mobstop, mobcome
- `mobMaster.renameNameType` -  zatim nefunkcni, planuji dodelat podporu i pro jmena ze seznamu jako to bylo dosud v mleekove prejmenovani

- `targeting.highlightEnemySilent` - targetNext - trosku konzervativnejsi vypis pri zamereni, nevypisuje nad hrace a nevypisuje jmeno, jako na fene jen hits/maxHits
- `hiding.showInnerMessages` - nezobrazuje hlasky uspesneho/neuspesneho hidnuti, hodi se pokud vyuzivate textreplace.


## 1.0.0

### breaking changes
- `kill` prikaz je odstraneny z baliku, dale je mozne pouzivat jen `killAll` nebo `killTarget` pripadne pockat az Caleb doladi sve killovani
- `scripts.js` soubor byl prejmenovan na `index.js` a bude upraven navod/prvni-kroky

### features
- `wos` kouzli wall of stone na ktere se zobrazuje timer
- `ef` kouzli energy field na ktere se zobrazuje timer
- `mysticCounter` koukne na vsechny recepty a mystiky co mate u sebe a spocita kolik je treba doplnit mystiku
- `refillManager` pro rychle doplnovani spotrebaku (napriklad do pvp) - jedna se o samostatny script ktery je zavisly na techto scriptech a bude ho potreba stahnout samostatne a includnout pod stavajici scripty (navod na discordu #refill-manager)

### enhancements
- crafting objekt obsahuje nejake dalsi vyrobky jako sphery, washBasin, woodenBox . . .

### fixes
- `targetNext` a `targetPrevious` propaguje se option `targetIndicationEnum` kde je defaultne nyni `none` (coz je bez kosticek nad targetem)

## 0.1.8

Novy scripter co prispiva featurkama - **Kandown** - diky moc !

### features
- `KPZPull` Medic - Pouziti KPZ - pritahne cil k sobe
- `KPZJump` Medic - Pouziti KPZ - pritahne sebe na cil
- `KPZHpSwitch` Medic - Pouziti KPZ - prohozeni hp s cilem
- `turboRessFull` Ozivi ducha v okruhu 1 policka do plnych hp (krvavou bandou - Medic)
- `poisonLastAttack` Poisne trenink kitem `lastattack` target
- `lumber` Obycejny lumber script co si chodi po lese, tezi jen magicke drevo a snazi se vyhnout enemy
- `bishopToggle` Prepina mezi bishopkou a druhou helmou
- `bowcraftTrain` Trenink Bowcraft

### fixes
- `turboRess` neresoval, ted uz bude :-)


## 0.1.7 (zapomenuta featurka)

### features
- `openContainer` otevira bedny/pytliky (hlavne pomaha pokud mas vic klicu od bezpecnych truhel)


## 0.1.6

Byla pridana moznost configurace nekterych scriptu globalnim configem. Jako napriklad moznost zvolit si jak rychlej chcete update hlavniho loopu (zajistuje napriklad update dmg a statusBaru), nebo moznost konfigurace zobrazeni timeru pro piti/hiding jak stylu tak pozic. 

**Priklad pouziti bude na discordu v `prvni-kroky`**

### features
- `necroMystic` pouziti mystiku pro Necromancera
- `mm` massmove ktery ignoruje barvu
- `mmc` massmove ktery neignoruje barvu
- `turboRess` ressuje bandou

### enhancements
- `statusBar` pokus o update celeho gumpu kdyz se meni HP (uvidime, jak to bude fungovat)
- `gameObject.crafting` pridan vlasec, ironString, magicKey do vyroby,
- `alchemy` lesserPoison (`lp`) a deadlyPoison (`dp`)
- `gmMortar` deadlyPoison (`dp`)
- `useKlamak` pridan parametr ignoreSerials, pro kocky aby si mohli ignorovat ty NB kockoveci v baglu
- `targetNext` je mozne pridat flag `FlagsEnum.ignorefriendlytypes` kterym budete ignorovat bezne modely zpratelenych summonu (je potreba dodelat vice je tam jen zaklad - posilejte info co pridat)
- `ScrollEnum.heal` pridan `heal` do svitku pro pouziti v `castScroll`

### fixes
- `alchemy` world save stability
- `statusBar` update plus znamenka kdyz ma vic/min HP jak max
- `statusBar` po uzavreni se neotevre sam znovu
- `healPets` po shrinknuti peta neskonci errorem
- `drinkPotion` vylepsena stabilita a oprava u zobrazeni timeru pokud se pouzije drive nez je mozne pit
- `carveBody` oprava rezani s mystikem ktery mate v ruce
- `bandageSelf` uprava v mazani journalu (narusovalo chod jinych scriptu)


## 0.1.5
### features
- `healPets` leci vlastni pety v dosahu - funguje jako prepinac, pri opakovanem spusteni ukonci leceni
- `userAutostart` v pripade ze ve scriptech budete potrebovat bezet nejaky vlastni autostart tak ho prosim pojmenujte takto. Muj `Autostart` spusti (jednou) tuto funkci `userAutostart`. Muzete si tak osetrit vlastnimi scripty udalosti ktere chcete resit behem hry, aniz by jste prepisovali muj autostart, nebo ten vas pousteli pri kazdem startu rucne
- `terminateAll` zrusi vsechny bezici scripty (vyjma `Autostart` a `userAutostart`) 

### enhancements
- `manualTarget` pridany optiony jako u `targetNext` (1.4.0)
- `drink` zobrazi timer nad hracem pokud ho pouzijete drive nez je mozne
- `mount` automaticky odshrinkne prvni jezditko z baglu (ktere jde odshrinknout), nasetuje si ho a naskoci na nej

### fixes
- `killAll` par oprav, pokud jste daleko od petu (13+), aby se je to nesnazilo ovladat (ovladani nasledne bugovalo)
- `poisonTrain` pridan flag ignoreself (od nejake verze to bez nej zaclo blbnout)
- `hiding` nekolik vylepseni k celkovemu lepsimu chovani 
- `taming` upraveno sbirani tamnutych zviratek a chovani s optionem hiding
- `make` opraveno pocitani a presouvani, pokud je vyrabeno neco co ma vetsi output jak 1 (napriklad lockpicky po 50ks)
- `unlock` / `lockpicking` pridana pauza, aby nelagoval server
- `taming` ukonci se pokud nejsou shrinky

### documentation
- priklad optionu pro targetovani (`targetNext`, `targetPrevious` a `manualTarget`)

### gameObject.crafting 
- `tinkering.tools.lockpickX50` pridana vyroba lockpicku po 50ti kusech

## 0.1.4
### features
- `killAll` nova verze ktera by mela nahradit predchozi `kill`
- `killTarget` postupne volani killu prez vsechny summy s vyhozenim targetu
- `ocaruj` script pro magic minera na ocarovavani lootu v monstrech a pripadne lootovani (viz. `loot` script nastaveni)
- `rozbij` script pro magic minera na rozbijeni ingu na dusty
- `statusbar` prvni verze zalozek s hpckama

### enhancements
- `targetNext` nove optiony viz. dokumentace (pozice statusbaru, vypinani statusbaru, vypnuti HP indikace)
- `bandageSelf` zobrazuje hlasku bandage failed pokud se banda nepodari
- `fillPotion` cepuje i ze zeme, pokud nemate kad v baglu
- `gameObject` pridano par veci (hodf, poison zbrane, petarda, vyroba lod)
- `taming` nove optiony viz. dokumentace (hidovani a chozeni)

### fixes
- worldsave hlasky upraveny, odstraneno pausovani scriptu
- `gmMortar` fixnuto michani
- `make` opraveno vytuhnuti scriptu pri presunu 1 itemu z tezke hromady

## 0.1.3
### features
- hlasi worldsave a konec worldsave v autostartu - pausuje a resumuje bezici scripty behem WS (mohlo by pomoct pokud nekde neni osetreny WS)
- `fishTrain` hloupe chytani ryb a chozeni mezi x/y waypointama
- `attackLast` attackuje attacklast a ne lasttarget jako je to pomoci nativniho client makra

### fixes
- `targetNext` a `targetPrevious` vytahuje statusbary kousek doprava aby byly videt drink timery

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
- added `tracking.ts` [function](https://github.com/msviha/orionuo/blob/master/docs/globals.md#tracking)
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
