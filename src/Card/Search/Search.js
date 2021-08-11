import React, { useState, useReducer } from 'react'
import style from './Search.css'
import Cards from '../Cards'
import { searchReducer, defaultState, actions } from '../../Redux/searchReducer';

function Search(props) {
    

    const [state, dispatch] = useReducer(searchReducer, defaultState);


    const filteredCards = props.products.filter(tovar => {
        return tovar.name.toLowerCase().includes(state.value.toLowerCase())
    })

    let productsElement =
        filteredCards.map(p => <Cards category={p.category} name={p.name} />)



    return (
        <div className='search_card'>
            <div className="input_style">
                <input className='input' type='text' placeholder='search 🔍' value={state.value}
                    onChange={(event) => dispatch({ type: actions.SET_SEARCH, payload: event.target.value })}></input>
            </div>
            <div id="cerd">
                {productsElement}
            </div>

        </div>
    )
}






export default Search





