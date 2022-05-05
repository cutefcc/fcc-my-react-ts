interface Aa {
  name: string;
  age: 18;
}

type k = keyof Aa; // 遍历某种类型的属性 用于获取某种类型的所有键，其返回类型是联合类型。
const b: Pick<Aa, "name"> = {
  name: "4334",
};
type MyPixck<T, K extends keyof T> = {
  [P in K]: T[P];
};
type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
// type ValueOf<T> = T[keyof T];
// 为什么下面这个标准答案 会爆红
// type myTupleToObject<T> = {
//   [P in T[number]]: P;
// };
// 可选
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
// 必须
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};
interface A1 {
  name: string;
  age: number;
  height: number;
}
const p: Required<A1> = {
  name: "",
  age: 18,
  height: 1,
};

export { p };
