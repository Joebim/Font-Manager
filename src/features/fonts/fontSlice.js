import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url = "http://localhost:8500"

export const fetchFonts = createAsyncThunk("fonts/fetchFonts", async () => {
    try{
        const response = await axios.get(`${url}/fonts`)
        return response.data
    } catch (error) {
        console.log(error)
    }
    
})

const fontsReducer = createSlice({
    name: "fonts",
    initialState: {
        fonts: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null
    },
    reducers: {
        updateFonts: (state, action) => {
            state.fonts = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchFonts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchFonts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.fonts = action.payload;
            })
            .addCase(fetchFonts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const allFonts = (state) => state.fonts.fonts;  
export const getFontStatus = (state) => state.fonts.status;
export const getFontError = (state) => state.fonts.error;

export const { updateFonts } = fontsReducer.actions;
export default fontsReducer.reducer;