import {configureStore } from '@reduxjs/toolkit';

import courseSliceReducer from './Slice/courseSlice';
import authSliceReducer from './Slices/AuthSlice.js';
const store = configureStore({
    reducer:{
        auth: authSliceReducer,
        course: courseSliceReducer
    },
    devTools: true
})
export default store;