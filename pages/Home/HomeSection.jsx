
import Button from "../../Components/Icons/Button/Button";
import Container from "../../Components/Layouts/Container/Container";
import { WhiteButton } from "../../Components/Icons/WhiteButton/WhiteButton";

export default function HomeSection() {
  return (
    <>
      <section>
        <Container>
          <div className="girdParent">
            <div className="Categorie1">
              <WhiteButton text="sales" width={128} />
            </div>
            <div className="Categorie2">
              <WhiteButton text="Comfortable" width={205} />
            </div>
            <div className="Categorie3">
              <WhiteButton text=" NEW ARrivals" width={205} />
            </div>
            <div className="Categorie4">
              {" "}
              <WhiteButton text=" SHOES" width={135} />
            </div>
            <div className="Categorie5">
              <WhiteButton text=" ACcessories" width={192} />
            </div>
          </div>

          <div className="ParentColls">
            <div className="Coll1">
              <div>
                <h4>Tortor convallis tristique</h4>
                <p>
                  Neque in arcu diam, feugiat ultricies tortor et. Interdum quam
                  elit.
                </p>
                <Button className="HomeSectionButton" text="VIEW COLLECTION" />
              </div>
            </div>
            <div className="Coll2">
              {" "}
              <div>
                <h4>Tortor convallis tristique</h4>
                <p>
                  Neque in arcu diam, feugiat ultricies tortor et. Interdum quam
                  elit.
                </p>
                <Button className="HomeSectionButton" text="VIEW COLLECTION" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
