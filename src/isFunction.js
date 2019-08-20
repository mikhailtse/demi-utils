module.exports = function(fn) {
    var type = fn && {}.toString.call(fn);
    return type === '[object Function]' || type === '[object AsyncFunction]';
}
