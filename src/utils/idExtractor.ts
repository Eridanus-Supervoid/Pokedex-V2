export const idExtractor = (url: string) => {
  const id = url.split('/').filter(Boolean).pop();
  return id;
};
