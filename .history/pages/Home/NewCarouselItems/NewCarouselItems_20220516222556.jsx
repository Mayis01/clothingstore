import Image from "next/image";
import PanAndZoomImage from "../../../Components/PanZoom/PanZoom"
import CarouselCards from "../../../Components/CarouselCards/CarouselCards";

import Button from "../../../Components/Icons/Button/Button";
import CartIcon from "../../../Components/Icons/CartIcon";
import LikedIcon from "../../../Components/Icons/LikedIcon";
import Container from "../../../Components/Layouts/Container/Container";
import CardImage from "../../../images/CardImage.png";
// import newArrivals from "../../../Json/NewArrivals/newArrivals.json";

export default function NewCarouselItems({ Data, description }) {
  const ResponseData = Data.filter((Card, index) => {
    return index <= 3;
  });
  // const [AbsolutevHover, isHovered] = useHover();
  // const [help, setHelp] = useState(false)

  // let width = widthWindow !== 0;

  // console.log(width);

  const CalcPercent = (price, oldPrice) => {
    return Math.ceil(100 - (price * 100) / oldPrice);
  };

  return (
    <>
      <Container>
        {/* Desktop Cart Design */}
        <CarouselCards show={4} infiniteLoop={true} description={description}>
          {Data.map((arrival) => {
            return (
              <div className="Card " key={arrival.CardId}>
                <div className={"img"}>
                  <div className="cardIcons">
                    <div style={{ display: "flex" }}>
                      <LikedIcon />
                      <CartIcon className="CartIcon" />
                    </div>
                  </div>

                 <PanAndZoomImage src={"https://i.ibb.co/RPTbPXj/unsplash-JDN-FIq-B3k.jpg"}  />

                  {arrival.oldPrice &&
                    CalcPercent(arrival.price, arrival.oldPrice) > 0 && (
                      <div className="discountPercent">
                        SALE {CalcPercent(arrival.price, arrival.oldPrice)}%{" "}
                      </div>
                    )}
                </div>
                <h2>
                  {arrival.cardDescription.length <= 15
                    ? arrival.cardDescription
                    : arrival.cardDescription.slice(0, 15) + "..."}
                </h2>
                <div className="price">
                  <p>{arrival.price}$</p>
                  <del>
                    {arrival.oldPrice &&
                      arrival.oldPrice > arrival.price &&
                      arrival.oldPrice + `$`}
                  </del>
                </div>
                <Button text="add co card" className="CardResponseButton" />
                <Button
                  text={null}
                  className="CardResponseButtonMobile"
                  arrow={false}
                  withCartIcon={true}
                />{" "}
              </div>
            );
          })}
        </CarouselCards>

        {/* Mobile Cart Design */}

        <div className="ResponseWrapper">
          <div className="ResponseCardWrapper">
            {ResponseData.map((arrival) => {
              return (
                <div className="Card " key={arrival.CardId}>
                  <div className={"img"}>
                    <div className="cardIcons">
                      <div style={{ display: "flex" }}>
                        <LikedIcon />
                        <CartIcon className="CartIcon" />
                      </div>
                    </div>

                    <Image
                      src={CardImage}
                      alt="Card Image"
                      className="CardsImg"
                      loading={"lazy"}
                    />

                    {arrival.oldPrice &&
                      CalcPercent(arrival.price, arrival.oldPrice) > 0 && (
                        <div className="discountPercent">
                          SALE {CalcPercent(arrival.price, arrival.oldPrice)}%{" "}
                        </div>
                      )}
                  </div>
                  <h2>
                    {arrival.cardDescription.length <= 12
                      ? arrival.cardDescription
                      : arrival.cardDescription.slice(0, 12) + "..."}
                  </h2>
                  <div className="price">
                    <p>{arrival.price}$</p>
                    <del>
                      {arrival.oldPrice &&
                        arrival.oldPrice > arrival.price &&
                        arrival.oldPrice + `$`}
                    </del>
                  </div>
                  <Button text={"add co card"} className="CardResponseButton" />
                  <Button
                    text={null}
                    className="CardResponseButtonMobile"
                    arrow={false}
                    withCartIcon={true}
                  />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </Container>

    
    </>
  );
}
