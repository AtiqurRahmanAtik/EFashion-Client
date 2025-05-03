import { configureStore } from "@reduxjs/toolkit";
import   BookReducer  from "../Features/BookSlice.js"
import  userReducer  from "../Features/userSlice.js";


export const store = configureStore({
    reducer : {
        booksR : BookReducer,
        userR : userReducer,
    },
})