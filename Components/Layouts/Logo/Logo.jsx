import Image from "next/image";
import logo from "../../../images/logo.png";

export default function Logo({className}) {
  return (
    <>
      <div className={`logo ${className}`} >
        <Image
          src={logo}
          // width={70}
          // height={28}
          loading="lazy"
          alt="logo"
        ></Image>
      </div>
    </>
  );
}
