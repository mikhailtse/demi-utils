var isFunction = require('../isFunction');
var compose = require('../compose');

var double = require('./utils').double;
var asyncFunc = require('./utils').asyncFunc;
var args = require('./utils').args;
var symbol = require('./utils').symbol;
var falseValues = require('./utils').falseValues;
var fnFalse = require('./utils').fnFalse;

test('should return `true` for functions', function() {
    expect(isFunction(double)).toBe(true);
    expect(isFunction(compose)).toBe(true);
    expect(isFunction(isFunction)).toBe(true);
});

test('should return `true` for async functions', function() {
    expect(isFunction(asyncFunc)).toBe(true);
});

test('should return `false` for non-functions', function() {
    expect(isFunction(args)).toBe(false);
    expect(isFunction([1, 2, 3])).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(new Date)).toBe(false);
    expect(isFunction(new Error)).toBe(false);
    expect(isFunction({ a: 1 })).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(/x/)).toBe(false);
    expect(isFunction('a')).toBe(false);
    expect(isFunction(symbol)).toBe(false);

    if (document) {
        expect(isFunction(document.getElementsByTagName('body'))).toBe(false);
    }

    var testFalseValues = falseValues.map(function(v) {
        return isFunction(v);
    });
    var expectFalseValues = falseValues.map(fnFalse);
    expect(testFalseValues).toStrictEqual(expectFalseValues);
});
