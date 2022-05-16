export default function ImageModal(){

    return(<>
    
    <>
 
 <div
   className={`modalWrapper ${props.isOpened ? "open" : "close"}`}
   style={{ ...props.style }}
 >
   {" "}
   <div className="modalBody">{props.children}</div>
 </div>
</>
    
    </>)
}