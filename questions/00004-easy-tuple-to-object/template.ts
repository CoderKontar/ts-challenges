type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [key in T[number]]: key;
};

/**
 * 字面量类型 as const
 * 遍历数组 T[number]
 */

// js implementation
function TupleToObjectFun(arr) {
  const obj = {};
  arr.forEach((item) => {
    obj[item] = item;
  });
  return obj;
}
console.log(
  "template: KONTAR, TupleToObjectFun: ",
  TupleToObjectFun([1, 2, 3, "name"])
);
