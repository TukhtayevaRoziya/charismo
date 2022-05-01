import { Navlink } from "../../../Acronyms/NavLink";
import sideIcon from "../img/side_icon.png";
import korzina from "../img/korzina.png";

import moduleName from "./Main_Header.module.css";
import { ImgTitle } from "./../Img_Title/Img_Title";
import { NavLink } from 'react-router-dom';

export function BlueNavbar() {
  return (
    <div className={moduleName.navbar_header}>
      <div className={moduleName.IconAndLink}>
        <div className={moduleName.Icon}>
          <NavLink to='/charismo'> <img src={sideIcon} alt="" /></NavLink>
        </div>
        <div className={moduleName.HeaderLink}>
          <Navlink
            href="/charismo"
            activeClass={moduleName.HeaderActive}
            LinkName="Главная"
          />
          <Navlink
            href="/shop"
            activeClass={moduleName.HeaderActive}
            LinkName="Магазин"
          />
          <Navlink
            href="/answer"
            activeClass={moduleName.HeaderActive}
            LinkName="Вопросы и ответы"
          />
          <Navlink
            href="/reviews"
            activeClass={moduleName.HeaderActive}
            LinkName="Отзывы"
          />
          <Navlink
            href="/blog"
            activeClass={moduleName.HeaderActive}
            LinkName="Блог"
          />
          <Navlink
            href="/contact"
            activeClass={moduleName.HeaderActive}
            LinkName="Контакты"
          />
        </div>
      </div>
      <div className={moduleName.korzinaAndBtn}>
        <div>
          <img src={korzina} alt="" />
        </div>
        <div className={moduleName.btn_body}>
          <a href="tel:+998905280770">Перезвоните мне</a>
        </div>
      </div>
    </div>
  );
}

export const MainHeader = () => {
  return (
    <div className={moduleName.main_header}>
      <ImgTitle />
    </div>
  );
};
