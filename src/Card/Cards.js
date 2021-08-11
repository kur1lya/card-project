import React from 'react'
import style from './Stylecard.css'

function Cards(props) {
    return (
        <div className="element_cards">
            {props.category}    
        </div>
    )
}

export default Cards
