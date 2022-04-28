
import { NavLink } from 'react-router-dom'

import { ListType } from '../../../../types'
import moduleName from '../Search.module.css'
type PropsType = {
    filtered: any
}
export const AllMaps = (props: PropsType) => {
    return (
        <div className={moduleName.mapBody}>
            {props.filtered.map((item: ListType) => <div key={item.id} className={moduleName.body}>
                <h3 className={moduleName.newsType}>{item.newsType}</h3>
                <NavLink to={item.route}>
                    <div className={moduleName.block}>
                        <div className={moduleName.textBody}>
                            <h1>{item.name}</h1>
                        </div>
                    </div>
                </NavLink>
            </div>
            )}
        </div>
    )
}
