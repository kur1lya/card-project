import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Stylecard.css'

function Harry() {
    return (
        <div className='style_card'>
            <div className="">
                <img src="https://i.insider.com/5b885d582badb94b8d36d9ed?width=700"></img>
                <NavLink to="/harry_state">Harry</NavLink>
            </div>
            <p>"You are protected, in short, by your ability to love!
             The only protection that can possibly work against the lure of power like Voldemort's! </p>
        </div>
    )
}

export default Harry
