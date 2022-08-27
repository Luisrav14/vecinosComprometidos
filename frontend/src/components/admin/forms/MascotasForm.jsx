import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

export const MascotasForm = () => {
  return (
    <>
      <form action="" className="text-left">
        <div className="form-group col-md-12">
          <label htmlFor="">Dirección</label>
          <select className="form-select">
            <option selected>Selecciona una dirección</option>
            <option value="">Quinta #123</option>
            <option value="">Pinos #111</option>
          </select>
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="">Colono</label>
          <input className="form-control" type="text" disabled value="Nombre Propietario " />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="isPet">¿Cuenta con alguna mascota?</label>
          <select className="form-select">
            <option selected>Selecciona una opción</option>
            <option value="">Si</option>
            <option value="">No</option>
          </select>
        </div>

        <div className="col-md-12" id="form1">
          <div className="form-group">
            <label htmlFor="numero_mascotas">Número de mascotas que viven en su hogar</label>
            <Select
              defaultInputValue="Selecciona una opción"
              options={[
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 },
                { label: "5", value: 5 },
                { label: "6", value: 6 },
                { label: "7", value: 7 },
                { label: "8", value: 8 },
                { label: "9", value: 9 },
              ]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="conflicto" className="col-form-label">
              ¿Alguna vez ha tenido algún conflicto o han reportado por su mascota?
            </label>
            <select className="form-select" id="conflicto" name="conflicto">
              <option selected disabled>
                Selecciona una opción
              </option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group d-none" id="input-esp-conflicto">
            <label htmlFor="esp_conflicto" className="col-form-label">
              Especifique
            </label>
            <input type="text" id="esp_conflicto" className="form-control" name="esp_conflicto" />
          </div>
          <div id="form-mascotas"></div>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="isPet">Número de mascotas?</label>
          <select className="form-select">
            <option selected>Selecciona una opción</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>

        {
          <div id="form-mascotas">
            <div>
              <hr />
              <h5 class="fw-bolder text-center">Datos mascota 1</h5>
              <hr />
            </div>
            <div class="form-group">
              <label for="tipo_mascota_0" class="col-form-label">
                ¿Qué tipo mascota tiene?
              </label>
              <select class="form-control" id="tipo_mascota_0" name="tipo_mascota[]" onchange="mostrarOtroTipo(0)">
                <option selected="" disabled="">
                  Selecciona una opción
                </option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div class="form-group d-none" id="input-tipo-0">
              <label for="esp_tipo_mascota" class="col-form-label">
                Especifique
              </label>
              <input type="text" id="esp_tipo_mascota" class="form-control" name="esp_tipo[]" placeholder="Especifique otro tipo de mascota" />
            </div>
            <div class="form-group" id="input-raza">
              <label for="raza_mascota" class="col-form-label">
                ¿Qué raza es?
              </label>
              <input type="text" id="raza_mascota" class="form-control" name="raza[]" placeholder="Especifique raza de la mascota" />
            </div>
            <div class="form-group" id="input-edad-0">
              <label for="edad_mascota" class="col-form-label">
                Edad
              </label>
              <input type="text" id="edad_mascota" class="form-control" name="edad[]" placeholder="Especifique edad de la mascota" />
            </div>
            <div class="form-group">
              <label for="input-collar-0" class="col-form-label">
                ¿Cuenta con collar certificado por la asociación de colonos?
              </label>
              <select class="form-control" id="input-collar-0" name="collar[]" onchange="motivoCertificado(0)">
                <option selected="" disabled="">
                  Selecciona una opción
                </option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </select>
            </div>
            <div class="form-group d-none" id="input-motivo-collar-0">
              <label for="motivo-collar" class="col-form-label">
                ¿Porqué?
              </label>
              <input type="text" id="motivo-collar" class="form-control" name="motivo_collar[]" placeholder="Motivo por el que no cuenta con certificado" />
            </div>
          </div>
        }
      </form>
    </>
  );
};
