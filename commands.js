const TapKey = require("./keyActions/TapKey");
const HoldKey = require("./keyActions/HoldKey");

//Map of input key strings to valid robot keycodes
const KEY_STRINGS = {
    "up": "up",
    "down": "down",
    "left": "left",
    "right": "right",
    "a": "a",
    "b": "b",
    "x": "x",
    "y": "y"
}

const MIDDLEWARE = [keyHoldParser, keyTapParser, keyMultiTapParser]

// Takes a command string, passes it though action parsers, and returns either a runnable action or
// undefined.
function parseCommandString(str) {
    for (const mw of MIDDLEWARE) {
        const mwRes = mw(str);

        if (mwRes)
            return mwRes
    }
}

module.exports = parseCommandString;

//============ COMMAND PARSING MIDDLEWARE ============//
function keyHoldParser(str) {
    let args = parseArgs(str);

    const isHold = (args.length === 2) && (isValidKeycode(args[0])) && isTime(args[1]);

    if (isHold)
        return new HoldKey(args[0], parseInt(args[1]) * 1000)

}

function keyTapParser(str) {
    let args = parseArgs(str);

    if ((args.length === 1) && (isValidKeycode(args[0])))
        return new TapKey(args[0], 1)
}

function keyMultiTapParser(str) {
    let args = parseArgs(str);

    const is_multi_tap = (args.length === 2) && (isValidKeycode(args[0])) && isInteger(args[1]);

    if (is_multi_tap)
        return new TapKey(args[0], parseInt(args[1]))
}

//============ HELPER FUNCTIONS ============//
function parseArgs(str) {
    return str
        .toLowerCase()
        .trim()
        .split(' ')
}

function isValidKeycode(str) {
    return str in KEY_STRINGS;
}

//Checks a string is a positive integer (https://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer)
function isInteger(str) {
    return /^(0|[1-9]\d*)$/.test(str);
}

//Checks if a string matches the format >123s<
function isTime(str) {
    return /^(0|[1-9]\d*s)$/.test(str);
}
