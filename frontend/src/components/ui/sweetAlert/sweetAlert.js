import Swal from "sweetalert2";

export const successAlert = () => {
  return Swal.fire({
    title: "¡Ooperación realizada!",
    icon: "success",
    showConfirmButton: true,
  });
};

export const errorAlert = () => {
  return Swal.fire({
    title: "¡Ooops!",
    text: "Ha ocurrido un error a realizar la operación.",
    icon: "error",
  });
};

export const EliminarAlert = (route) => {
  return Swal.fire({
    title: "¿Estas seguro de eliminar?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("¡Operación exitosa!", "", "success");
    }
  });
};
