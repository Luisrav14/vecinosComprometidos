import Swal from "sweetalert2";

export const errorAlert = () => {
  return Swal.fire({
    title: "Error",
    text: "Ha ocurrido un error a realizar la operación",
    icon: "error",
  });
};
