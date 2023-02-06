type TObj = {
  name: 'bob',
  ag: 10
}
const CObj = {
  name: 'bob',
  ag: 10
}
type TArr = [10, true, 'lp']
const CArr = [10, true, 'lp'] as const

// typeof
type TObjKey1 = typeof CObj
type TArrKey1 = typeof CArr
type TArrKey2 = typeof CArr[number]

// keyof
type TObjKey2 = keyof TObj
type TArrKey3 = keyof TArr
type TArrKey4 = TArr[number]
const bd1: TObjKey2 = 'ag'
const bd2: TArrKey3 = 0
const bd3: TArrKey4 = 10

const fn1 = (x:any) => {
  return x
}
type TFn1 = typeof fn1
type dhu = Omit<TObj, 'name'|'ag'>