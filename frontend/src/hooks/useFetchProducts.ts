import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import useErrorHandler from './useErrorHandler';
import { Product } from '../types/product';

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchProducts();
        setProducts(result);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setLoading]);

  return { products, loading};
};

export default useFetchProducts;
