import React from 'react';
import { 
  IonPage, 
  IonContent,
  IonButton 
} from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';
import errorImage from '../../assets/images/error-image.jpg';
import './Error.css';

const Error: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const { errorMessage } = location.state as { errorMessage?: string } || {};

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="error-container">
          <img 
            className="error-image"
            alt="Error"
            src={errorImage}
          />
          <h1 className="error-message">
              { errorMessage || `Oops! Something went wrong.`}
          </h1>
          <IonButton 
            className="back-button" 
            shape="round"
            onClick={handleGoBack}
          >
            Go Back Home
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Error;