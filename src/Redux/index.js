import { applyMiddleware, compose } from 'redux';
import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './searchReducer';




const rootReducers = combineReducers({
    search: searchReducer,

})


export const store = createStore(rootReducers,
    //reduxDevTools
    compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))


