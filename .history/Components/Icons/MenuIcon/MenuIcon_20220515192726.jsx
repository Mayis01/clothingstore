import { useReducer, useState } from "react";
import MenuModal from "../../Modal/MenuModal";
import SubMenuItem from "./SubMenuItem/SubMenuItem";
import SubMen from "../../../Json/Menu/subMen.json";
import SubWomen from "../../../Json/Menu/subWomen.json";
import SubSale from "../../../Json/Menu/subSale.json";
import SubKids from "../../../Json/Menu/subKids.json";
import Container from "../../Layouts/Container/Container";
import FooterMobileData from "../../../Json/MobileFooterMenu/MobileFooterMenu.json";
import FooterItem from "./FooterItem/FooterItem";

export default function MenuIcon() {
  const [flag, setFlag] = useState(false);

  // ??????????????????????????????????????????????????????????????????????????????????????????????????
  // ??????????????????????????????????????????????????????????????????????????????????????????????????
  const [Content, setContent] = useState([
    {
      id: 1099,
      Box: true,
      content: SubMen,
    },
    { id: 1100, Box: false, content: SubWomen },
    { id: 1101, Box: false, content: SubKids },
    { id: 1102, Box: false, content: SubSale },
  ]);

  const ChangeFlag = () => setFlag((flag) => !flag);

  return (
    <>
      <div onClick={ChangeFlag} className="WrapperResIcon">
        <svg
          className={flag ? "OpenMenu" : "CloseMenu"}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={
              flag
                ? "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                : "M3 18H13V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            }
            fill="black"
          />
        </svg>

        {flag && (
          <Container>
            <MenuModal isOpened={true}>
              {" "}
              <div
                className="MobileWrapper"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="MenuResponse">
                  <ul>
                    <li
                      onClick={() => {
                        setContent(
                          Content.map((item) => {
                            if (item.id === 1099) {
                              return { ...item, Box: true };
                            }
                            return { ...item, Box: false };
                          })
                        );
                      }}
                    >
                      {" "}
                      Men
                    </li>
                    <li
                      key={1100}
                      onClick={() => {
                        setContent(
                          Content.map((item) => {
                            if (item.id === 1100) {
                              return { ...item, Box: true };
                            }
                            return { ...item, Box: false };
                          })
                        );
                      }}
                    >
                      {" "}
                      Women
                    </li>
                    <li
                      key={1101}
                      onClick={() => {
                        setContent(
                          Content.map((item) => {
                            if (item.id === 1101) {
                              return { ...item, Box: true };
                            }
                            return { ...item, Box: false };
                          })
                        );
                      }}
                    >
                      {" "}
                      Kids
                    </li>
                    <li
                      key={1102}
                      onClick={() => {
                        setContent(
                          Content.map((item) => {
                            if (item.id === 1102) {
                              return { ...item, Box: true };
                            }
                            return { ...item, Box: false };
                          })
                        );
                      }}
                    >
                      {" "}
                      Sale
                    </li>
                  </ul>

                  {Content.map((subs) => {
                    return (
                      subs.Box && (
                        <SubMenuItem key={subs.id} Data={subs.content} />
                      )
                    );
                  })}
                </div>

                <div className="InfoFooterInModal">
                  <Container>
                  <FooterItem Data={FooterMobileData} />

                  </Container>
                
                </div>
              </div>
            </MenuModal>
          </Container>
        )}
      </div>
    </>
  );
}
