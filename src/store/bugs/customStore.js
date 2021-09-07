import reducer from './store/reducer';

function createStore(reducer) {
    let state;
    let listeners = [];

    function subscribe(listener) {
        // console.log('Store changed!')
        listeners.push(listener)
    }

    function dispatch(action) {
        //call the reducer to get the new state
        state = reducer(state, action)
        //notify the subscribers
        for(let i = 0; i < listeners.length; i++) {
            listeners[i]()
        }
    }
 
    function getState() {
        return state;
    }

    return {
        subscribe,
        getState,
        dispatch
    }
}

export default createStore(reducer);