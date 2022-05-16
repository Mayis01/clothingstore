export default function ImageModal() {
  return (
    <>
      <>
        <div
          className={`modalWrapperImage ${props.isOpened ? "openImage" : "closeImage"}`}
          style={{ ...props.style }}
        >
          {" "}
          <div className="modalBody">{props.children}</div>
        </div>
      </>
    </>
  );
}
