import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Stylecard.css'
function Voldemort() {
    return (
        <div className='style_card'>
            <div>
                <img src="https://64.media.tumblr.com/c20717545eb73bc1518327f79b7c7e04/tumblr_pdz1667Wrl1vf82cuo1_1280.png"></img>
                <NavLink to="/voldemort_state">Voldemort</NavLink>
            </div>
            <p>You see? It was a name I was already using at Hogwarts,to my most intimate friends only, of course </p>
        </div>

    )
}

export default Voldemort
