// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer FirstItem, ...infer Rest]
  ? FirstItem
  : never;

/**
 * 1. extends 类型判断
 * 2. 获取tuple的length属性
 * 3. extends + union
 * 4. inter 推断
 */

// js implementation
function FirstFun(arr) {
  // if (arr.length === 0) return "never";
  // return arr[0];

  const [first, ...rest] = arr;
  return first ?? "never";
}
