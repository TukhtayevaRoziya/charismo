import VisibilityIcon from '@material-ui/icons/Visibility'
import TimerIcon from '@material-ui/icons/Timer'

import moduleName from './Main_Block.module.css'

type PropsType = {
    picture: string
    fileType: string
    title: string
    text: string
    day: string
    view: string
}

export function MainBlock(props: PropsType) {
    return (
        <div>
            <div className={moduleName.mainBlock}>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img className={moduleName.main_img} src={props.picture} alt="" /></a>
                <div className={moduleName.information}>
                    <h3 className={moduleName.fileType}>{props.fileType}</h3>
                    <h3 className={moduleName.title}>{props.title}</h3>
                    <h3 className={moduleName.text}>{props.text}</h3>
                    <h3 className={moduleName.data}><TimerIcon /> {props.day} <b> <VisibilityIcon /> {props.view}</b></h3>
                </div>
            </div>
        </div>
    );
}
