// type MyPick<T, K> = any;

// js implementation
function MyPickFun(originType, keys: string[]) {
  const obj = {};
  keys.forEach((key) => {
    if (key in originType) {
      obj[key] = originType[key];
    }
  });
  return obj;
}
const Todo = {
  title: "",
  description: "",
  completed: false,
};
console.log(
  "template: KONTAR, ",
  MyPickFun(Todo, ["title", "completed", "aaa"])
);

// Type implementation
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
/**
 * extends  
 *    值 extends 值  相当于 ===
 *    值 extends type 是否子集
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * 要点：
 *  1. 返回一个新的Type
 *  2. 遍历原Type mapped
 *     https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
 *  3. 取原值 T[P]
 *     https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
 *  4. 判断P是否在T中
 *     1. keyof lookup
 *     https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
 *     https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator
 *     2. extends 条件约束
 *     https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
 *     https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses
 */