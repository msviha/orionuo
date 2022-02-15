# CHANGELOG

## 1.7.0

### fixes
- `dress` - zvetseni pauzy pri oblekani na 500ms
- aliasy `nearinjuredalie, nearinjuredalielos, mostinjuredalie, mostinjuredalielos` jiz neleci leopardy a grafiky orlu/phoenixu/talonu
- `taming` - dalsi fix preruseni scriptu pri hidovani
- `alchemy` - fix michani malych manarefu
- `tamingTrain` - odstraneni dvojiho pouziti hole
- `shrinkOne` - pridan reset ignore listu (obcas neshrinkovalo klamaky)
- zakazany timer pro teleport se ukazoval po pohnuti hrace

### enhancements
- `hideAll` - pridan parametr ktery nekombinuje volani steneho hotkeye s resendem (napr. chces zdit a skoci ti nekde summon a chces ho stejnou hotkou hidnout, ale bez parametru ti to hodi resend/resync)
- `taming` - pridan option `handleWarMode` - umoznuje vypnout prepinani warmodu behem tamovani (nefizzovat kouzla/bandy kdyz tamujete)
- `tracking` - pridano automaticke zavirani predchozich menu (pri vicenasobnem pouziti se nebudou menu stackovat)

### features
- nove aliasy `nearinjuredpet, nearinjuredpetlos, mostinjuredpet, mostinjuredpetlos` pro healeni leopardu a skyhawka (prozatim)
- `repair` - opravi veci v konkretnim containeru
- `repairTrade` - opravi veci v aktivnim trade okne
- `repairPlease` - nahaze veci ze sebe do trade okna
- `poisonGuns` - poisonuje verite zbrane v pytliku
- `trackingRadar` - hlasi co je na tracku a pocet

### gameObject added
- repairKit
- hammer
- gp
- poisonKit

## 1.6.2

### fixes
- crash autostartu

## 1.6.1

### fixes
- `resetstats`/`equip` - po resetovani statu nevyskakuje stale targetovani bedny na odlehceni, ale jen kdyz opravdu vazite vice nez unesete

## 1.6.0

### config
* moznost konfigurovat zobrazeni/vypnuti a umisteni timeru
    - klamak
    - drinkPotion
    - gs
    - inviska / dlouha inviska (invisLongTimer)
    - hiding
    - castScroll
    - teleport
- `friendlyTargetType` - pouziva se napr. pro `targetNextMonster` nebo `targetNext` (s pouzitim flagu `ignorefriendlytypes`)
- `renamePacks` - moznost vypnout automaticke prejmenovani packu

### fixes
- `gmMortar` - pauzy a odpojovani od serveru
- `lockpicking` - pauzy a odpojovani od serveru
- `taming` - hidovani u tamingu
- configurace umisteni timeru

### enhancements
- `gmmortar` - michani NS
- `taming` - nahazuje neklak a vraci puvodni krk po tamnuti
- `resetstats`/`equip` - po resetovani statu pokud mate vetsi vahu nez unesete (klasicky nedrzite itemy do STR) se vas to zepta jestli chcete neco polozit a zvednout po equipu (treba ref bednu)

### features
- `vendorBuy` - target na buy u konkretniho vendora
- `vendorBuy` - target na sell u konkretniho vendora
- `blacksmithyTrain` - trenink blacksmithy

### gameObject added
- taming neklak
- hammer

## 1.5.0

### fixes
- `autostealing` - viper, spider - color fix (ignorelist)
- `useKpz` - fix pohnuti aktivni kpzkou
- `klamak` - oprava textu u timeru
- `bandageself` - oprava nevyuzivaneho parametru failedMessage (nyni lze vypnout zobrazeni hlasky failed)
- `taming` - oprava dvojiho hidnuti
- `lockpicking` - fix pauzy (odpojovani od serveru)
- `gmmortar` - fix pauzy (odpojovani od serveru)
- `cartography` - fix hledani jedne hlasky na ktere skoncil script

### enhancements
- timery na svitky - pridany timery na nektere dalsi svitky (res, teleport, ivm) + pridan vypocet timeru podle magery + pro teleport scroll zobrazuje timer i podle toho jestli se hrac pohne (by Nait)
- `inscription` - pridan parametr pro moznost piti malych mana refu
- `medikHiding` - pridan parametr pro moznost rehidnuti
- `shrinkAll` - pridan parametr autotake (bere skyhawka a packy po shrinku ze zeme)
- `statusAll` - vylepsene srovnavani - po presouvani zalozek se snazi zarovnat presunute zalozky a otevrit nove
- `gmmortar` - automaticky hleda gm mortar na zemi

