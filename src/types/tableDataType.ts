export type tableDataType = {
  key: number;
  data: { name: number; tag: number; status: number; date: number; id: number };
  children: { key: string; data: null }[];
}[];
