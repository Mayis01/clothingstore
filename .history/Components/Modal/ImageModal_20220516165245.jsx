export default function ImageModal(props) {
  return (
    <div
        className={`modalWrapperImage ${props.isOpened ? "openImage" : "closeImage"}`}
        style={{ ...props.style }}
      >
        {" "}

        <div className="modalBodyImage" onClick={}>
        
         {props.children}
          
        </div>
      </div>
  );
}
