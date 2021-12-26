import { NavLink } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

export function RouteBlog(props: any) {
    return (<div className={props.classes.root}>
        <NavLink to={props.link}>
            <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={props.classes.grey}>
                {props.number}
            </Avatar>
        </NavLink>
    </div>);
}
