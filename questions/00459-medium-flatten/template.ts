// TODO
type Flatten<T extends unknown[]> = T extends [infer L, ...infer R]
  ? L extends unknown[]
    ? [...Flatten<L>, ...Flatten<R>]
    : [L, ...Flatten<R>]
  : T
