import type { Equal, Expect } from "@type-challenges/utils";

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
type test = {
  a: 1;
  b: boolean;
  c: number;
};
const b: MyPartial<test> = {
  b: true,
};
const c: MyPartial<test> = {
  c: 1,
};
const d: MyPartial<test> = {
  a: 1,
};
