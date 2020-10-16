# CHANGELOG

## 0.0.4
### breaking changes
- `main.ts` is sliced to several files.
- main `o` object has been renamed to `gameObject`
### features
- added `mysticCounter` function to `Common` package
- added `gmMortar` function
- `scripts.ts` has been created for the shortcuts to `Scripts` namespace
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
