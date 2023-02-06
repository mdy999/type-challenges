# keyof与typeof
> 字面量类型：ts中根据体的字面量类型string、number、boolean；联合字面量类型：由字面量类型联合组成的类型，通过keyof可以获取变量的类型；
```ts
type TMsg = 'hello'
const msg: TMsg = 'hello' // msg只能是hello字符串
```
## typeof
用于获取变量的类型,因此操作符后面始终是一个变量
### 用法
```ts
const 
```

## keyof
keyof操作符后面接一个类型，生成由string或者number组成的联合字面量类型

# 泛型也可以给默认值
` type TA<T = []> = T `
