import { createSlice } from "@reduxjs/toolkit";

const fontseducer = createSlice({
    name: "fonts",
    initialState: {
        fonts: [],
    },
    reducers: {
        updateFonts: (state, action) => {
            state.fonts = action.payload;
        }
    }
})

export const { updateFonts } = fontseducer.actions;
export default fontseducer.reducer;