/**
 * Global object.
 * @private
*/
var root = (typeof global == 'object' && global) || this;

/**
 * Function returns its arguments.
 * @private
 */
function toArgs() { return arguments; }

/** Array of the falsey values. */
var falseValues = [, null, undefined, false, 0, NaN, '', void 0];

/** Function returns false. */
var fnFalse = function() { return false; };

/** Function to multiply value by 2. */
var double = function(x) { return x * 2; };

/** Function returns square of the given value. */
var square = function(x) { return x * x; };

/** Function adds 2 values. */
var add = function(x, y) { return x + y; };

/** Empty async function. */
var asyncFunc = Function('return async() => {}')();

/** Arguments - special js collection. */
var args = toArgs(1, 2, 3);

/** Symbol. */
var symbol = root.Symbol ? root.Symbol('a') : void 0;

module.exports = {
    double,
    square,
    add,
    asyncFunc,
    args,
    symbol,
    falseValues,
    fnFalse,
};
