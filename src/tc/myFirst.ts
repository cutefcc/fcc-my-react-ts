import type { Equal, Expect } from "@type-challenges/utils";
type MyFirst<T extends any[]> = T extends [infer P, ...infer K] ? P : never;

type cases = [
  Expect<Equal<MyFirst<[3, 2, 1]>, 3>>,
  Expect<Equal<MyFirst<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<MyFirst<[]>, never>>,
  Expect<Equal<MyFirst<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  MyFirst<"notArray">,
  // @ts-expect-error
  MyFirst<{ 0: "arrayLike" }>
];

// 主要是infer 的用法
