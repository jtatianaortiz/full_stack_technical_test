import React, { useState } from 'react';
import { IonButton, IonContent, IonIcon, IonPage} from '@ionic/react';
import { arrowUpOutline, arrowDownOutline } from 'ionicons/icons';
import { useWishlistContext } from '../../context/WishlistContext';
import ProductList from '../../components/Products/ProductList/ProductList';
import './Wishlist.css';

const Wishlist: React.FC = () => {
  const { wishlist, sortWishlistByName } = useWishlistContext();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const iconOrder = sortOrder === 'asc' ? arrowUpOutline : arrowDownOutline

  const handleSortByName = () => {
    sortWishlistByName(sortOrder);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); 
  };

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
        <div className="sort-container">
        <IonButton onClick={handleSortByName} className="sort-button">
          <IonIcon
            icon={iconOrder}
            slot="end"
            className="sort-icon"
          />
        </IonButton>
        </div>
          <ProductList products={wishlist} />
      </IonContent>
    </IonPage>
  );
};

export default Wishlist;
