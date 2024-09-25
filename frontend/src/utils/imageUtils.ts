import productImage from '../assets/images/product_image.jpg'

const defaultImage =  productImage;

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url); 
    return true;
  } catch (_) {
    return false;
  }
};

export const getValidImages = (images: string[]): string[] => {
  if (!Array.isArray(images)) {
    return [defaultImage]; 
  }

  return images
    .map(image => {
      return image.replace(/(^"|"$|\\)/g, '').trim();
    })
    .filter(isValidUrl);
};

export const getProductImage = (images: string[]): string => {
  const validImages = getValidImages(images);

  return validImages.length > 0 ? validImages[0] : defaultImage;
};