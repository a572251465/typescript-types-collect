<div><h1 align="center">ts 类型约束</h1></div>

<hr />

## 案例 1：

> 数组获取 元素对象值的联合类型

```ts
/**
 *
 * [
 *  {name: "main"},
 *  {name: "deleteDevice"}
 * ]
 *
 * =>
 *
 * "main" | "deleteDevice"
 *
 */
```

- [跳转 查看源代码](./src/Part%201.ts)

## 案例 2

> `typeof` 的深度练习. typeof 就是为了获取对象/ 数组/ 函数等数据类型

```ts
type IType = typeof test; // (a: string, b: string) => string
type IType1 = typeof obj; // {name: string, age: number}
type IType2 = typeof arr; // ({name: string, age: number} | {name: string, age: number})[]
type IType3 = typeof arr1; // readonly [{name: "lihh", age: 20}, {name: 'lill', age: 15}]
```

- [跳转 查看源代码](./src/Part%202.ts)

## 案例 3

> 对数组索引的深入了解。获取数组类型的 前置类型。 看如下实例

```ts
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
```

- [跳转 查看源代码](./src/Part%203.ts)
