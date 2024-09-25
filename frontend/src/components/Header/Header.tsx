import React, { useEffect, useState } from 'react';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonMenuButton 
} from '@ionic/react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>('');

  useEffect(() => {
    switch (location.pathname) {
      case '/products':
        setPageTitle('Products');
        break;
      case '/wishlist':
        setPageTitle('Wishlist');
        break;
      default:
        setPageTitle('Online Store');
    }
  }, [location.pathname]);

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle className="ion-text-center">{pageTitle}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
