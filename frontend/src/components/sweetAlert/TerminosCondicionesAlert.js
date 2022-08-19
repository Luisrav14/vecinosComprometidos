import Swal from "sweetalert2";

export const TerminosCondicionesAlert = async () => {
  const { value: accept } = await Swal.fire({
    title: "Términos y Condiciones",
    icon: "info",
    input: "checkbox",
    inputValue: 0,
    inputPlaceholder: "Acepto los términos y condiciones",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#326ABC",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    inputValidator: (result) => {
      return !result && "Necesitas aceptar los términos y condiciones para continuar";
    },
  });

  if (accept) {
    await Swal.fire({
      icon: "success",
      title: "Acceso Correcto",
      html: '<div class="spinner-border text-primary mb-2" style="width: 3rem; height: 3rem;" role="status"><span class="visually-hidden">Redireccionando...</span></div> <br/> Redireccionando...',
      showConfirmButton: false,
      timer: 1500,
    });
    return true;
  }
};
