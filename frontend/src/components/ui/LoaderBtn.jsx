import { useEffect, useState } from "react";

export const LoaderBtn = ({ textBtn, loadText = "Cargando...", classBtn = "btn btn-block form-control btn-primary form-inline", typeBtn, isLoading = false, onClick = null }) => {
  const [loadBtn, setLoadBtn] = useState(isLoading);

  useEffect(() => {
    setLoadBtn(isLoading);
  }, [isLoading]);

  return (
    <button type={typeBtn} className={classBtn} disabled={loadBtn} onClick={onClick}>
      {loadBtn ? (
        <>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> {loadText}
        </>
      ) : (
        textBtn
      )}
    </button>
  );
};
