import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        description: "Task Capture",
    },
    {
        id: 2,
        description: "Task Isolate",
    },
    {
        id: 3,
        description: "Task Intercept",
    },
    {
        id: 4,
        description: "Task Other",
    },
];

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
