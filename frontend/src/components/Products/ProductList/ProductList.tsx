import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { Product } from '../../../types/product';
import ProductCard from '../ProductCard/ProductCard';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <IonGrid>
      <IonRow>
      {products.map((product) => (
        <IonCol 
          size="12" 
          size-sm="6" 
          size-md="4" 
          size-lg="4" 
          key={product.id}
        >
          <ProductCard product={product} />
        </IonCol>
      ))}
      </IonRow>
    </IonGrid>
  );
};

export default ProductList;
