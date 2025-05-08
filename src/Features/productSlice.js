import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    product : [],
    cardProduct: [],
    isLoading : false,
    error : null,
    quantity : 1,
}


// fetch Product Data here
   export const productFetch = createAsyncThunk ('product/productFetch', async()=>{

    try{
        const product = await axios.get('http://localhost:5000/api/product');
       
        

        return  await product.data;
    }
    catch(err){
        console.error(err);
    }
  }) 


//   single Product Get api here 

export const singleProductFetch = createAsyncThunk ('product/singleProductFetch', async(data)=>{

    // console.log(data)

    try{
        const product = await axios.get(`http://localhost:5000/api/product/${data}`);
       
        console.log(product)

        return  await product.data;
    }
    catch(err){
        console.error(err);
    }
  }) 


     
  


    // productSlice Here
 export const productSlice = createSlice({
    name : 'product',
    initialState ,
    reducers : {
        addToCard : (state,action)=>{

            const existingProduct = state.cardProduct.find((item)=>item.id === action.payload.id);

            // console.log(existingProduct)

            if(existingProduct){
                    existingProduct.quantity ++ ;
            }
            else{
                const product = action.payload;
                const totalquantity = state.quantity
                state.cardProduct.push({product, totalquantity })
            }
            // state.product =  action.payload;
            // console.log(state.quantity)

           
        }
    },

    extraReducers : ( builder)=>{
        builder.addCase(productFetch.pending , (state)=>{
            state.isLoading = true;
           
        })
        .addCase(productFetch.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.product =action.payload;
            
        })
        .addCase(productFetch.rejected, (state,action)=>{
            state.isLoading = false,
            state.error = action.error.message;
        });

        builder.addCase(singleProductFetch.pending , (state)=>{
            state.isLoading = true;
           
        }).addCase(singleProductFetch.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.product =action.payload;
        })  .addCase(singleProductFetch.rejected, (state,action)=>{
            state.isLoading = false,
            state.error = action.error.message;
        });
    }


})

export  const {addToCard} = productSlice.actions;

export default productSlice.reducer;