import Container from "../Container/Container";
import Language from "../Language/Language";

import subMen from "../../../Json/Menu/subMen.json";
import subWomen from "../../../Json/Menu/subWomen.json";
import subKids from "../../../Json/Menu/subKids.json";
import subSale from "../../../Json/Menu/subSale.json";
import SearchIcon from "../../Icons/SearchIcon";
import { useHover } from "../../Hooks/useHover";
import UserIcon from "../../Icons/UserIcon";
import LikedIcon from "../../Icons/LikedIcon";
import CartIcon from "../../Icons/CartIcon";
import SubMenu from "./SubMenu/SubMenu";
import MenuIcon from "../../Icons/MenuIcon/MenuIcon";
import Logo from "../Logo/Logo";
import MobileUserLikedIcons from "../MobileUserLikedIcons/MobileUserLikedIcons";

export default function Header() {
  const [hoverRef, isHovered] = useHover();
  const [hoverRef2, isHovered2] = useHover();
  const [hoverRef3, isHovered3] = useHover();
  const [hoverRef4, isHovered4] = useHover();

  return (
    <>
      <Language />
      <header className="header">
        <Container>
          <div className="wrapper">
            <div className="wrapperLogoMenu">
               <Logo /* className="ResponseLogo"*/ /> 

              <div className="Menu">
                <ul>
                  <li ref={hoverRef}>
                    Men {isHovered && <SubMenu Border="bord" Data={subMen} />}
                  </li>
                  <li ref={hoverRef2}>
                    Women{" "}
                    {isHovered2 && <SubMenu Border="bord2" Data={subWomen} />}
                  </li>
                  <li ref={hoverRef3}>
                    Kids{" "}
                    {isHovered3 && <SubMenu Border="bord3" Data={subKids} />}
                  </li>
                  <li ref={hoverRef4}>
                    Sale{" "}
                    {isHovered4 && (
                      <SubMenu
                        Description="Sale"
                        Border="bord4"
                        Data={subSale}
                      />
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <MenuIcon />
            <div className="SearchUserCartMenu">
              <div className="SearchButton">
                <SearchIcon className="Search" />
                <input type="text" placeholder="Search" />
              </div>

              <div className="Icons">
                <ul>
                  <li>
                    <UserIcon />
                  </li>
                  <li>
                    <LikedIcon />
                  </li>{" "}
                  <li>
                    <CartIcon />
                  </li>
                </ul>
              </div>
            </div>

            <SearchIcon className="DefaultSearch" />
          </div>{" "}
        </Container>

        <MobileUserLikedIcons   />
      </header>
    </>
  );
}
