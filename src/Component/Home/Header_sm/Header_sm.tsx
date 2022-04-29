import { Navlink } from "../../../Acronyms/NavLink";
import icon from "./picture/dress.png";

import moduleName from "./Header_sm.module.css";

export const HeaderSm = () => {
  const ImgIcon = <img src={icon} alt="" />;
  return (
    <div className={moduleName.header_sm}>
      <Navlink
        href="/charismo"
        activeClass={moduleName.HeaderActive}
        img={ImgIcon}
      />
      <Navlink
        href="/shop"
        activeClass={moduleName.HeaderActive}
        img={ImgIcon}
      />
      <Navlink
        href="/answer"
        activeClass={moduleName.HeaderActive}
        img={ImgIcon}
      />
      <Navlink
        href="/reviews"
        activeClass={moduleName.HeaderActive}
        img={ImgIcon}
      />
      <Navlink href="/k" activeClass={moduleName.HeaderActive} img={ImgIcon} />
    </div>
  );
};
