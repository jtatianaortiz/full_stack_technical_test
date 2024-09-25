import React from 'react';
import { IonContent, IonPage} from '@ionic/react';
import { useWishlistContext } from '../../context/WishlistContext';
import ProductList from '../../components/Products/ProductList/ProductList';

const Wishlist: React.FC = () => {
  const { wishlist } = useWishlistContext();

  if (wishlist.length === 0) {
    return (
      <div className="empty-message">
        <p>No tienes productos en wishlist.</p>
      </div>
    );
  }

  return (
    <IonPage>
      <IonContent>
          <ProductList products={wishlist} />
      </IonContent>
    </IonPage>
  );
};

export default Wishlist;
