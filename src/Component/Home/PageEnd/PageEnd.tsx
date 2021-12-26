
import odnoklassniki from './picture/odnoklassniki1.png'
import instagram from './picture/instagram1.png'
import facebook from './picture/facebook1.png'
import icon from './picture/icon.png'
import vk from './picture/vk1.png'

import style from './PageEnd.module.css'

// import { Field } from 'redux-form'

// import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { NavLink } from 'react-router-dom';

const PageEnd = () => {
    return (
        <div className={style.body}>
            <div className={style.PageEnd}>
                <div className={style.block1 + ' ' + style.block_1}>
                    <img className={style.img} src={icon} alt="" />
                    <p className={style.text}>Инновационные решения для восстановления, питания и уходу за волосами головы, бровей и бороды</p>
                    <h1 className={style.title}>Следите за нами в соц сетях</h1>
                    <div className={style.socialNetwork}>
                        <a className={style.link} href={'https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313664978099%7Ce%7Cfacebook%20%27%7C&placement=&creative=313664978099&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402566414%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIqYbAq6zm7wIVFW8YCh2ROg7UEAAYASAAEgLqw_D_BwE'}
                            target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook img" /></a>
                        <a className={style.link} href={'https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313664978099%7Ce%7Cfacebook%20%27%7C&placement=&creative=313664978099&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402566414%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIqYbAq6zm7wIVFW8YCh2ROg7UEAAYASAAEgLqw_D_BwE'}
                            target="_blank" rel="noopener noreferrer"><img src={odnoklassniki} alt="Odnoklassniki img" /></a>
                        <a className={style.link} href={'https://www.instagram.com/?hl=ru'}
                            target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram img" /></a>
                        <a className={style.link} href={'https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313664978099%7Ce%7Cfacebook%20%27%7C&placement=&creative=313664978099&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402566414%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIqYbAq6zm7wIVFW8YCh2ROg7UEAAYASAAEgLqw_D_BwE'}
                            target="_blank" rel="noopener noreferrer"><img src={vk} alt="VK img" /></a>
                    </div>
                    <p className={style.Copyright}>Copyright © 2021 Charismo Russia</p>
                </div>
                <div className={style.block1 + ' ' + style.block_2}>
                    <div className={style.blocks_group}>
                        <div className={style.otherPageLinks}>
                            <h1>Страницы</h1>
                            <NavLink activeClassName={style.otherLinkActive} to='/charismo'>Главная</NavLink>
                            <NavLink activeClassName={style.otherLinkActive} to='/shop'>Магазин</NavLink>
                            <NavLink activeClassName={style.otherLinkActive} to='/answer'>Вопросы и ответы</NavLink>
                            <NavLink activeClassName={style.otherLinkActive} to='/reviews'>Отзывы</NavLink>
                            <NavLink activeClassName={style.otherLinkActive} to='/contact'>Контакты</NavLink>
                        </div>
                        <div className={style.otherProductLinks + " " + style.sm}>
                            <h1>Продукты</h1>
                            <NavLink activeClassName={style.otherLinkActive} to='/dekobrow'>Dekobrow</NavLink>
                            <NavLink activeClassName={style.otherLinkActive} to='/dekoHai'>DekoHair</NavLink>
                            <NavLink activeClassName={style.otherLinkActive} to='/dekoPill'>DekoPill</NavLink>
                            <NavLink activeClassName={style.otherLinkActive} to='/dekoBeard'>DekoBeard</NavLink>
                        </div>
                        <div className={style.otherProductLinks}>
                            <h1>Будьте в курсе всех новостей</h1>
                            <input className={style.emailField} type="email" name="" id="" placeholder={'Ваш E-mail'} maxLength={40} />
                            <button className={style.btn} type="button">Подписаться</button>
                        </div>
                    </div>
                    <h1 className={style.otherLinkEndText}>Политика обработки персональных данных</h1>
                </div>
            </div>
        </div>
    )
}

export default PageEnd

// const maxLength20 = maxLengthCreator(20, 5)

// const PageEndForm = () => {
//     return (
//         <>
//             <form>
//                 <Field name={'name'} component={'input'} validate={[required, maxLength20]} />
//             </form>
//         </>
//     )
// }