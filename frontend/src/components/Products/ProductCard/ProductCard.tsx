import React from 'react';
import { 
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
  IonRow,
  IonCol,
  IonButton 
} from '@ionic/react';
import { heartOutline, heart } from 'ionicons/icons';
import './ProductCard.css';
import { getProductImage } from '../../../utils/imageUtils';
import { Product } from '../../../types/product';
import { useWishlistContext } from '../../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addWishlist, removeWishlist, isWishlist } = useWishlistContext();

  const handleWishlistClick = () => {
    if (isWishlist(product.id)) {
      removeWishlist(product.id);
    } else {
      addWishlist(product);
    }
  };

  const productImage = getProductImage(product.images);
  const isInWishlist  = isWishlist(product.id);
  const icon = isInWishlist  ? heart : heartOutline;
  const iconClassName = isInWishlist  ? 'wishlist-icon-filled' : 'wishlist-icon';

  return (
    <IonCard className="product-card">
      <img 
        src={productImage} 
        alt={product.title} 
        className="product-image"
      />
      <IonCardHeader>
        <IonCardTitle>
          {product.title}
        </IonCardTitle>
        <IonCardSubtitle>
          {product.category.name}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p className="product-description">
          {product.description}
        </p>
        <IonRow>
          <IonCol size="8">
            <h2>${product.price}</h2>
          </IonCol>
          <IonCol size="4" className="ion-text-right">
            <IonButton 
              fill="clear" 
              className="wishlist-button"
              onClick={handleWishlistClick}
            >
              <IonIcon 
                icon={icon}
                className={iconClassName}
              />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;
