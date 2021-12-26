import VisibilityIcon from '@material-ui/icons/Visibility'
import TimerIcon from '@material-ui/icons/Timer'
import { Route } from 'react-router-dom'

import Route_In_HomePage from '../../Acronyms/Route_In_HomePage'

import adidas from './picture/adidas.png'
import hand from './picture/hand.png'
import build from './picture/build.png'
import dress from './picture/blackDress.jpg'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { RouteBlog } from './RouteBlog'
import moduleName from './Blog.module.css'

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

let map = [
    {
        id: 0, picture: adidas, fileName: 'VIDEO', title: 'Happy Cover By Kings Road',
        text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …',
        day: 'April 11, 2018', view: '527 views'
    },
    {
        id: 1, picture: hand, fileName: 'VIDEO', title: 'Happy Cover By Kings Road',
        text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …',
        day: 'April 11, 2018', view: '527 views'
    },
    {
        id: 2, picture: build, fileName: 'VIDEO', title: 'Happy Cover By Kings Road',
        text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …',
        day: 'April 11, 2018', view: '527 views'
    },
    {
        id: 3, picture: dress, fileName: 'VIDEO', title: 'Happy Cover By Kings Road',
        text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …',
        day: 'April 11, 2018', view: '527 views'
    },
    {
        id: 4, picture: hand, fileName: 'VIDEO', title: 'Happy Cover By Kings Road',
        text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …',
        day: 'April 11, 2018', view: '527 views'
    },
    {
        id: 5, picture: build, fileName: 'VIDEO', title: 'Happy Cover By Kings Road',
        text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …',
        day: 'April 11, 2018', view: '527 views'
    },
]

let mainBlockMap = map.map((m: any) => <div>
    <div className={moduleName.mainBlock}>
        <img src={m.picture} alt="" />
        <div className={moduleName.information}>
            <h3 className={moduleName.fileType}>{m.fileType}</h3>
            <h3 className={moduleName.title}>{m.title}</h3>
            <h3 className={moduleName.text}>{m.text}</h3>
            <h3 className={moduleName.data}><TimerIcon /> {m.day} <b> <VisibilityIcon /> {m.view}</b></h3>
        </div>
    </div>
</div>)


const BLog = () => {
    const classes = useStyles();
    return (
        <div className={moduleName.body}>
            <div className={moduleName.blog}>
                <Route_In_HomePage pageName={'Блог'} />
                <Route exact path={'/blog'} render={() => <MainBlock />} />
                <Route exact path={'/blog/2'} render={() => <MainBlock2 />} />
                <Route exact path={'/blog/3'} render={() => <MainBlock3 />} />
                <Route exact path={'/blog/4'} render={() => <MainBlock4 />} />
                <RouteBlog classes={classes} number={1} link={'/blog'}/>
                <RouteBlog classes={classes} number={2} link={'/blog/2'}/>
                <RouteBlog classes={classes} number={3} link={'/blog/3'}/>
                <RouteBlog classes={classes} number={4} link={'/blog/4'}/>
            </div>
        </div>
    )
}

export default BLog

const MainBlock = () => {
    return <>{mainBlockMap}</>
}

const MainBlock2 = () => {
    return <>I`m main blog 2</>
}

const MainBlock3 = () => {
    return <>I`m main blog 3</>

}
const MainBlock4 = () => {
    return <>I`m main blog 4</>
}
