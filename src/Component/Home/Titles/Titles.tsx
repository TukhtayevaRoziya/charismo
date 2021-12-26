import {  FC } from 'react';

import moduleName from './Titles.module.css'

type PropsType = {
    title: string
    text: string
}

const Titles: FC<PropsType> = ({ title, text }) => {
    return (
        <><h1  className={moduleName.title}>{title}</h1> 
            <p className={moduleName.text}>{text}</p>
        </>
    )
}
debugger

export default Titles
