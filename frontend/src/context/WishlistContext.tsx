import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '../types/product';
import {
  getWishlistProducts,
  addWishlistProduct,
  removeWishlistProduct,
} from '../utils/localStorage';

interface WishlistContextProps {
  wishlist: Product[];
  addWishlist: (product: Product) => void;
  removeWishlist: (productId: number) => void;
  isWishlist: (productId: number) => boolean;
  sortWishlistByName: (order: 'asc' | 'desc') => void;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = getWishlistProducts();
    setWishlist(storedWishlist);
  }, []);

  const addWishlist = (product: Product) => {
    addWishlistProduct(product);
    setWishlist(getWishlistProducts());
  };

  const removeWishlist = (productId: number) => {
    removeWishlistProduct(productId);
    setWishlist(getWishlistProducts());
  };

  const isWishlist = (productId: number) => {
    return wishlist.some((product) => product.id === productId);
  };

  const sortWishlistByName = (order: 'asc' | 'desc') => {
    const sortedWishlist = [...wishlist].sort((a, b) => {
      if (order === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setWishlist(sortedWishlist);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addWishlist, removeWishlist, isWishlist, sortWishlistByName }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('Wishlist context not found.');
  }
  return context;
};
