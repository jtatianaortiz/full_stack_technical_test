import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { showToast } from '../services/notification';

const useErrorHandler = () => {
  const history = useHistory();

  const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        switch (error.response.status) {
          case 404:
            showToast('Page not found Page not found', 'danger');
            history.push('/error', { errorMessage: 'Page not found Page not found' });
            break;
          case 500:
            showToast('Internal Server Error', 'danger');
            history.push('/error', { errorMessage: 'Internal Server Error. Please try again later.' });
            break;
          default:
            showToast(`Error: ${error.response.status} - ${error.response.statusText}`, 'danger');
        }
      } else if (error.request) {
        showToast('Could not connect to the server. Please check your internet connection.', 'danger');
      } else {
        showToast(`Unexpected error: ${error.message}`, 'danger');
      }
    } else {
      showToast('An unexpected error occurred. Please try again.', 'danger');
    }
  };

  return { handleError };
};

export default useErrorHandler;
