import { configureStore } from "@reduxjs/toolkit";
import   BookReducer  from "../Features/BookSlice.js"
import  userReducer  from "../Features/userSlice.js";
import  productReducer from "../Features/productSlice.js";
import { productApi } from "../Features/ProductApi.js";




export const store = configureStore({
    reducer : {
        [productApi.reducerPath] : productApi.reducer,
        
        booksR : BookReducer,
        userR : userReducer,
        productR : productReducer,
    },

     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});




// / optional, but required for refetchOnFocus/refetchOnReconnect behaviors

// setupListeners(store.dispatch);