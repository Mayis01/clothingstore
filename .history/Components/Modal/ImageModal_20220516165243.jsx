export default function ImageModal(props) {
  return (
    <div
        className={`modalWrapperImage ${props.isOpened ? "openImage" : "closeImage"}`}
        style={{ ...props.style }}
      >
        {" "}

        <div className="modalBodyImage" on>
        
         {props.children}
          
        </div>
      </div>
  );
}
