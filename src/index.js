import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  description_cards, products } from './massive'
import { harry_st} from './arcticles'
import {Provider} from 'react-redux'
import {store} from './Redux/index'







ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Загрузка...</div>}>
    <Provider store={store} >
      <App
        description_cards={description_cards}
        products={products}
        harry_st={ harry_st}

      />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
