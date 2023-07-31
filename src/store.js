// import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentslice";
export const  store1 = configureStore(
    {
        reducer:{
            student:studentReducer,
        },
        devTools:true
    }
)