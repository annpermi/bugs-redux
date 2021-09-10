//action - is an action, that was dispatched
//next - is reference to a next middleware function, it's gonna be a reducer, which will handle this function

// const logger = (store, next, action) => {

// }

//Curring 
//N => 1
                //SNA
const logger = param => store /* or ({ getState, dispatch}) */ => next => action => {
    console.log('Logging', param);
    //specify middleware function in configureStore
    next(action) //if you not gonna call reducer, our action is not gonna cal further
}

export default logger;


/*
 Use middleware without '@reduxjs/toolkit'
1) Go to index.js
2) Register our middleware:
import { createStore, applyMiddleware } from 'redux;
import reducer from './store/reducer';

const store = createStore(reducer, applyMiddleware(logger))


applyMiddleware - this that we call a store enhancer - it's a function, which allows us to enhance our store
*/