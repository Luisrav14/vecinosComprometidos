export const ModalWithBtn = ({ title, textBtn, iconBtn, classBtn, size='', footer = true, children }) => {
  const modalKey = Math.floor(Math.random() * 10000);
  return (
    <>
      <button className={classBtn} type="button" data-bs-toggle="modal" data-bs-target={`#Modal${modalKey}`}>
        {iconBtn} {textBtn}
      </button>

      <div className="modal fade" id={`Modal${modalKey}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key={modalKey}>
        <div className={`modal-dialog modal-${size}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold" id="exampleModalLabel">
                {title}
              </h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">{children}</div>
            {footer && (
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary">
                  Aceptar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
