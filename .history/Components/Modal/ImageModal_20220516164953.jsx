export default function ImageModal(props) {
  return (
    <div
        className={`modalWrapperImage ${props.isOpened ? "openImage" : "close"}`}
        style={{ ...props.style }}
      >
        {" "}

        <div className="modalBody">
        <div className="modalClose" onClick={props.onModalClose}>
          X
        </div>
         {props.children}
          
        </div>
      </div>
  );
}
