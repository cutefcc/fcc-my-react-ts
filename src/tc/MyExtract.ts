import type { Equal, Expect } from "@type-challenges/utils";
type MyExtract<T, U> = T extends U ? T : never;
