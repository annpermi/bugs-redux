import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';

// import reducer from './reducer';
import reducer from '../bugs';


//pass function reference
export default function(){
    // const store = createStore(reducer, devToolsEnhancer({ trace: true}));
    // return store;
    return configureStore({ reducer });
};