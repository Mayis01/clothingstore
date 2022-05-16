import React, { useState } from "react";
import { usePanAndZoom } from "../Hooks/usePanAndZoom/usePanAndZoom";
import ImageModal from "../Modal/ImageModal";
import MenuModal from "../Modal/MenuModal";

const PanAndZoomImage = ({ src }) => {
  const [imgState, setImgState] = useState(false);
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
            onClick={() => setImgState((modal) => !modalka)}
          />
        </div>

        
      </div>

      <ImageModal isOpened={imgState} onModalClose={setImgState(Modal)}>
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
