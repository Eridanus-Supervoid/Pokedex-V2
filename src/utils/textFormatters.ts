export const inputAllowOnlyLetters = (e: any) => {
  e.target.value = e.target.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ ]/g, '');
};

export const inputWordsToUppercase = (e: any) => {
  e.target.value = e.target.value.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter: string) => letter.toUpperCase()
  );
};

export const wordsToUppercase = (text: string) => {
  return text.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) =>
    letter.toUpperCase()
  );
};
