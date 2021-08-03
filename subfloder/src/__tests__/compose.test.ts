import compose from '../compose';

import {
    double,
    square,
    add
} from './utils';

test('compose composes from right to left', function() {
    expect(compose(square)(5)).toBe(25);
    expect(compose(square, double)(5)).toBe(100);
    expect(compose(double, square, double)(5)).toBe(200);
});

test('compose can be seeded with multiple arguments', function() {
    expect(compose(square, add)(1, 2)).toBe(9);
});

test('compose returns the identity function if given no arguments', function() {
    expect(compose()(1, 2)).toBe(1);
    expect(compose()(3)).toBe(3);
    expect(compose()()).toBe(undefined);
});

test('compose returns the first function if given only one', function() {
    expect(compose(square)(3)).toBe(square(3));
});
