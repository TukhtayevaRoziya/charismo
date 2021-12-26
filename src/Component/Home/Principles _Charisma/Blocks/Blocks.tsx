import { FC } from 'react'

import moduleName from './Block.module.css'

type PropsType = {
    Icon: string
    title: string
    text: string
}

const Blocks: FC<PropsType> = ({ Icon, title, text }) => {
    return (
        <div className={moduleName.block_1}>
            <div className={moduleName.Block_img}>
                <img src={Icon} alt="" />
            </div>
            <div className={moduleName.Block_Title}>
                <h1>{title}</h1>
            </div>
            <div className={moduleName.Block_Text}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Blocks
