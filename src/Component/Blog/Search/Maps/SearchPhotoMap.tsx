import { FC } from 'react'
import { AllMaps } from './AllMaps'

type PropsType = {
    PhotoFiltered: any
}

export const SearchPhotoMap:FC<PropsType> = ({PhotoFiltered}) => {
    return <AllMaps filtered={PhotoFiltered}/>
}