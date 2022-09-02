import toast, { Toaster } from "react-hot-toast";

export const inputRequiredToast = () => {
  toast.error("Completa los campos obligatorios");
};
