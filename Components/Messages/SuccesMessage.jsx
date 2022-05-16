import { useState } from "react";

export default function SuccesMessage({isActive }) {

  const [bool,setBool] = useState(true)
  return (
    <>
      {/* <div style={{ background: "black", height: 100 }}> */}
      <div className={`SuccesBox ${ isActive && "showMessage"}`}>
        <svg
          onClick={()=> setBool((bool) => !bool)}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8333 1.34169L10.6583 0.166687L5.99996 4.82502L1.34163 0.166687L0.166626 1.34169L4.82496 6.00002L0.166626 10.6584L1.34163 11.8334L5.99996 7.17502L10.6583 11.8334L11.8333 10.6584L7.17496 6.00002L11.8333 1.34169Z"
            fill="#AAAAAA"
          />
        </svg>
        <div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M38 20C38 29.9411 29.9411 38 20 38C10.0589 38 2 29.9411 2 20C2 10.0589 10.0589 2 20 2C29.9411 2 38 10.0589 38 20ZM40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM11 20L16.25 25.25L29.5 12L31.25 13.75L16.25 28.75L9.25 21.75L11 20Z"
              fill="#0DA000"
            />
          </svg>

          <p>Product added to cart.</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
