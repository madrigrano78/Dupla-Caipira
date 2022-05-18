import "./styles.css";

export const Modal = ({ onClose, children }) => {
  return (
    <div className="mask">
      <div className="modal">
        <header className="modal-header">
          <button className="close-button" onClick={onClose}>
            Fechar
          </button>
        </header>
        {children}
      </div>
    </div>
  );
};
