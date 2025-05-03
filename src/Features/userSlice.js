import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    user : [],
    loading : false,
    error : null,
}


export const userFetch = createAsyncThunk('user/userFetch', async()=>{

    try{

        const user = await axios.get('https://jsonplaceholder.typicode.com/users');
        const result = await user.data;
        // console.log(result)

        return result;
    }
    catch(err){
        console.error(err);
    }
})


export const createUserFetch = createAsyncThunk('user/createUserFetch', async(user)=>{
        
    try{

        const createUser = await axios.post('https://dummyjson.com/products/add', user);
        console.log(createUser)
        const result = await createUser.data;
        // console.log(result)

        return result;
    }
    catch(err){
        console.error(err);
    }
})



export const userSlice = createSlice({
    name : 'user',
    initialState ,
    reducers : {},

    extraReducers: (builder)=>{
        builder.addCase(userFetch.pending , (state)=>{
            state.loading = true;
        })
        .addCase(userFetch.fulfilled, (state, actions)=>{
            state.loading = false;
            state.user = actions.payload;
            state.error = null
        })
        .addCase(userFetch.rejected, (state, actions)=>{
            state.loading = false;
            state.error = actions.error.message;
        });

        builder.addCase(createUserFetch.fulfilled, (state, actions)=>{
          
        state.loading = false;
        state.user.push(actions.payload);
        state.error = null
        })

    }

    

})



export default userSlice.reducer;