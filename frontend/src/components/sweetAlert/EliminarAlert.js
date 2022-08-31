import Swal from "sweetalert2";

export const EliminarAlert = (id) => {
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
