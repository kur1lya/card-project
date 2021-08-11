import React, { useState } from 'react'
import Navlinks from '../Navlinlks/Navlinks';
import styles from './Navigation.css'


function Navigation(props) {


    function updateBodyStyles() {
        if (props.active) {
            document.body.style.overflow = "hidden";
            // document.getElementById('cerd').style.filter = 'blur(4px)'
        } else {
            document.body.style.overflow = "visible";
            // document.getElementById('cerd').style.filter = 'blur(-1px)'

        }
    }

    updateBodyStyles()
    let homeClasses = (props.active ? 'sidenav active' : 'sidenav')

    return (
        <div className={homeClasses} onClick={() => props.setActive(false)}>
            <div className='nav_windov'>
                <Navlinks />
            </div>

        </div>
    )
}

export default Navigation



