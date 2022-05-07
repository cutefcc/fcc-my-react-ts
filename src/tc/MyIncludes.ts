import type { Equal, Expect } from "@type-challenges/utils";
/*
  898 - MyIncludes
  -------
  by null (@kynefuk) #简单 #array
  
  ### 题目
  
  在类型系统里实现 JavaScript 的 `Array.MyIncludes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。
  
  举例来说，
  
  ```ts
  type isPillarMen = MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```
  
  > 在 Github 上查看：https://tsch.js.org/898/zh-CN
*/

/* _____________ 你的代码 _____________ */

type MyIncludes<T extends readonly any[], U> = T extends [infer K, ...infer R]
  ? Equal<K, U> extends true
    ? true
    : MyIncludes<R, U>
  : false;

type cases = [
  Expect<
    Equal<MyIncludes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<MyIncludes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<MyIncludes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<MyIncludes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<MyIncludes<[1, 2, 3], 2>, true>>,
  Expect<Equal<MyIncludes<[1, 2, 3], 1>, true>>,
  Expect<Equal<MyIncludes<[{}], { a: "A" }>, false>>,
  Expect<Equal<MyIncludes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<MyIncludes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<MyIncludes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<MyIncludes<[{ a: "A" }], { readonly a: "A" }>, false>>,
  Expect<Equal<MyIncludes<[{ readonly a: "A" }], { a: "A" }>, false>>,
  Expect<Equal<MyIncludes<[1], 1 | 2>, false>>,
  Expect<Equal<MyIncludes<[1 | 2], 1>, false>>,
  Expect<Equal<MyIncludes<[null], undefined>, false>>,
  Expect<Equal<MyIncludes<[undefined], null>, false>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/898/answer/zh-CN
  > 查看解答：https://tsch.js.org/898/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
