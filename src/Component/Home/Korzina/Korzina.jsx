import React from 'react'

import korzina from "../img/korzina.png"

export const korzinas = [
    { id: 1, name: "bla", src: korzina, sum: 200 }
]

export const Korzina = ({ src, name, sum }) => {



    const map = korzinas.map(k => <div key={k.id} >
        
        <img src={k.src} alt="" />
        <h1>{k.name}</h1>
        <h4>{k.sum}</h4>
    </div>)
    return (
        <div>
            {map}
        </div>
    )
}

