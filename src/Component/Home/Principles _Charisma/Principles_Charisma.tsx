import Icon_1 from '../img/Priniciples_Icon_1.png'
import Icon_2 from '../img/Priniciples_Icon_2.png'
import Icon_3 from '../img/Priniciples_Icon_3.png'

import { EffectiveSolutions } from './EffectiveSolutions'
import { HonestReviews } from './HonestReviews/HonestReviews'
import OurPartners from './OurPartners/OurPartners'
import Titles from './../Titles/Titles'
import Blocks from './Blocks/Blocks'

import moduleName from './Principles_Charisma.module.css'



export const Principles_Charisma = () => {
    return (
        <>
            <div className={moduleName.Principles_Charisma}>
                <div className={moduleName.title}>
                    <Titles title='Принципы Charismo'
                        text='7 лет мы создаем работающие решения для терапии структуры и корней волос.
                    Благодаря принципам работы нас рекомендуют врачи и профессионалы индустрии
                    красоты.'/>

                    <div className={moduleName.block_body}>

                        <Blocks Icon={Icon_1} title='Натуральность'
                            text=' Мы не используем гормоны — забудьте о синдроме отмены и проблемах со здоровьем
                                из-за побочных эффектов'/>

                        <Blocks Icon={Icon_2} title='Эффективность'
                            text='Проверена клиническими исследованиями в США, Европе и России, и тысячами довольных клиентов' />

                        <Blocks Icon={Icon_3} title='Безопасность'
                            text=' Производится в США на сертифицированном FDA производстве из ингредиентов, прошедших GMP аттестацию' />

                    </div>
                </div>
            </div>
            <EffectiveSolutions />

            <HonestReviews/>
            <OurPartners />
        </>
    )
}
