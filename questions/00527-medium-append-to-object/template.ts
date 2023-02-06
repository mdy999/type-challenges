
// type AppendToObject<T extends Object, U extends string, V> = {
//   [K in keyof T | U]: K extends U ? V : T[K] // 
// }
type AppendToObject<T extends Object, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}
