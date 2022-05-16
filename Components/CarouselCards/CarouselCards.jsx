import { useEffect, useState } from "react";


export default function CarouselCards(props) {
  const { description, children, show, infiniteLoop } = props;

  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };

  return (
    <>
      <section className="Wrapper">
        <div className="Description">
          <h3>
            {description}   <span className="StyleSeeAll">see all</span>
          </h3>
          <span className="StyleSeeAllRes" >see all</span> 
        
          <div className="ButtonsForCarousel">
          
            <button
              onClick={prev}
              className={
                isRepeating || currentIndex > 0
                  ? "left-arrow"
                  : "left-arrow-disabled"
              }
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.64 24L20.52 22.12L14.4133 16L20.52 9.88L18.64 8L10.64 16L18.64 24Z"
                  fill="#4C4C4C"
                />
              </svg>
            </button> 
            <button
              onClick={next}
              className={
                isRepeating || currentIndex < length - show
                  ? "right-arrow"
                  : "right-arrow-disabled"
              }
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.36 8L11.48 9.88L17.5867 16L11.48 22.12L13.36 24L21.36 16L13.36 8Z"
                  fill="#4C4C4C"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr />
      </section>

      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div
            className="carousel-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`carousel-content show-${show}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
                transition: !transitionEnabled ? "none" : undefined,
              }}
              onTransitionEnd={() => handleTransitionEnd()}
            >
              {length > show && isRepeating && renderExtraPrev()}
              {children}
              {length > show && isRepeating && renderExtraNext()}
            </div>
          </div>
          {/* You can alwas change the content of the button to other things */}
        </div>
      </div>
    </>
  );
}
