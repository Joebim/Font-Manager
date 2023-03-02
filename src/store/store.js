import { configureStore } from "@reduxjs/toolkit";
import fontReducer from "../features/fonts/fontReducer";
import templateReducer from "../features/templates/templateReducer";

export default configureStore({
    reducer: {
        font: fontReducer,
        templates: templateReducer,
    },
})