import { Product } from "../types/product";

const WISHLIST_KEY = 'wishlistProducts';

export const getWishlistProducts = (): Product[] => {
  const wishlist = localStorage.getItem(WISHLIST_KEY);
  return wishlist ? JSON.parse(wishlist) : [];
};

export const setWishlistProducts = (products: Product[]): void => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(products));
};

export const addWishlistProduct = (product: Product): void => {
  const currentWishlists = getWishlistProducts();
  if (!currentWishlists.some(list => list.id === product.id)) {
    currentWishlists.push(product);
    setWishlistProducts(currentWishlists);
  }
};

export const removeWishlistProduct = (productId: number): void => {
  const currentWishlists = getWishlistProducts();
  const updatedWishlists = currentWishlists.filter(product => product.id !== productId);
  setWishlistProducts(updatedWishlists);
};

export const isWishlistProduct = (productId: number): boolean => {
  const currentWishlists = getWishlistProducts();
  return currentWishlists.some(product => product.id === productId);
};
