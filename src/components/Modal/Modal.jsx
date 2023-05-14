export const Modal = ({ imageURL, closeModal }) => {
    
    return (
      <div className="Overlay" onClick={closeModal}>
        <img src={imageURL} alt="full" width="1280" className="Modal"></img>
      </div>
    );
}