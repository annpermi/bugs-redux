import * as actions from './actionTypes';

// []
let lastId = 0;

//when we start our app, it will call the state and set as undefine, and we will reassign to empty array
export default function reducer(state = [], action){
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_RESOLVED:
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
                // {
                // if(bug.id === action.payload.id){
                //     bug.resolved = true
                // }
                // return bug;
                // }
            );
        default:
            return state;
    }
    // if(action.type === 'BUG_ADDED')
    // return [
    //     ...state,
    //     {
    //         id: ++lastId,
    //         description: action.payload.description,
    //         resolved: false
    //     }
    // ];
    // else if (action.type === 'BUG_REMOVED')
    // return state.filter(bug => bug.id !== action.payload.id);

    // return state;
}