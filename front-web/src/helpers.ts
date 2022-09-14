import { SalesByGender2 } from './types';

export const buildSalesByGenderChart = (gender: SalesByGender2[]) => {
  const labels = gender.map((gender) => gender.gender);
  const series = gender.map((gender) => gender.sum);

  return {
    labels,
    series
  };
};
