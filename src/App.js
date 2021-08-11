import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/NIghtMode/Theme';
import { GlobalStyles } from './NIghtMode/Global';

import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Dambldor from './Card/Dambldor/Dambldor';
import Voldemort from './Card/Voldemort/Voldemort';
import Severus from './Card/Severus/Severus'
import Harry from './Card/Harry/Harry';
import Harry_state from './Card/Harry/Harry_state';
import Search from './Card/Search/Search';
import Navbar from './Navbar/Navbar';
import Dambldor_state from './Card/Dambldor/Dambldor_state';
import Severus_state from './Card/Severus/Severus_state';
import Voldemort_state from './Card/Voldemort/Voldemort_state';
import Navigation from './Navigation/Navigation';
import States from './Card/States';
import Mode from './NIghtMode/Mode';
import Navlinks from './Navlinlks/Navlinks';


function App(props) {

  return (
    <BrowserRouter>


      <div className="App">
        <Navbar />
        {/* <Mode/> */}
        <div className='app-navigation'>
          <Route path='/voldemort' component={Voldemort} />
          <Route path='/search' render={()=><Search products={props.products} sukas={props.description_cards} />}/>
          <Route path='/harry' component={Harry} />
          <Route path='/dambldor' render={()=><Dambldor sukas={props.description_cards}/>} />
          <Route path='/severus' component={Severus} />
          <Route path='/navigation' component={Navigation} />
          <Route path='/theme' component={Mode} />
          <div className="">
            <Route path='/harry_state' render={()=><Harry_state harry_st={props.harry_st}/>}  />
            <Route path='/dambldor_state' component={Dambldor_state} />
            <Route path='/severus_state' component={Severus_state} />
            <Route path='/voldemort_state' component={Voldemort_state} />
            

          </div>

        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
