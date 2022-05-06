type MyExclude<T, U> = T extends U ? never : T;

// js implementation
function MyExcludeFun(T: string[], U: string[]) {
  const result = [];
  for (let i = 0; i < T.length; i++) {
    let isInclude = false;
    for (let j = 0; j < U.length; j++) {
      if (T[i] === U[j]) {
        isInclude = true;
        break;
      }
    }
    if (!isInclude) result.push(T[i]);
  }
  return result;
}
console.log("template: KONTAR, ", MyExcludeFun(["a", "b", "c"], ["c", "a"]));
