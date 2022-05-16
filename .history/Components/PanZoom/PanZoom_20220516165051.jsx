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
            onClick={() => setImgState(true)}
          />
        </div>

      


        <ImageModal isOpened={imgState}>

<div>
    <p>rehenderit placeat eum aliquam, laborum veniam vero accusantium voluptatibus aut neque. Aut temporibus, doloribus modi maiores vel amet? Ea nisi harum similique!
    Qui quidem aut totam, doloremque architecto soluta omnis est veniam deserunt delectus, veritatis aliquid repudiandae blanditiis non illo nesciunt at voluptate. Et minima aliquid molestiae, veniam voluptatum porro! Saepe, cupiditate!
    Excepturi quos delectus laboriosam at dolorem maxime suscipit assumenda sint itaque incidunt commodi, ratione ipsa magni vero quas corrupti eligendi consequatur mollitia accusamus ipsum ducimus. Corrupti accusantium nisi consequatur atque.
    Ad quod optio autem culpa ipsum, ut dolores dolor iusto a inventore recusandae repellat in quo mollitia nihil quae tempore aliquam saepe dignissimos. Ab quam maiores, delectus a incidunt corrupti!</p>
</div>

        </ImageModal>
      </div>
    </>
  );
};

export default PanAndZoomImage;
