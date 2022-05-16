import React, { useState } from "react";
import { useHover } from "../Hooks/useHover";
import { usePanAndZoom } from "../Hooks/usePanAndZoom/usePanAndZoom";
import ImageModal from "../Modal/ImageModal";
import MenuModal from "../Modal/MenuModal";

const PanAndZoomImage = ({ src }) => {

    const [ref, isHovered] = useHover()
  const [modalka, setModalka] = useState(false);
  const { containerRef, onMouseDown, onWheel, translateX, translateY, scale } =
    usePanAndZoom();
  return (
    <>
      <div className="PanAndZoomImage-container" >
        <div>
          <img
            className="Image-image"
            alt="panable-and-zoomable"
            src={src}
            onClick={() => setModalka((modalka) => !modalka)}
          />
        </div>
      </div>

      <ImageModal
        isOpened={modalka}
        onModalClose={() => setModalka((modalka) => !modalka)}
      >
        <div ref={containerRef} onMouseDown={onMouseDown} onWheel={onWheel}>
          <img
            style={{
              transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
              width: "max-content",
            }}
            className="Image-image"
            alt="panable-and-zoomable"
            src={src}
          />
        </div>
      </ImageModal>
    </>
  );
};

export default PanAndZoomImage;
