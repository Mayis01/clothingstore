import React, { useState } from "react";
import { usePanAndZoom } from "../Hooks/usePanAndZoom/usePanAndZoom";
import ImageModal from "../Modal/ImageModal";
import MenuModal from "../Modal/MenuModal";

const PanAndZoomImage = ({ src }) => {
  const [modalka, setModalka] = useState(false);
  const { containerRef, onMouseDown, onWheel, translateX, translateY, scale } =
    usePanAndZoom();
  return (
    <>
      <div
        className="PanAndZoomImage-container"
        //   ref={containerRef}
        //   onMouseDown={onMouseDown}
        //   onWheel={onWheel}
      >
        <div
          style={{
            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            width: "max-content",
          }}
        >
          <img
            className="Image-image"
            alt="panable-and-zoomable"
            src={src}
            onClick={() => setImgState((modalka) => !modalka)}
          />
        </div>

        
      </div>

      <ImageModal isOpened={imgState} onModalClose={setImgState((modalka) => !modalka)}>
          <div>
            <img
              className="Image-image"
              alt="panable-and-zoomable"
              src={src}
              onClick={() => setImgState(false)}
            />
          </div>
        </ImageModal>
    </>
  );
};

export default PanAndZoomImage;
