import React, { useState } from 'react'
import Navigation from './Navigation'
import style from './Navigation.css'

function NavButton() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <div>
            <div className="openbtn" onClick={()=>setMenuActive(!menuActive)}> ☰ </div>
            <Navigation active={menuActive} setActive={setMenuActive}/>
        </div>
    )
}

export default NavButton
