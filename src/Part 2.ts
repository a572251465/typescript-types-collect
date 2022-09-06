/**
 *
 * 获取数据的类型  typeof 用法
 *
 */

function test(a: string, b: string) {
  return a + b;
}

const obj = {
  name: "lihh",
  age: 20
};

const arr = [
  { name: "lihh", age: 20 },
  { name: "lill", age: 15 }
];

const arr1 = [
  { name: "lihh", age: 20 },
  { name: "lill", age: 15 }
] as const;

type IType = typeof test; // (a: string, b: string) => string
type IType1 = typeof obj; // {name: string, age: number}
type IType2 = typeof arr; // ({name: string, age: number} | {name: string, age: number})[]
type IType3 = typeof arr1; // readonly [{name: "lihh", age: 20}, {name: 'lill', age: 15}]

export default {};
