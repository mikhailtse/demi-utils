export default (...funcs: Function[]) => funcs.reduce((a, b) => (...args: Function[]) => a(b(...args)), (arg: any) => arg);