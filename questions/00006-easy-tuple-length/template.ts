type Length<T extends readonly any[]> = T["length"];

// js implementation
function LengthFun(arr) {
  if (Array.isArray(arr)) {
    return arr.length;
  } else {
    throw new Error("Not an array");
  }
}
