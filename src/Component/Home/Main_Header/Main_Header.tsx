import { Navlink } from '../../../Acronyms/NavLink'
import { Img_Title } from '../Img_Title/Img_Title'
import sideIcon from '../img/side_icon.png'
import korzina from '../img/korzina.png'

import moduleName from './Main_Header.module.css'


export function BlueNavbar() {
    return (<div className={moduleName.navbar_header }>
        <div className={moduleName.IconAndLink}>
            <div className={moduleName.Icon}>
                <img src={sideIcon} alt="" />
            </div>
            <div className={moduleName.HeaderLink}>
                <Navlink href="/charismo" activeClass={moduleName.HeaderActive} LinkName="Главная" />
                <Navlink href="/shop" activeClass={moduleName.HeaderActive} LinkName="Магазин" />
                <Navlink href="/answer" activeClass={moduleName.HeaderActive} LinkName="Вопросы и ответы" />
                <Navlink href="/reviews" activeClass={moduleName.HeaderActive} LinkName="Отзывы" />
                <Navlink href="/k" activeClass={moduleName.HeaderActive} LinkName="Контакты" />
            </div>
        </div>
        <div className={moduleName.korzinaAndBtn}>
            <div>
                <img src={korzina} alt="" />
            </div>
            <div className={moduleName.btn_body}>
                <Navlink href="/mne" LinkName="Перезвоните мне" />
            </div>
        </div>
    </div>);
}


export const Main_Header = () => {
    return (
        <div className={moduleName.main_header}>
            <Img_Title />
        </div>
    )
}
