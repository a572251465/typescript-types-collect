/**
 *
 * 巧用元组元素 的索引获取类型
 *  - 使用typeof 只能获取数组的整体类型
 *  - 使用索引[number] 可以获取描述 数组类型的 前置类型。例如；{name: string, age: number} | {name: string, age: number}[]  -> {name: string, age: number} | {name: string, age: number}
 *
 *  {name: string, age: number} | {name: string, age: number}[]
 *
 *  =>
 *
 *  {name: string, age: number} | {name: string, age: number}
 */

const arr = [
  { name: "lihh", age: 20 },
  { name: "lill", age: 15 }
] as const;

// 使用typeof 获取数组整体类型
type A = typeof arr; // {name: string, age: number} | {name: string, age: number}[]

// 但是想获取描述数组的类型
type B = A[number]; // {name: string, age: number} | {name: string, age: number}

export default {};
