import React from 'react';
import { IonPage, IonContent, IonSpinner } from '@ionic/react';
import useFetchProducts from '../../hooks/useFetchProducts';
import ProductList from '../../components/Products/ProductList/ProductList';

const Products: React.FC = () => {
  const { products, loading } = useFetchProducts();

  return (
    <IonPage>
      <IonContent>
        {loading ? (
          <IonSpinner /> 
        ) : (
          <ProductList products={products} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Products;