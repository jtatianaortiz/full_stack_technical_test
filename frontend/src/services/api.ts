import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(`Error: ${error.response.status} - ${error.response.statusText}`);
      } else {
        throw new Error(error.message);
      }
    } else {
      throw new Error('Ocurrió un error inesperado');
    }
  }
};
