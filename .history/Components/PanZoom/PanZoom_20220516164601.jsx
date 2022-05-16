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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi molestiae illo voluptatum nostrum enim, nam saepe architecto totam minima ducimus facilis accusamus sequi sunt quod reprehenderit eveniet voluptates quam.
    Exercitationem voluptatem quo est? Consequuntur totam expedita fuga aliquam at vero provident quae, sint eaque vitae, hic iure quidem dolorum similique, velit explicabo. Tempore ipsam quas, cumque error ad repellendus?
    Adipisci incidunt illum tenetur beatae nesciunt necessitatibus libero, consectetur ratione repellat eum, harum vel illo soluta quam. Atque, esse harum nulla id, optio nobis cupiditate ea officiis dolore repudiandae quam!
    Voluptates quos nihil fuga architecto enim tempore aperiam est nulla assumenda commodi ratione sequi ipsum officia quae, distinctio eveniet quam consequuntur necessitatibus amet? Soluta accusantium voluptatem, expedita aperiam voluptates asperiores.
    Repellat delectus amet blanditiis corrupti ea voluptatum ducimus velit molestias accusantium laborum repudiandae, culpa optio natus provident ipsa labore exercitationem, hic libero obcaecati. Enim facilis repellat perferendis officia, vitae hic.
    Maxime quam ipsam aliquam et quidem culpa dignissimos excepturi nostrum laboriosam voluptatum, quas ducimus enim voluptates optio dolorum ex. Optio repellendus ducimus quidem. Fugiat in odit numquam molestiae dignissimos repellat?
    Aperiam, neque est? Fugiat eius consequatur, pariatur asperiores ratione, totam nulla quaerat accusantium, debitis provident officiis repudiandae odio eum non eligendi repellat saepe. Ipsam neque laboriosam quidem, corrupti ipsum dolor!
    Sunt necessitatibus recusandae, porro quas commodi qui odio doloribus quia ea veniam. Eos, ex. Magni exercitationem delectus nostrum animi similique reiciendis, laborum amet, quod quo quibusdam eveniet id, dolor incidunt.
    Porro nesciunt enim eos fuga cumque maxime tenetur rerum, est doloribus quod consequuntur? Dolores omnis soluta, provident, laboriosam dolore numquam totam explicabo quo possimus quia inventore facilis reiciendis veniam. Hic!
    Rem cumque quas temporibus repellat. Dignissimos ea cum aperiam sit tempora facere similique quidem at officia illum? Dolorem fuga deleniti animi voluptate minima? Dolor tenetur praesentium beatae, repellat earum id.
    Quaerat laborum fuga architecto reprehenderit voluptatem inventore fugiat voluptates blanditiis ipsam in est ab nam non, praesentium voluptate quis obcaecati sit perspiciatis velit deleniti beatae quod magni porro doloremque! Repudiandae.
    Fuga dolor dicta eos qui quidem ducimus incidunt cum, perspiciatis dolores ipsam ea quod veritatis non rem corrupti at delectus minus nihil obcaecati. Eum magni sapiente impedit, ullam consequuntur debitis.
    Illum aperiam quam adipisci molestias, itaque quaerat minus vitae doloribus laborum quidem nostrum quasi rem voluptate laboriosam porro dicta amet voluptatibus accusantium facere? Sapiente optio fuga a quas quos ratione!
    Eius blanditiis perferendis fugit eligendi quod sequi, placeat ipsam hic tenetur laudantium assumenda corporis exercitationem iusto quae. Reiciendis ipsa adipisci eligendi consequatur, consectetur, ipsam beatae nam eaque cumque quia iste?
    Animi praesentium, quisquam quod, dignissimos doloribus laudantium, facere optio ipsam eligendi incidunt adipisci rerum ducimus officiis itaque aperiam? Deserunt asperiores voluptatibus impedit molestiae in dicta ad voluptate iste quae accusamus?
    Quibusdam quisquam eligendi culpa eos adipisci doloremque reprehenderit magnam consequatur odit repudiandae iste perferendis autem, fugit, nobis iusto accusamus sunt placeat beatae. Eius recusandae, optio repellendus expedita numquam sunt aspernatur.
    Error quidem explicabo quis alias incidunt minima corporis reprehenderit placeat eum aliquam, laborum veniam vero accusantium voluptatibus aut neque. Aut temporibus, doloribus modi maiores vel amet? Ea nisi harum similique!
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
