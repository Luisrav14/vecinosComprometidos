import toast from "react-hot-toast";

export const inputRequiredToast = () => {
  return toast.error("Completa los campos obligatorios");
};

export const inputMaxLength30Toast = () => {
  toast.error("El campo debe contener menos de 30 caracteres");
};
export const inputMaxLength200Toast = () => {
  toast.error("El campo debe contener menos de 200 caracteres");
};
