import Arrow from "../Arrow/Arrow";


export  function WhiteButton({text,width}) {
  return (
    <>
      <div className="WrapperWhiteButton" style={{width:width}}>
        <span>
          {text} <Arrow />
        </span>
      </div>
    </>
  );
}
