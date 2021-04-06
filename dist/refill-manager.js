var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function refillManager(stuff, containerPathsToSearch, clean) {
    if (clean === void 0) { clean = true; }
    Refill.manager(stuff, containerPathsToSearch, clean);
}
var Refill = (function () {
    function Refill() {
    }
    Refill.manager = function (stuff, containerPathsToSearch, clean) {
        if (clean === void 0) { clean = true; }
        var canTakeFromBank = Scripts.Common.openBank();
        for (var _i = 0, stuff_1 = stuff; _i < stuff_1.length; _i++) {
            var i = stuff_1[_i];
            Refill.universalRefill(i.item, i.total, canTakeFromBank, containerPathsToSearch);
            clean && Scripts.Clean.cleanObjectInBag(Scripts.Utils.parseObject(i.item));
        }
        Scripts.Utils.playerPrint("vazis: " + Player.Weight() + "/" + Player.MaxWeight());
    };
    Refill.universalRefill = function (gameObjectAsString, total, canTakeFromBank, containerPathsToSearch) {
        if (canTakeFromBank === void 0) { canTakeFromBank = false; }
        var item = Scripts.Utils.parseObject(gameObjectAsString);
        if (Scripts.Utils.countObjectInContainer(item) === total) {
            return;
        }
        var name = gameObjectAsString.split('.')[gameObjectAsString.split('.').length - 1];
        var allowedDistance = 5;
        var itemToFind = isIPotion(item) ? item.kad : item;
        if (!containerPathsToSearch) {
            containerPathsToSearch = [];
        }
        else if (isStringArray(containerPathsToSearch)) {
            containerPathsToSearch = [__spreadArrays(containerPathsToSearch)];
        }
        var containerPaths = containerPathsToSearch;
        var itemSerial;
        var lastContainerSerial;
        var needToTakeToBackpack = false;
        if (containerPaths.length) {
            for (var _i = 0, containerPaths_1 = containerPaths; _i < containerPaths_1.length; _i++) {
                var path = containerPaths_1[_i];
                if (!path.length) {
                    return;
                }
                var firstContainer = Orion.FindObject(path[0]);
                if (!firstContainer) {
                    continue;
                }
                if (firstContainer.Container() === Player.BankSerial()) {
                    if (!canTakeFromBank) {
                        continue;
                    }
                }
                else {
                    Orion.WalkTo(firstContainer.X(), firstContainer.Y(), firstContainer.Z(), 1);
                    isIPotion(item) && (needToTakeToBackpack = true);
                }
                for (var _a = 0, path_1 = path; _a < path_1.length; _a++) {
                    var container = path_1[_a];
                    if (!Orion.GumpExists('container', container)) {
                        Orion.OpenContainer(container);
                        Orion.Wait(responseDelay);
                    }
                }
                lastContainerSerial = path[path.length - 1];
                var items = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', lastContainerSerial, 'item', undefined, undefined, false);
                if (items.length) {
                    itemSerial = items[0];
                }
                if (itemSerial) {
                    break;
                }
            }
        }
        if (!itemSerial) {
            needToTakeToBackpack = false;
            var items = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', 'ground', 'item', allowedDistance);
            if (items.length) {
                itemSerial = items[0];
                lastContainerSerial = itemSerial;
            }
            else if (canTakeFromBank) {
                lastContainerSerial = Player.BankSerial();
                var items_1 = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', Player.BankSerial(), 'item', undefined, undefined, false);
                items_1.length && (itemSerial = items_1[0]);
            }
        }
        if (itemSerial) {
            if (isIPotion(item)) {
                var eb = gameObject.uncategorized.emptyBottles;
                var emptyBottleSerials = Orion.FindType(eb.graphic, eb.color, lastContainerSerial === itemSerial ? 'ground' : lastContainerSerial, 'near|item', 3);
                var emptyBottleSerial = emptyBottleSerials.length ? emptyBottleSerials[0] : undefined;
                Refill.refillPotions(name, total, itemSerial, needToTakeToBackpack, emptyBottleSerial);
            }
            else {
                Scripts.Utils.refill(item, lastContainerSerial, total, undefined, undefined, undefined, lastContainerSerial === itemSerial);
            }
        }
        else {
            Scripts.Utils.playerPrint("nenalezen item \"" + name + "\"", ColorEnum.red);
        }
    };
    Refill.refillPotions = function (potionName, total, kadSerial, needToTakeKadToBackpack, emptyBottleSerial) {
        if (needToTakeKadToBackpack === void 0) { needToTakeKadToBackpack = false; }
        var kad = Orion.FindObject(kadSerial);
        var kadPosition = { x: kad.X(), y: kad.Y() };
        var kadContainer = kad.Container();
        var potion = gameObject.potions[potionName];
        var refillCount = total - Scripts.Utils.countObjectInContainer(potion);
        if (refillCount === 0) {
            return;
        }
        if (needToTakeKadToBackpack) {
            Orion.MoveItem(kadSerial, 0, 'backpack');
            Orion.Wait(responseDelay);
        }
        while (refillCount > 0 || refillCount < 0) {
            if (refillCount > 0) {
                Scripts.Potions.fillPotion(potionName, true, kadSerial, emptyBottleSerial);
                refillCount--;
            }
            else {
                Scripts.Potions.potionToKad(potionName, true, kadSerial);
                refillCount++;
            }
        }
        if (needToTakeKadToBackpack) {
            Orion.Wait(responseDelay);
            Orion.MoveItem(kadSerial, 0, kadContainer, kadPosition.x, kadPosition.y);
        }
    };
    return Refill;
}());
