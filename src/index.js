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

/* unsubscribe(); */
// // store.dispatch(bugRemoved(1))

// console.log(store.getState())


// import store from './customStore';
import configureStore from './store/configureStore';
import { bugAdded, bugResolved, bugRemoved, getUnresolvedBugs, bugAssignedToUser, getBugsByUser} from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();

// store.subscribe(() => {
//     console.log('Store changed!');
// });

store.dispatch((dispatch, getState) => {
    //Call API
    //When the promise is resolved => dispatch()
    // dispatch({type: 'bugsReceived', bugs: [1, 2, 3]})
    dispatch({
        type: 'error',
        payload: { message: 'An error occurred'}
    })

    //If the promise is rejected => dispatch()
    console.log(getState())
});


// store.dispatch(userAdded({ name: 'User 1'}));
// store.dispatch(userAdded({ name: 'User 2'}));

// store.dispatch(projectAdded({ name: 'Project 1'})); 
// store.dispatch(bugAdded({ description: 'Bug 1' }));
// store.dispatch(bugAdded({ description: 'Bug 2' }));
// store.dispatch(bugAdded({ description: 'Bug 3' }));

/* Create action for assigning a bug to a user: */

// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1}));

// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 3 }));

/* Create a selector for getting bugs by user: */
// const bugs = getBugsByUser(1)(store.getState());

// const unresolvedBugs = getUnresolvedBugs(store.getState());

