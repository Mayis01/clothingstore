import Container from "../Container/Container";
import Categories from "../../../Json/FooterCategories/FooterCategories.json";
import MailIcon from "../../Icons/MailIcon";
import PhoneIcon from "../../Icons/PhoneIcon";
import GeoIcon from "../../Icons/GeoIcon";
import SMAppsIcons from "../../Icons/SMAppsIcons";

export default function Footer() {
  return (
    <>
      <footer className="FooterWrapper">
        <Container>
          <div className="WrapperCategories">
            {Categories.map((Categorie) => {
              return (
                <>
                  <div>
                    <h3>{Categorie.desc}</h3><ul>  {Categorie.Items.map((item) => {    return <li>{item.item}</li>;  })}</ul>
                  </div>
                </>
              );
            })}
            <div>
              <h3> get in touch</h3>
              <ul>
                <>
                  <li>
                    <MailIcon />
                    example@gmail.com
                  </li>
                  <li>
                    <PhoneIcon />
                    (808) 555-0111
                  </li>
                  <li>
                    <GeoIcon />
                    Elgin St. Celina, Delaware 10299
                  </li>
                </>
              </ul>
            </div>
          </div>
          {/* <hr className="bd" /> */}

          <div className="WrapperIcons">
            <div>
              <p>© 2022 All Rights Reserved</p>
            </div>

            <SMAppsIcons />
          </div>
        </Container>
      </footer>
    </>
  );
}
