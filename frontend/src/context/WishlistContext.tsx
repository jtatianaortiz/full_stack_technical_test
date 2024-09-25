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

  return (
    <WishlistContext.Provider value={{ wishlist, addWishlist, removeWishlist, isWishlist }}>
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
