import picture from "../../img/Honest_reviews/block.png"
import Titles from './../../Titles/Titles'
import { ReviewsBlock } from './ReviewsBlock'
import moduleName from './HonestReviews.module.css'

export const HonestReviews = () => {
    return (
        <div className={moduleName.Honest_reviews}>
            <div className={moduleName.body}>
                <div className={moduleName.title}>
                    <Titles title='Честные отзывы' text='клиентов, партнёров и профессионалов' />
                    <div className={moduleName.block_body}>
                        <ReviewsBlock img={picture} name={'Пашкова Алла'} job={'Врач-трихолог'} link={'/sd'} text={' «Использую Декопил в своей практике несколько лет»'} title={'Прекрасно себя показал'} linkName={'Посмотреть отзыв'} />
                        <ReviewsBlock img={picture} name={'Пашкова Алла'} job={'Врач-трихолог'} link={'/sd'} text={' «Использую Декопил в своей практике несколько лет»'} title={'Прекрасно себя показал'} linkName={'Посмотреть отзыв'} />
                        <ReviewsBlock img={picture} name={'Пашкова Алла'} job={'Врач-трихолог'} link={'/sd'} text={' «Использую Декопил в своей практике несколько лет»'} title={'Прекрасно себя показал'} linkName={'Посмотреть отзыв'} />
                    </div>
                </div>
            </div>
        </div>);
}