### features
- `transparency` - prepinaci funkce na circle of transparency (pripadne s parametrem prepina transparency na vsech statikach)

### experimental
- `hoverCheck` - script ktery checkuje zda mate kurzor nad nejakou custom zalozkou a podbarvi ve hre character (spoustite samostatne jen jednou, neotestovana performance/narocnost)

### gameObject added
- vampMystic
- teleporter
- books based on characters
- walrus
- gmMortar

## 1.4.1

### fixes
- `tbGump` - uprava paternu (systemova hlaska podobne jako You see: se neda zachytit) pro update skore

## 1.4.0

### fixes
- `turboRess` - obcas nereslo ducha krvavymi bandami
- `necroMystik` - msg se nebude odesilat do hry pokud je hrac v hidu
- `config` - defaulty (bez includu configu) se narovnali na stejne hodnoty jako config co je includovany

### enhancements
- `hiding` - nyni umoznuje rehidnout (v minule verzi neumoznoval) - nastaveni se da zmenit a to tak ze rehid jde zakazat, nebo povolit jen dvojklikem hotkeye viz. `hiding(true, true)`

### features
- `cartography` - trenink cartografky
- `tbGump` - gump pro TBcka 

## 1.3.1

- `mobmaster-rename` - oprava nevalidniho jmena, odstraneny cisla
- `useKlamak` - zmena navratoveho typu z void na boolean, lze v hoteky retezit vice zasebou a vyhodit tak dle potreby na jednu hotky jakykoliv level. 
- `addEnemy` - oprava, interne se pouzivalo addFriend

## 1.3.0

### fixes
- `wos` - vyzadovalo 2x target pro casteni ze svitku a ukazovalo spatne timer

### enhancements
- `light` - pokud jste v hidu, tak nekouzli svetlo z hlavy
- `hiding` - nehiduje znovu, pokud uz jste v hidu
- `inscription` - pridana meditace do drink timeru
- `useKlamak` & `mount` - pri odshrinknuti peta zobrazuje timer - s moznosti nastaveni umisteni a vypnuti upozorneni KLAMAK READY skrze config

### features
- `autoAmmoRefill` - script co vam automaticky doplnuje strelivo
- `autoStealing` - script co vam automaticky doplnuje strelivo
- `closeStandardStatusBars` - zavre standardni statusbary (defaultne jen ty co jsou neaktivni)
- `medikHiding` - hidovani medika s lucernou
- `statusAll` - otevre usporadane custom status bary viditelnych jednotek v okoli
- `stealing` - okradani monster
- `tailoringTrain` - prvni verze treninku tailoringu

## 1.2.4

### fixes
- `ef` - vyzadovalo pro kouzleni 2x target
- `wos` - vyzadovalo pro kouzleni 2x target
- `gameObject`
    - metalKiteShield graphic
    - craftBandana
    - kocici objekty
- cerveny grizzly - automaticke prejmenovani
- `mobKillAll` - crash pri chybejicim targetu

### enhancements
- `equip` pokud je po oprave stats hrac pretizen, tak nebude equipovat (hazet veci pod sebe)

### features
- `vampRakevLow` - Sila odpocinku (-1 nabiti)
- `vampRakevMedium` - Sila spanku (-2 nabiti)
- `vampRakevHigh` - Sila hlubokeho spanku (-3 nabiti)
- `equipSlotWeapon` - Nahazuje zvolenou zbran, uklada ji do prislusneho "slotu" pres kod, pokud existuje tento serial bere se on, jinak pres my object hleda typ/barvu, pripadne vyhodi tercik dle nastaveni options
- `switchShield` - Prepina stity ktere mate u sebe, pri vychozim nastaveni jen v zakladnim batuzku. Vybrany stit je ulozen od globalni promene __LastShield, kterou pouzivaji switchWeapon a equipSlotWeapon
- `switchWeapon` - Prepina zbrane ktere mate u sebe, ve vychozim nastaveni jen v zakladnim batuzku. Vybrana zbran je ulozena do globalni promene __LastWeapon.
- `efMount` - kouzli EF na vlastni jezditko
        
