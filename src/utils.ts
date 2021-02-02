function parseParam(param) {
    if (param === 'true') {
        return true;
    } else if (param === 'false') {
        return false;
    }
    return param;
}
