/**
 * @internal
 *
 * slouzi pro parsovani parametru pri zadani prikazu primo z klienta - napriklad `_mm 100`
 */
function parseParam(param) {
    if (param === 'true') {
        return true;
    }
    else if (param === 'false') {
        return false;
    }
    else if (parseInt(param).toString().length === param.length) {
        return parseInt(param);
    }
    return param;
}
