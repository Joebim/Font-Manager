import { configureStore } from "@reduxjs/toolkit";
import fontsReducer from "../features/fonts/fontSlice";
import templatesReducer from "../features/templates/templateSlice";

export default configureStore({
    reducer: {
        fonts: fontsReducer,
        templates: templatesReducer,
    },
})