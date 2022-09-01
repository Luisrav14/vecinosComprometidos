import Swal from "sweetalert2";

export const TerminosCondicionesAlert = async () => {
  const { value: accept } = await Swal.fire({
    icon: "info",
    title: "Políticas",
    input: "checkbox",
    inputValue: 0,
    html: '<a href="https://quintasresidencial.com/assets/pdf/Aviso-Privacidad.pdf" target="_blank" >Aviso de privacidad</a> | <a href="https://quintasresidencial.com/assets/pdf/Terminos-Condiciones.pdf" target="_blank" >Términos y condiciones</a> ',
    inputPlaceholder: "He leido y acepto el aviso de privacidad y los términos y condiciones",
    confirmButtonText: "Continuar",
    inputValidator: (result) => {
      return !result && "Necesitas aceptar las políticas para continuar";
    },
  });

  if (accept) {
    return Swal.fire({
      icon: "success",
      title: "Acceso correcto",
      timer: 1000,
      showConfirmButton: false,
    });
  }
};
