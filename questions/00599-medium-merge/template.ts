// 类型“K”无法用于索引类型“S”。 那就再判断一下就行
type Merge<F extends Object, S extends Object> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
      ? F[K]
      : never
}
