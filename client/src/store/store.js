import { configureStore } from "@reduxjs/toolkit";
import fontsReducer from "../features/fonts/fontSlice";
import templatesReducer from "../features/templates/templateSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { combineReducers } from "redux";

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
  }

  const rootReducer = combineReducers({ 
    fonts: fontsReducer,
    templates: templatesReducer
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)