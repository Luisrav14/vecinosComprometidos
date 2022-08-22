import Swal from "sweetalert2";

export const TerminosCondicionesAlert = async () => {
  const { value: accept } = await Swal.fire({
    title: "Políticas",
    icon: "info",
    html: '<div class="text-left pl-5"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="swal-input1"><label class="form-check-label" for="swal-input1">He leido y acepto <a href="https://quintasresidencial.com/assets/pdf/Terminos-Condiciones.pdf" class="text-decoration-none" target="_blank">Términos y condiciones</a> </label></div>' + '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="swal-input2"><label class="form-check-label" for="swal-input2">He leido y acepto el <a href="https://quintasresidencial.com/assets/pdf/Aviso-Privacidad.pdf" class="text-decoration-none" target="_blank">Aviso de privaicidad</a> </label></div></div>',
    confirmButtonText: "Continuar",
    confirmButtonColor: "#326ABC",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    inputValidator: (result) => {
      if (document.getElementById("swal-input1").value && document.getElementById("swal-input2").value) {
        return !result && "Necesitas aceptar las políticas para continuar";
      }
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
