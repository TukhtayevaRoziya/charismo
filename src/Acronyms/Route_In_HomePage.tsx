import moduleName from './Route_In_HomePage.module.css'
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type PropsType={
    pageName:string
}

const Route_In_HomePage:FC<PropsType> = ({pageName}) => {
    return (
        <div className={moduleName.body}>
            <NavLink to='charismo'>Главная</NavLink> 
            <b>{'>'}</b>
            <h1>{pageName}</h1>
            <hr />
        </div>
    )
}

export default Route_In_HomePage

