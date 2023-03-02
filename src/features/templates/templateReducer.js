import { createSlice } from "@reduxjs/toolkit";

const templatesReducer = createSlice({
    name: "templates",
    initialState: {
        templates: [],
    },
    reducers: {
        updateTemplates: (state, action) => {
            state.templates = action.payload;
        }
    }
})

export const { updateTemplates } = templatesReducer.actions;
export default templatesReducer.reducer;