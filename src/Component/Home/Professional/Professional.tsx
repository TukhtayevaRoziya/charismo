import React from 'react'
import moduleName from './Professionaol.module.css'
import { NavLink } from 'react-router-dom';

const Professional = () => {
    return (
        <div className={moduleName.body}>
            <h1 className={moduleName.title}>Вы профессионал индустрии красоты?</h1>
            <p className={moduleName.text}>Узнайте, как увеличить свой доход при помощи партнёрства с надёжной компанией</p>
            <NavLink to={'/sdgshg'} activeClassName={moduleName.activedBtn} className={moduleName.btn}>
            Узнать подробнее
            </NavLink>
        </div>
    )
}

export default Professional
