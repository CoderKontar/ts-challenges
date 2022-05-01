type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

// js implementation
function MyReadonlyFun(originObj) {
  const obj = {};
  for (const key in originObj) {
    Object.defineProperty(obj, key, {
      get: () => {
        return originObj[key];
      },
      set: () => {
        throw new Error("Cannot reassign a readonly property");
      },
    });
  }
  console.log("template: KONTAR, obj: ", obj);
  return obj;
}
const person = {
  name: "John",
  age: 30,
};
const readonlyObj: any = MyReadonlyFun(person);
readonlyObj.name = "Pete"; // Cannot reassign a readonly property
