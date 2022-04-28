import { NavLink } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        grey: {
            color: '#728399',
            backgroundColor: 'rgba(35, 137, 255, 0.1)',
            textDecoration: 'none'
        },
    }),
);

type PropsType = {
    number: number
    link: string
}

export function RouteBlog(props: PropsType) {
    const classes = useStyles();

    return (<div className={classes.root}>
        <NavLink to={props.link}>
            <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.grey}>
                {props.number}
            </Avatar>
        </NavLink>
    </div>);
}
