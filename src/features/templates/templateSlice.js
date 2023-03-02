import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url = "http://localhost:8500"

export const fetchTemplates = createAsyncThunk("templates/fetchTemplates", async () => {
    try{
        const response = await axios.get(`${url}/templates`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

const templatesReducer = createSlice({
    name: "templates",
    initialState: {
        templates: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null
    },
    reducers: {
        updateTemplates: (state, action) => {
            state.templates = action.payload;
        }
    },

    extraReducers:(builder) => {
        builder
            .addCase(fetchTemplates.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTemplates.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.templates = action.payload;
            })
            .addCase(fetchTemplates.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const allTemplates = (state) => state.templates.templates;
export const getTemplateStatus = (state) => state.templates.status;
export const getTemplateError = (state) => state.templates.error;

export const { updateTemplates } = templatesReducer.actions;
export default templatesReducer.reducer;