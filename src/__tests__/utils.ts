/**
 * Global object.
 * @private
*/
const root = (typeof global == 'object' && global) || this;

/**
 * Function returns its arguments.
 * @private
 */
function toArgs(...args: any[]): IArguments { return arguments; }

/** Array of the falsey values. */
export const falseValues = [, null, undefined, false, 0, NaN, '', void 0];

/** Function returns false. */
export function fnFalse(): boolean { return false; };

/** Function to multiply value by 2. */
export function double(x: number): number { return x * 2; };

/** Function returns square of the given value. */
export function square(x: number): number { return x * x; };

/** Function adds 2 values. */
export function add(x: number, y: number) { return x + y; };

/** Empty async function. */
export async function asyncFunc() {};

/** Arguments - special js collection. */
export const args: IArguments = toArgs(1, 2, 3);

/** Symbol. */
export const symbol: Symbol | undefined = root.Symbol ? root.Symbol('a') : void 0;