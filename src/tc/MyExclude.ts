import type { Equal, Expect } from "@type-challenges/utils";
type MyExclude<T, U> = T extends U ? never : T;
// 如何理解 Exclude 的用法？
// 如果 T 中有 U 的元素，那么 MyExclude<T, U> 中的元素就是 T 中不包含 U 的元素，否则就是 T 中的元素。
// type e = MyExclude<"a" | 10, "a" | "b" | "c">;
// // 你以为的 Exclude
// type e1 = "a" | 10 extends "a" | "b" | "c" ? never : "a" | 10;
// // 实际上的 Exclude
// type e2 =
//   | ("a" extends "a" | "b" | "c" ? never : "a")
//   | (10 extends "a" | "b" | "c" ? never : 10);

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
  Expect<
    Equal<
      MyExclude<"a" | "b" | "c", "a" | "b">,
      Exclude<"a" | "b" | "c", "a" | "b">
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];
