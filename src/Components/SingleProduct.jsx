
import { useParams } from "react-router";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { singleProductFetch } from "../Features/productSlice";

const SingleProduct = () => {

    const {id} = useParams();
    // console.log(id)
    const {ProductName,BrandName,ProductImage,Description,Price,Category,Ratings,ProductCreationDateTime    } = useSelector((state)=> (state.productR?.product))

    

    const dispatch = useDispatch();




//    fetch data and call function here 

    useEffect(()=>{
    
        dispatch(singleProductFetch(id))

    },[dispatch,id])





    return (
        <div>
            <h1 className="text-center my-3 font-bold">This is Single Product Components : </h1>

                     <div className="card bg-base-100  shadow-sm mx-auto my-9">
              <figure>
                <img className="w-[410px] h-[410px] p-3 rounded-3xl object-cover"
                  src={ProductImage}
                  alt="Shoes" />
              </figure>
              <div className="card-body text-center  ">
                <h2 className="card-title my-2 mx-auto">
                  {ProductName}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-center my-2">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
            
            
             
              </div>
            </div>
                  
        </div>
    );
};

export default SingleProduct;