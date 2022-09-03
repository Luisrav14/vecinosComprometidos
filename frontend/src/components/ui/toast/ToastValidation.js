import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const inputRequiredToast = () => {
  
  toast.error('Completa los campos obligatorios', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

export const inputMaxlengthToast = () => {
  
  toast.warn('El campo debe contener menos de 30 caracteres', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

