import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../Features/BookSlice";
import { useEffect } from "react";
import { productFetch } from "../Features/productSlice";
import Products from "./Products";




const Contacts = () => {

   const dispatch = useDispatch();

   


    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const body = form.body.value;

        const userInfo = {title,body};
        console.log(userInfo);

        dispatch(addBooks(userInfo));


    }

  

    return (
        <div>

           
         
           

                  



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

              
        </div>
    );
};

export default Contacts;