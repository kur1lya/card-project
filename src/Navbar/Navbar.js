import React from 'react'
import style from './Navbar.css'
import { NavLink } from 'react-router-dom'
import NavButton from '../Navigation/NavButton'
import Navlinks from '../Navlinlks/Navlinks'
import Mode from '../NIghtMode/Mode'


function Navbar(props) {
    return (

        <div className="navbar">
            <div><NavButton /></div>
            <div className='navbar_links'><Navlinks /></div>
            <div><Mode /></div>



        </div>
    )
}

export default Navbar

