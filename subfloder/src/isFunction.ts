export default (fn: any): boolean => {
    const type = fn && {}.toString.call(fn);
    return type === '[object Function]' || type === '[object AsyncFunction]';
};