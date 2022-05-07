import type { Equal, Expect } from "@type-challenges/utils";
/*
  10 - 元组转合集
  -------
  by Anthony Fu (@antfu) #中等 #infer #tuple #union
  
  ### 题目
  
  实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。
  
  例如
  
  ```ts
  type Arr = ['1', '2', '3']
  
  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/10/zh-CN
*/

/* _____________ 你的代码 _____________ */

type TupleToUnion<T extends any[]> = T extends [infer U, ...infer K]
  ? U | TupleToUnion<K>
  : never;
// type TupleToUnion<T extends any[]> = T extends Array<infer TItems>
//   ? TItems
//   : never;
// 原组 转为 联合类型

/* _____________ 测试用例 _____________ */

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/10/answer/zh-CN
  > 查看解答：https://tsch.js.org/10/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
