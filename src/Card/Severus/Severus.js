import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Stylecard.css'
function Severus() {
    return (
        <div className='style_card'>
            <div>
                <img src="https://fanfics.me/images/fanart/2020/02/27/4485261582834502.jpg"></img>
                <NavLink to="/severus_state">Severus</NavLink>
            </div>
            <p>Albus Dumbledore: "After all this time?"
                Severus Snape: "Always."
                — Severus Snape's love for Lily Evans </p>
        </div>

    )
}

export default Severus