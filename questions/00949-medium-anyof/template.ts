type FalseValues = "" | 0 | false | [] | null | undefined | Record<any, never>
type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F extends FalseValues
    ? AnyOf<R>
    : true
  : false
