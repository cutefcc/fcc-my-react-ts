export interface Aa {
  name: string;
  age: 18;
}

type k = keyof Aa; // 遍历某种类型的属性 用于获取某种类型的所有键，其返回类型是联合类型。
const b: Pick<Aa, "name"> = {
  name: "4334",
};
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
