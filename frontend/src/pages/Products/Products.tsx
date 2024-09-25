import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import useFetchProducts from '../../hooks/useFetchProducts';
import ProductList from '../../components/Products/ProductList/ProductList';
import Loading from '../../components/Loading/Loading';

const Products: React.FC = () => {
  const { products, loading } = useFetchProducts();

  return (
    <IonPage>
      <IonContent>
        {loading ? (
          <Loading /> 
        ) : (
          <ProductList products={products} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Products;