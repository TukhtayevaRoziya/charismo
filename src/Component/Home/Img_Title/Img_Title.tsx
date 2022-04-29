import Titles from "../Titles/Titles";
import moduleName from "./Img_Title.module.css";
import { NavLink } from "react-router-dom";

export const ImgTitle = () => {
  return (
    <div className={moduleName.HeaderTextBody}>
      <div className={moduleName.TitleBody}>
        <Titles
          title="Инновации на службе ваших волос"
          text="Эффективные решения против выпадения и для роста волос, рекомендуемые профессионалами"
        />
        <div className={moduleName.bg_img}></div>
        <NavLink className={moduleName.btn_click_body} to={"/btn"}>
          <button>В магазин ➡</button>
        </NavLink>
      </div>
    </div>
  );
};
