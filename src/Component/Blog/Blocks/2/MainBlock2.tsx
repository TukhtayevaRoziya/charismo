import { FC } from 'react'

import { MainBlock } from '../../Main_Block/MainBlock'
import { MapType } from '../../../../types'


type PropsType = {
    map: MapType[]
}

export const MainBlock2: FC<PropsType> = ({ map }) => {

    const mapOne = map.map(o => <MainBlock key={o.id} day={o.day} fileType={o.fileType} picture={o.picture}
        title={o.title} text={o.text} view={o.view} />
    )

    return (
        <>
            {mapOne}
        </>
    )
}
