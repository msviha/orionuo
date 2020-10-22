function Cast(spell, target) {
    cast(spell, target);
}

function bandaSelf() {
    bandageSelf();
}

function CastScroll(scroll, target) {
    if (ScrollEnum[scroll] !== undefined) {
        castScroll(scroll, target);
    }
    else if (NecroScrollEnum[scroll] !== undefined) {
        castScroll(scroll, target);
    }
}

function DVortex() {
    summon('Death Vortex');
}
