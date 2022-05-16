export default function MenuModal(props) {
  return (
    <>
    <body>

      
    </body>
      <div
        className={`modalWrapper ${props.isOpened ? "open" : "close"}`}
        style={{ ...props.style }}
      >
        {" "}
        <div className="modalBody">{props.children}</div>
      </div>
    </>
  );
}
