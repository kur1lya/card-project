import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Stylecard.css'
function Dambldor(props) {


    return (
        <div className='style_card'>
            <div >
                <img src="https://i.pinimg.com/originals/8b/cb/57/8bcb5740e768d5b9f22a074b5bf13b55.png"></img>
                <NavLink to="/dambldor_state">Albus Dumbledore</NavLink>
            </div>
            <p>Albus Dumbledore was never proud or vain;
                he could find something to value in anyone,however apparently insignificant or wretched</p>
        </div>


    )
}

export default Dambldor
