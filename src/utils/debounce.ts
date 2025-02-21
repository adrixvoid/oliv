export const debounce = function (fn: Function, ms = 300) {
  let id: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
};
