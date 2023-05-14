import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { constant } from "../../global_components/constant";


export const fetchFonts = createAsyncThunk("fonts/fetchFonts", async () => {
    try{
        const response = await axios.get(`${constant.url}/fonts`)
        return response.data
    } catch (error) {
        console.log(error)
    }
    
})

export const addNewFonts = createAsyncThunk("fonts/addFonts", async (font) => {
    try{
        const response = await axios.post(`${constant.url}/fonts`, font)
        return response.data
    } catch (error) {
        console.log(error)
    }
    
})

export const deleteFontRequest = createAsyncThunk("fonts/deleteFont", async (id) => {
    try{
        const response = await axios.delete(`${constant.url}/fonts/${id}`)
        if(response.data){
            return id
        }

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
            .addCase(addNewFonts.fulfilled, (state, action) => {
                console.log('action.payload', action.payload)
                state.fonts.push(action.payload)
            })
            .addCase(deleteFontRequest.fulfilled, (state, action) => {
                    state.fonts = state.fonts.filter(font => font.id !== action.payload)
            })
            
    }
})

export const allFonts = (state) => state.fonts.fonts;  
export const getFontStatus = (state) => state.fonts.status;
export const getFontError = (state) => state.fonts.error;

export const { updateFonts } = fontsReducer.actions;
export default fontsReducer.reducer;