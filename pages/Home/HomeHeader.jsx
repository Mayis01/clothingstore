import { Carousel } from "react-bootstrap";
import HomeHeaderData from "../../Json/HomeHeader/homeHeader.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Container from "../../Components/Layouts/Container/Container";
import Button from "../../Components/Icons/Button/Button";

export default function HomeHeader() {
  return (
    <>
      <section>
        <Carousel>
          {HomeHeaderData.map((item) => {
            return (
              <Carousel.Item interval={5000} key={item.id}>
                <div className="Layer"></div>
                <div className="HeaderBG">
                  <img
                    src={item.img}
                    alt={item.alt}
                    layout={"fill"}
                    loading={"lazy"}

                    className="NoResponse"
                  ></img>

                  <img
                    src={item.ResImg}
                    alt={item.alt}
                    layout={"fill"}
                    loading={"lazy"}
                    className="Response"
                  ></img>

                  <Container>
                    <div className="boxH1">
                      <h1>{item.h1}</h1>
                      <h2>{item.h2}</h2>
                      <Button className="HomeHeaderButton" text="shop now" />
                    </div>{" "}
                  </Container>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </>
  );
}
