import { Navlink } from '../../../Acronyms/NavLink'
import icon from './picture/dress.png'

import moduleName from './Header_sm.module.css'


export const Header_sm = () => {
    return (<div className={moduleName.header_sm}>
        <Navlink href="/charismo" activeClass={moduleName.HeaderActive} img={<img src={icon} />} />
        <Navlink href="/shop" activeClass={moduleName.HeaderActive} img={<img src={icon} />} />
        <Navlink href="/answer" activeClass={moduleName.HeaderActive} img={<img src={icon} />} />
        <Navlink href="/reviews" activeClass={moduleName.HeaderActive} img={<img src={icon} />} />                
        <Navlink href="/k" activeClass={moduleName.HeaderActive} img={<img src={icon} />} />
    </div>)
}
