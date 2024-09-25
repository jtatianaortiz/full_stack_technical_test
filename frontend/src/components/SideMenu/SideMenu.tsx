import React from 'react';
import { 
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle 
} from '@ionic/react';
import { 
  homeOutline,
  heartOutline
} from 'ionicons/icons';

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle> 
            Menu
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/products">
              <IonIcon slot="start" icon={homeOutline} />
              <IonLabel> Products </IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/wishlist">
              <IonIcon slot="start" icon={heartOutline} />
              <IonLabel> Wishlist </IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
