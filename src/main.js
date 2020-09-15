function sipkaself() {
    Orion.Cast('Magic Arrow');
    if (Orion.WaitForTarget(1000)) {
        Orion.TargetObject('self');
    }
    else {
        Orion.CancelTarget();
    }
}
