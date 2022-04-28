import Route_In_HomePage from '../../Acronyms/Route_In_HomePage'
import PageEnd from '../Home/PageEnd/PageEnd';
import { AnswerBox } from './AnswerBox';

import moduleName from './Answer.module.css'

export const Answer = () => {
    return (
        <>
            <div className={moduleName.answer}>
                <div className={moduleName.body}>
                    <Route_In_HomePage pageName={"Вопросы и ответы"} />
                    <div className={moduleName.block}>
                        <AnswerBox title={'Могу ли я купить виртуальный выделенный сервер (VDS) в #CloudMTS?'} />
                        <AnswerBox title={'Какие существуют способы подключения к Elastic Cloud извне?'} />
                        <AnswerBox title={'Можно ли самостоятельно управлять ресурсами Elastic Cloud: создавать виртуальные машины, настраивать сети, управлять маршрутизацией и т.д.?'} />
                        <AnswerBox title={'При необходимости реализации Disaster recovery plan, возможно ли разнести части размещаемого в Elastic Cloud ИТ-сервиса между двумя территориально разнесенными площадками?'} />
                        <AnswerBox title={'Возможна миграция в Elastic Cloud c гипервизоров MS Hyper-V, XenServer?'} />
                    </div>
                </div>
            </div>
            <div className={moduleName.pageEndBg}>
                <PageEnd />
            </div>
        </>
    )
}