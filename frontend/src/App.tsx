import {
  IonApp,
  IonContent,
  IonPage,
  setupIonicReact,
  IonHeader
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import SideMenu from './components/SideMenu/SideMenu';
import Header from './components/Header/Header';
import { NotificationProvider } from './context/NotificationContext';
import { WishlistProvider } from './context/WishlistContext';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <SideMenu />
    <IonReactRouter>
      <NotificationProvider>
        <IonPage id="main-content">
          <IonHeader>
            <Header />
          </IonHeader>
          <IonContent >
            <div className="app-container">
              <WishlistProvider>
                <AppRoutes />
              </WishlistProvider>
            </div>
          </IonContent>
        </IonPage >
      </NotificationProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
