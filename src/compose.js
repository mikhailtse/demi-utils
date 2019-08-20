module.exports = function() {
    var funcs = Array.prototype.slice.call(arguments);
    return funcs.reduce(function(a, b) {
        return function() {
            return a(b.apply(void 0, arguments));
        };
    }, function(arg) {
        return arg;
    });
}
