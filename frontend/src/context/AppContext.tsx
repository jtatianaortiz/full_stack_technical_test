import React, { 
  createContext, 
  useContext, 
  useState, 
  ReactNode 
} from 'react';

interface AppContextProps {
  isLoading: boolean;
  error: string | null;
  toastMessage: string | null;
  setLoading: (state: boolean) => void;
  setError: (message: string | null) => void;
  setToastMessage: (message: string | null) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);


export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);


  const setLoading = (state: boolean) => {
    setIsLoading(state);
  };

  const setError = (message: string | null) => {
    setError(message);
  };

  const setToastMessage = (message: string | null) => {
    setToastMessage(message);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        toastMessage,
        setLoading,
        setError,
        setToastMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de AppProvider');
  }
  return context;
};
