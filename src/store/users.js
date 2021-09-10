import { createSlice } from '@reduxjs/toolkit';

/* state
[
    {
        id: 1,
        name: 'User 1'
    }
] */

let lastId = 0; 

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name
            })
        }
    }
})
export const {userAdded} = slice.actions;
export default slice.reducer; //default object