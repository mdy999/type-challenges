type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer F
) => infer R
  ? (...args: [...F, A]) => R
  : never
