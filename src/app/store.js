import { configureStore } from "@reduxjs/toolkit";
import   BookReducer  from "../Features/BookSlice.js"
import  userReducer  from "../Features/userSlice.js";
import  productReducer from "../Features/productSlice.js";
import { productApi } from "../Features/ProductApi.js";
import { userApiSlice } from "../Features/Counter/userApiSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";




export const store = configureStore({
    reducer : {
        [productApi.reducerPath] : productApi.reducer,
        [userApiSlice.reducerPath] : userApiSlice.reducer,

        booksR : BookReducer,
        userR : userReducer,
        productR : productReducer,
    },

     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware,userApiSlice.middleware),
});




// / optional, but required for refetchOnFocus/refetchOnReconnect behaviors

setupListeners(store.dispatch);