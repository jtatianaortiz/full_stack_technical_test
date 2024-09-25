import React from 'react';
import { IonSpinner } from '@ionic/react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <IonSpinner name="crescent" />
    </div>
  );
};

export default Loading;
