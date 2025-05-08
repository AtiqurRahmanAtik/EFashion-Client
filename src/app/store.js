import { configureStore } from "@reduxjs/toolkit";
import   BookReducer  from "../Features/BookSlice.js"
import  userReducer  from "../Features/userSlice.js";
import  productReducer from "../Features/productSlice.js";


export const store = configureStore({
    reducer : {
        booksR : BookReducer,
        userR : userReducer,
        productR : productReducer,
    },
})