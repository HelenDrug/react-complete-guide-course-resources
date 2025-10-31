export const isInvalidImage = (image: File) => {
  return !image || image.size === 0;
};
