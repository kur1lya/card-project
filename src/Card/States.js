import React from 'react'
import Dambldor_state from './Dambldor/Dambldor_state'
import Harry_state from './Harry/Harry_state'
import Voldemort_state from './Voldemort/Voldemort_state'
import Severus_state from './Severus/Severus_state'
import style from './Stylecard.css'

function States() {
    return (
        <div className='sttates'>
       <Harry_state/>
       <Voldemort_state/>
       <Severus_state/>
       <Dambldor_state/>

            
        </div>
    )
}

export default States
