// import store from './store/store';
// import { bugAdded, bugResolved, bugRemoved } from './store/actions';

// //state = reducer(state, action);
// //notify the subscribers

// //notify when store get changed
// /* const unsubscribe = store.subscribe(() => {
//     console.log('Store changed', store.getState())
// }) */

// store.dispatch(bugAdded('Bug 1'))
// store.dispatch(bugAdded('Bug 2'))
// store.dispatch(bugResolved(2))
// store.dispatch(bugRemoved(1))

// //when second time store will get changed, we will not get the msg, because ww call unsubscribe() before

// /* unsubscribe(); */
// // store.dispatch(bugRemoved(1))


// console.log(store.getState())


// import store from './customStore';
import configureStore from './store/bugs/configureStore';
import * as actions from './store/bugs';

const store = configureStore();

store.subscribe(() => {
    console.log('Store changed!');
});

store.dispatch(actions.bugAdded({ description: 'Bug 1' }))
store.dispatch(actions.bugAdded({ description: 'Bug 2' }))
store.dispatch(actions.bugAdded({ description: 'Bug 3' }))
store.dispatch(actions.bugResolved({ id: 1 }))
store.dispatch(actions.bugRemoved({ id: 1 }))

console.log(store.getState())
