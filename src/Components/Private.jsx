import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import   { createUserFetch, userFetch }  from "../Features/userSlice";
import { useGetProductQuery } from "../Features/ProductApi";
import Products from "./Products";


const Private = () => {
    // const dispatch = useDispatch();

    const { data : product = [] , isLoading, isError} = useGetProductQuery();
    console.log(product)

     // fetch Data Here by redux toolkit
    //  useEffect(()=>{
    //     dispatch(userFetch());
        
    // },[dispatch]);

    // const user = useSelector((state)=> state.userR.user
    // );

    // const loading = useSelector((state)=> console.log(state.userR.loading))

    // const error = useSelector((state)=> console.log(state.userR.error))



    // handleForm Here 
    

    
        const handleSubmit = (e)=>{
            e.preventDefault();
            const form = e.target;
            const title = form.title.value;
            const body = form.body.value;
    
            const userInfo = {title,body};
            console.log(userInfo);
    
            // dispatch(createUserFetch(userInfo));
    
    
        }

    // console.log(user);

    if(isLoading){
        return <><h1>Loading .........</h1></>
    }
    

   if(isError){
    return <><h1>Error .....</h1></>
   }


    return (
        <div>


        <div > {
            product && product.length > 0 &&
            
                <h1 className="text-center font-bold text-2xl my-7 capitalize text-red-600"> this is about components  : {product.length}</h1>
        }
        </div>


        {/* form here */}
        <div className=" lg:w-2/5 mx-auto  bg-base-100  shrink-0 shadow-2xl">
                <div className="card-body text-center">
            
                 <form onSubmit={handleSubmit} className="fieldset ">
            
              
                         <div className=" form-control ">
                          
                            <label className="  text-2xl min-lg:-ml-84 text-black">Title</label> <br />
                            <input type="text" className="input w-3/4 focus:border-none " name="title" placeholder="Enter Your Email Here" />
                        </div>
            
                        <div className="form-control">
                            <label className="-ml-56 max-md:mr-52  min-lg:-ml-74  max-xl:mr-17 text-2xl 
                            text-black">body</label> <br />
                            <input type="text" className="input w-3/4 focus:border-none" name="body" placeholder="Enter Your Password Here" />
                        </div>
                        
                 
            
                 <div className="">
                 <input className="btn w-2/5 bg-green-500 text-2xl" type="submit" value="Submit" />
                 </div>
                  </form>
                  
                </div>
              </div>


            {/* product here */}
              <div className="grid gap-5 grid-cols-1 mg:grid-cols-2 lg:grid-cols-3">

                    {
                        product?.slice(0,5).map((item)=> <Products key={item._id} item={item}></Products>)
                    }
              </div>
       

        </div>
    );
};

export default Private;