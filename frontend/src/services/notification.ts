import { toastController } from '@ionic/core';

export const showToast = async (message: string, color: 'success' | 'danger' = 'danger') => {
  const toast = await toastController.create({
    message,
    duration: 3000,
    color,
  });
  await toast.present();
};
