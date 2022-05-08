type MyAwaited<T extends Promise<any>> = T extends Promise<infer X>
  ? X extends Promise<any>
    ? MyAwaited<X>
    : X
  : T;
