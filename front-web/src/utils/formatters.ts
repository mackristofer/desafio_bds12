import { Gender } from '../types';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Mascullino',
    FEMALE: 'Feminino',
    OTHER: 'Outro'
  };

  return textByGender[gender];
};
