import { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

export const MascotasForm = () => {
  const [form1, setForm1] = useState(false);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState([]);
  const [form4, setForm4] = useState(false);
  const [tipoPet, setTipoPet] = useState(false);

  const handleNumPets = ({ value }) => {
    const numPetsArray = [];
    for (let i = 0; i < value; i++) {
      numPetsArray.push(i);
    }
    setForm3(numPetsArray);
  };

  return (
    <>
      <form className="text-left">
        <div className="form-group col-md-12">
          <label>Dirección</label>
          <Select
            options={[
              { label: "Quintas #123", value: "Quintas #123" },
              { label: "Roble #300", value: "Roble #300" },
            ]}
          />
        </div>
        <div className="form-group col-md-12">
          <label>Colono</label>
          <input className="form-control" type="text" disabled value="Nombre Propietario " />
        </div>
        <div className="form-group col-md-12">
          <label>¿Cuenta con alguna mascota?</label>
          <Select
            options={[
              { label: "Si", value: true },
              { label: "No", value: false },
            ]}
            onChange={({ value }) => setForm1(value)}
          />
        </div>

        {form1 == true && (
          <div className="col-md-12">
            <div className="form-group">
              <label>Número de mascotas que viven en su hogar</label>
              <Select
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
                onChange={handleNumPets}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">¿Alguna vez ha tenido algún conflicto o han reportado por su mascota?</label>
              <Select
                options={[
                  { label: "Si", value: true },
                  { label: "No", value: false },
                ]}
                onChange={({ value }) => setForm2(value)}
              />
            </div>

            {form2 === true && (
              <div className="form-group">
                <label className="col-form-label">Especifique</label>
                <input type="text" className="form-control" />
              </div>
            )}

            {form3.length > 0 &&
              form3.map((index) => {
                return (
                  <div key={index}>
                    <div>
                      <hr />
                      <h5 className="fw-bolder text-center">Datos mascota {index + 1}</h5>
                      <hr />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">¿Qué tipo mascota tiene?</label>
                      <Select
                        options={[
                          { label: "Perro", value: "Perro" },
                          { label: "Gato", value: "Gato" },
                          { label: "Otro", value: "Otro" },
                        ]}
                        onChange={({ value }) => (value === "Otro" ? setTipoPet(true) : setTipoPet(false))}
                      />
                    </div>
                    {tipoPet && (
                      <div className="form-group">
                        <label className="col-form-label">Especifique</label>
                        <input type="text" className="form-control" placeholder="Especifique otro tipo de mascota" />
                      </div>
                    )}
                    <div className="form-group">
                      <label className="col-form-label">¿Qué raza es?</label>
                      <input type="text" className="form-control" placeholder="Especifique raza de la mascota" />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Edad</label>
                      <input type="text" className="form-control" placeholder="Especifique edad de la mascota" />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">¿Cuenta con collar certificado por la asociación de colonos?</label>
                      <Select
                        options={[
                          { label: "Si", value: false },
                          { label: "No", value: true },
                        ]}
                        onChange={({ value }) => setForm4(value)}
                      />
                    </div>
                    {form4 === true && (
                      <div className="form-group">
                        <label className="col-form-label">¿Porqué?</label>
                        <input type="text" className="form-control" placeholder="Motivo por el que no cuenta con certificado" />
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </form>
    </>
  );
};