## 1.2.2

### enhancements
- `custStatusBars` automaticke mizeni zalozek neexistujicich objektu, ktere nejsou ve friend nebo enemy listu. Pridani zvyrazneni pro objekt figurujici jako 'lastattack'. Moznost nastaveni opacity. viz. nize config.

### config
- `statusBar.autoCloseTimer` - cas v ms za ktery bude zalozka odstranena, pokud objekt neexistuje. Vychozi hodnota 10000ms (10s). Vypnuti = -1 (chci aby vsechny zalozky zustavali)
- `statusBar.selectedColor` - barva ohraniceni pro zalokzku ktera je aktualne v 'lastattack'. Barva je uvadena v argb hexa hodnote napr. #ff8a2be2. Prvni dvojcilsi uvadi alpha hodnotu tj. prusvitnost. Staci si tedy najit libovolnout barvu ktera se pouziva pro html #dd00ff a rozsirit ji o alfa slozku #ffdd00ff. [barvy prikad](https://www.w3schools.com/colors/colors_names.asp), [barvy converter](https://www.w3schools.com/colors/colors_converter.asp)
- `opacity` - nastaveni hodnoty pruhlednosti v %, cele cislo od 0-100. Aplikuje se na vse krome barvu ohraniceni, healbar a pismo. Vychozi = 
        autoCloseTimer: 10000,
        selectedColor: '#ffFF4500',
        opacity: 100

## 1.2.1

### fix
- `targeting` - opraveno aby novy trageting, pouzity u `cast` umel pouzivat i vlastni aliasy v object listu napr. 'mujNejdulezitejsiMag' (viz. orion assist)  nebo primy serial napr. Player.Serial()  
- `_addLootBag` - nebyl public a neslo ho primo volat, uz by mel byt dostupny pres _addLootBag neb external code addLootBag();
- `castScroll`, `summon`, `bandageTarget`, `attackTarget` plnohodnotna podpora noveho target systemu (hover atd.), vcetne zadavani pres pole objektu alias [ { alias: 'hover' }, { alias: 'mostinjuredalie', maxDistance: 5 } ]



## 1.2.0

### features
- `hover` pridan target alias 'hover' fungujici nad custGump zalozkamy viz. [dokumentace](https://github.com/msviha/orionuo/blob/master/docs/enums/targetenum.md)
- `_mix` {potionName}, ktorý umieša jeden daný potion.. napr _mix tr alebo _mix lc používam na necrovi bežne keď sa niekde šmudrchám na sólo
- `_addLootBag` na nastavenie loot pytlika
- `_moveregs` - Presun regov z jedneho kontajnera do druheho

### enhancements
- `nove zalozky` redesing custGump zalozek. Zmenseni, preusporadni layoutu prvku, oprava pretekani jmena. 
- `cast` nove podporuje rosirene aliasy targetovani 'hover|mostinjuredalie' atd. vice viz. [dokumentace](https://github.com/msviha/orionuo/blob/master/docs/globals.md#cast)
- `loot` presun lootu do lootbagu na základe snapshotov batohu, už by nemal rezať mrtvoly hráčov.. mrtvolu reže len v prípade, že sa v nej nenachádza oranžový pytlík s lootom. Loot zo zeme (elementi, humani po kuchnutí, ...), v prípade, že niečo lootnete (okrem regov, gp, ...), tak to nad hlavou vypíše a nemusíte to hľadať v system message
-  `_alchemy {potionName}` odteraz sa bude pýtať, odkiaľ má brať regy a sám si zásobuje aby som u seba nemusel mať 10k regov napr.

### deprecated
- `castSpell` - bude v dalsich verzich zruseno, pokud nekdo vyuzival prepiste na 'cast' ktery nove podporuje rozsirene aliasy targetovani.

## 1.1.2

### features
- `novy alias targetu 'lasttargetmobile'` viz popis enum TargetEx
- `mobKillAll` - stejne jako mobKill ale vola vsechny pety najednou

### fixes
- `mobKill` spatne razeni petu, vynechal v rade nektere jmena. lasttarget bral i nezive objekty.
- `highlightEnemy` oprava pri zapnuti highlightEnemySilent chybela prava zavorka za maxhits.

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
