import { useHover } from "../../../Hooks/useHover";
import MenuModal from "../../../Modal/MenuModal";
import Container from "../../Container/Container";

export default function SubMenu({Border,Data}) {
 
  return (
    <>
      <div className="SubMenuWrapper" >
       
       
          <MenuModal isOpened={true}>
            <Container>
              <div className={Border}></div>
              <div className="WrapperSubs">
                {" "}
                {Data.map((subDataItems) => {
                  return (
                    <>
                      <div className="subBox">
                        <p>{subDataItems.subDescription}</p>
                        <ul>
                          {subDataItems.subItems.map((items) => {
                            return (
                              <>
                                <li>{items.subItem}</li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  );
                })}
              </div>
            </Container>
          </MenuModal>
        
      </div>
    </>
  );
}
