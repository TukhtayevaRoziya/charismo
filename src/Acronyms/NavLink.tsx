import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
    href: string
    LinkName?: string | any
    activeClass?: any
    img?: any
}

export const Navlink: FC<PropsType> = (props: PropsType) => {
    return <NavLink to={props.href} activeClassName={props.activeClass}>{props.LinkName}{props.img}</NavLink>
}
