import { redirect, useNavigate, useParams } from "react-router";
import { useGetUserByIdQuery, useUpdateUserMutation } from "../Features/Counter/userApiSlice";
import Swal from "sweetalert2";


const UpdateUser = () => {

    const {id }= useParams();
    const navigate = useNavigate();


   const {data: user=[], isError, isLoading} = useGetUserByIdQuery(id);
 
   
   const [updateUser] = useUpdateUserMutation(id);
//    console.log(updateUser);



// handleUpdate rtk 
  const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.title.value;
        const password = form.body.value;

        const userInfo = {email,password};
        console.log(userInfo);

        const res = await updateUser({id,...userInfo});
        // console.log(res.data)

        if(res.data){
           Swal.fire({
  title: "Successfully Update User",
  icon: "success",
  draggable: true
    });
        }

        navigate('/contact');
     
    }



     if(isLoading){
        return <>
        <h1 className='text-2xl text-center'>Loading...........</h1>
        </>
    }
      
    if(isError){
        return <>
        <h1 className='text-2xl text-center'>Loading...........</h1>
        </>
    }

    
    return (
        <div>
            <h1 className="text-2xl text-center font-bold my-7
            ">Update User</h1>


              <div className=" lg:w-2/5 mx-auto  bg-base-100  shrink-0 shadow-2xl">
                <div className="card-body text-center">
            
                 <form onSubmit={handleSubmit} className="fieldset ">
            
              
                         <div className=" form-control ">
                          
                            <label className="  text-2xl min-lg:-ml-84 text-black">Title</label> <br />
                            <input type="text" className="input w-3/4 focus:border-none " name="title" defaultValue={user.email} placeholder="Enter Your Email Here" />
                        </div>
            
                        <div className="form-control">
                            <label className="-ml-56 max-md:mr-52  min-lg:-ml-74  max-xl:mr-17 text-2xl 
                            text-black">body</label> <br />
                            <input type="text" className="input w-3/4 focus:border-none" defaultValue={user.password} name="body" placeholder="Enter Your Password Here" />
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

export default UpdateUser;