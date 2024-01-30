import "./Modal.scss";

export const Modal = ({ children, name, type, setAccept, show, setShow }) => {
  return (
    <>
      <button
        className={`${type ? type : "CB__NextButton"}`}
        onClick={() => {
          setShow(true);
          setTimeout(() => {
            setAccept !== undefined && setAccept(true);
          }, 5000);
        }}
      >
        {name}
      </button>
      {show && (
        <div className="ModalBG" onClick={() => setShow(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`Modal__body ${type}1`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
