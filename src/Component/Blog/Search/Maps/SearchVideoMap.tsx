import { FC } from 'react'
import { AllMaps } from './AllMaps'

type PropsType = {
    VideoFiltered: any
}
export const SearchVideoMap:FC<PropsType> = ({VideoFiltered}) => {
    return <AllMaps filtered={VideoFiltered}/>
}
