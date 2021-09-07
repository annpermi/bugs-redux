import { createSlice } from '@reduxjs/toolkit';

/* state
[
    {
        id: 1,
        name: 'Project 1'
    }
] */

let lastId = 0; 

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (project, action) => {
            project.push({
                id: ++lastId,
                name: action.payload.name
            })
        }
    }
})
export const {projectAdded} = slice.actions;
export default slice.reducer;