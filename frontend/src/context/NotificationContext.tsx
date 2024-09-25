
import React, { 
  createContext, 
  useState, 
  ReactNode, 
  useContext 
} from 'react';
import { IonToast } from '@ionic/react';

interface NotificationContextType {
  showError: (message: string) => void;
  showSuccess: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<'success' | 'danger'>('danger');

  const showError = (message: string) => {
    setMessage(message);
    setColor('danger');
  };

  const showSuccess = (message: string) => {
    setMessage(message);
    setColor('success');
  };

  return (
    <NotificationContext.Provider value={{ showError, showSuccess }}>
      {children}
      <IonToast
        isOpen={!!message}
        message={message}
        duration={3000}
        color={color}
        onDidDismiss={() => setMessage(undefined)}
      />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('Notification context not found.');
  }
  return context;
};
