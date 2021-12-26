import { FC } from 'react'

import star from '../../../Shop/picture/stars.png'
import moduleName from './ReviewsBlock.module.css'
import { NavLink } from 'react-router-dom';

type PropsType = {
    img: string,
    name: string,
    job: string,
    title: string,
    text: string,
    link: string,
    linkName: string,
}

export const ReviewsBlock: FC<PropsType> = ({ img, name, job, title, text, link, linkName }) => {
    return (
        <div className={moduleName.blocks}>
            <div className={moduleName.block_header}>
                <div>
                    <img className={moduleName.img} src={img} alt="" />
                </div>
                <div className={moduleName.img_text_block}>
                    <h4>{name}</h4>
                    <h5>{job}</h5>
                    <div className={moduleName.star_body}>
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            <div className={moduleName.block_main}>
                <h2>
                    {title}
                </h2>
                <h3>
                    {text}
                </h3>
                <NavLink to={link}>{linkName}</NavLink>
            </div>
        </div>);
};
