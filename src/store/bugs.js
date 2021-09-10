// import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import produce from 'immer';
import { createSelector } from 'reselect';

//***********************************   Action types   *********************************************************

// const BUG_ADDED = 'BUG_ADDED';
// const BUG_REMOVED = 'BUG_REMOVED';
// const BUG_RESOLVED = 'BUG_RESOLVED';

let lastId = 0; 

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        //actions => actions handlers
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved = true
        },
        bugRemoved: (bugs, action) => {
            bugs.filter(bug => bug.id !== action.payload.id);
        },
        //assign bug to a user
        // bugAssignedToUser: (bugs, action) => {
        //     const {bugId, userId} = action.payload;
        //     const index = bugs.findIndex(bug => bug.id === bugId);
        //     bugs[index].userId = userId;
        // }
    }
})

export const {bugAdded, bugResolved, bugRemoved, bugAssignedToUser} = slice.actions;
export default slice.reducer;

// export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved)

//Memoization

//bugs => get unresolved bugs from the cache
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    // bugs => bugs.filter(bug => !bug.resolved),
    (bugs, projects) => bugs.filter(bug => !bug.resolved)
)

// const selector = getBugsByUser(1);
// selector(state => )
export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)


//***********************************   Action creators   *********************************************************

// export const bugAdded = createAction('bugAdded');

// export const bugAdded = description => ({
//     type: BUG_ADDED,
//     payload: {
//         description
//     }
// })

// export const bugRemoved = createAction('bugRemoved');

// export const bugRemoved = id => ({
//     type: BUG_REMOVED,
//     payload: {
//         id,
//     }
// })

// export const bugResolved = createAction('bugResolved');

// export const bugResolved = id => ({
//     type: BUG_RESOLVED,
//     payload: {
//         id,
//     }
// })


//******************************************   Reducer   *************************************************************
// let lastId = 0;

// export default createReducer([], {
//     //key: value
//     //actions: functions (event => event handler)
//     [bugAdded.type]: (bugs, action) => {
//         // bugs.push({
//         //     id: ++lastId,
//         //     description: action.payload.description,
//         //     resolved: false
//         // })
//     },
//     [bugRemoved.type]: (bugs, action) => {
//         // bugs.filter(bug => bug.id !== action.payload.id);
//     },
//     [bugResolved.type]: (bugs, action) => {
//         // const index = bugs.findIndex(bug => bug.id === action.payload.id)
//         // bugs[index].resolved = true
//     }
// })

//example how work createReducer 
// produce(initialState, draftState => {
//     draftState.x = 1
// })

// export default function reducer(state = [], action){
//     switch (action.type) {
//         // case BUG_ADDED:
//         case bugAdded.type:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ];
//         // case BUG_REMOVED:
//         case bugRemoved.type:
//             return state.filter(bug => bug.id !== action.payload.id);
//         // case BUG_RESOLVED:
//         case bugResolved.type:
//             return state.map(bug => 
//                 bug.id !== action.payload.id ? bug : { ...bug, resolved: true });
//         default:
//             return state;
//     }
// }