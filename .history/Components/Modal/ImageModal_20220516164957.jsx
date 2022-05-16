export default function ImageModal(props) {
  return (
    <div
        className={`modalWrapperImage ${props.isOpened ? "openImage" : "closeImage"}`}
        style={{ ...props.style }}
      >
        {" "}

        <div className="modalBodyImage">
        <div className="modalCloseImage" onClick={props.onModalClose}>
          X
        </div>
         {props.children}
          
        </div>
      </div>
  );
}
