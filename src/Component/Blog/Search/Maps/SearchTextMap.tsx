import { FC } from 'react'
import { AllMaps } from './AllMaps'

type PropsType = {
    TextFiltered: any
}

export const SearchTextMap:FC<PropsType> = ({TextFiltered}) => {
    return <AllMaps filtered={TextFiltered}/>
}