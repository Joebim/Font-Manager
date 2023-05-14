import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { constant } from "../../global_components/constant";


export const fetchTemplates = createAsyncThunk("templates/fetchTemplates", async () => {
    try{
        const response = await axios.get(`${constant.url}/templates`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const addNewTemplate = createAsyncThunk("templates/addTemplate", async (template) => {
    try{
        const response = await axios.post(`${constant.url}/templates`, template)
        return response.data
    } catch (error) {
        console.log(error)
    }
    
})

export const deleteTemplateRequest = createAsyncThunk("templates/deleteTemplate", async (id) => {
    try{
        const response = await axios.delete(`${constant.url}/templates/${id}`)
        if(response.data){
            return id
        }

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
            .addCase(addNewTemplate.fulfilled, (state, action) => {
                console.log('action.payload', action.payload)
                state.templates.push(action.payload)
            })
            .addCase(deleteTemplateRequest.fulfilled, (state, action) => {
                state.templates = state.templates.filter((template) => template.id !== action.payload)
            })
    }
})

export const allTemplates = (state) => state.templates.templates;
export const getTemplateStatus = (state) => state.templates.status;
export const getTemplateError = (state) => state.templates.error;

export const { updateTemplates } = templatesReducer.actions;
export default templatesReducer.reducer;