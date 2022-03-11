import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import App from './containers/App';
import {Provider} from 'react-redux'
import {pokemonReducer} from './reducers/pokemonReducer'
import {logActions} from './middlewares/index'
import './index.css';

const componseAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose
const composeEnhacers = componseAlt(
    applyMiddleware(thunk, logActions))


const store = createStore(pokemonReducer,composeEnhacers)
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));
