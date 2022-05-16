export default function ImageModal() {
  return (
    <>
      <>
        <div
          className={`modalWrapperImage ${props.isOpened ? "openImage" : "closeImage"}`}
          style={{ ...props.style }}
        >
          {" "}
          <div className="modalBodyImage">{props.children}</div>
        </div>
      </>
    </>
  );
}
