function isMyGameObject(val:any):val is IMyGameObject {
    return val && val.graphic;
}

function isMakeProps(val:any):val is IMakeProps {
    let success = val && val.tool && val.menu;
    !success && Scripts.Utils.log('tool and menu are mandatory properties', ColorEnum.red);
    const outputCountType = typeof val.outputCount === 'undefined' || typeof val.outputCount === 'number';
    success = success && outputCountType;
    !success && Scripts.Utils.log('outputCount is not a number', ColorEnum.red);

    if (val.refill) {
        success = success && isRefillProps(val.refill);
    }

    return success;
}

function isRefillProps(val:any):val is IRefillProps {
    let success = true;
    if (val.resources) {
        for (const r of val.resources) {
            success = success && isRefillItem(r);
        }
    }
    if (val.crafting) {
        for (const c of val.crafting) {
            success = success && isRefillItem(c);
        }
    }
    return success;
}

function isRefillItem(val:any):val is IRefillItem {
    let success = val && val.item && typeof val.count === 'number';
    !success && Scripts.Utils.log('item should be defined and count should be a number', ColorEnum.red);
    return success;
}

function isBagDestination(val:any):val is IBagDestination {
    let success = val && typeof val.x === 'number' && typeof val.y === 'number';
    !success && Scripts.Utils.log('x and y should be a number', ColorEnum.red);
    return success;
}
