export type Store = {
  id: number;
  name: string;
};

export type Gender = 'FEMALE' | 'MALE' | 'OTHER';

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterStore = {
  stores: number | undefined;
};

export type SalesByGender2 = {
  gender: string;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
