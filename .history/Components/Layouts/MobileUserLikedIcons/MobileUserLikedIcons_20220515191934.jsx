import CartIcon from "../../Icons/CartIcon";
import LikedIcon from "../../Icons/LikedIcon";
import UserIcon from "../../Icons/UserIcon";

export default function MobileUserLikedIcons() {
  return (
    <>
      <div className="LayoutUserLikedIconWrapper">
        <div className="MobileIconsWrapper">

            <HomeIcon />
          <UserIcon />
          <LikedIcon />
          <CartIcon />
        </div>
      </div>
    </>
  );
}
