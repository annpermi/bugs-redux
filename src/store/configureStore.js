import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';

// import reducer from '../bugs';
// import reducer from '../projects';
import reducer from './reducer';
import logger from './middleware/logger';
import toast from './middleware/toast';


//pass function reference
export default function(){
    // const store = createStore(reducer, devToolsEnhancer({ trace: true}));
    // return store;
    return configureStore({ 
        reducer,
        //specify middleware function
        //order matter
        middleware: [
            ...getDefaultMiddleware(),
            logger('console'),
            toast()
        ],

    });
};