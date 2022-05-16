export default function ImageModal() {
  return (
    <>
      <>
        <div
          className={`modalWrapper ${props.isOpened ? "openImage" : "closeImage"}`}
          style={{ ...props.style }}
        >
          {" "}
          <div className="modalBody">{props.children}</div>
        </div>
      </>
    </>
  );
}
