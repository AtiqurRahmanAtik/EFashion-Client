import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter : 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
       
        state.counter = state.counter + 1
      },
      decrement: (state) => {
        if(state.counter > 0){
          state.counter = state.counter - 1
        }     
      },
      reset: (state) => {
        state.counter =   0
      },

      multipy : (state,actions) =>{
        state.counter = state.counter * actions.payload;
      }
      
    },
  })
  


  
 
  export const { increment, decrement, reset,multipy } = counterSlice.actions;
  
  export default counterSlice.reducer;