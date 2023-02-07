export const countPages = (elementsAmount: number) => {
  return Math.ceil(elementsAmount / 20);
};

export const calcCurrentPage = (offset: number) => {
  return Math.ceil(offset / 20 + 1);
};

export const calcCurrentOffset = (page: number) => {
  return (page - 1) * 20;
};
