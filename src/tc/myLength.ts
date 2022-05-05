import type { Equal, Expect } from "@type-challenges/utils";
type MyLength<T extends readonly any[]> = T["length"];

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<MyLength<typeof tesla>, 4>>,
  Expect<Equal<MyLength<typeof spaceX>, 5>>,
  // @ts-expect-error
  MyLength<5>,
  // @ts-expect-error
  MyLength<"hello world">
];
