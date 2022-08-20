import React from "react";

export const ModalWithBtn = ({ title, textBtn, iconBtn, children }) => {
  return (
    <>
      <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {iconBtn} {textBtn}
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold" id="exampleModalLabel">
                {title}
              </h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
