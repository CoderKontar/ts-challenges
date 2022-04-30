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
