import toast from "react-hot-toast";

export const inputRequiredToast = () => {
  return toast.error("Completa los campos obligatorios");
};
