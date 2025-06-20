import { useDispatch, useSelector,  } from "react-redux";
import { addBooks } from "../Features/BookSlice";


import { useEffect } from "react";
import { userDeleteFetch, userFetch } from "../Features/userSlice.js";
import {  useDeleteUserMutation, useGetUserQuery, usePostUserMutation } from "../Features/Counter/userApiSlice.js";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";








const Contacts = () => {

  // using RTK Query Here 
    const {data : user= [], isLoading, isError} = useGetUserQuery();

    console.log(user);
    
    const [postUser] = usePostUserMutation();

    // console.log(postUser);

    const [DeleteUser] = useDeleteUserMutation();

    const navigate = useNavigate();

 


    
    // console.log(res);


    // using Redux toolkit
  //  const dispatch = useDispatch();


//    const {user,Loading, error} = useSelector((state)=> state.userR);

// //    fetchuserAll data using redux asyckThunk 
//     useEffect(()=>{
//         dispatch(userFetch())
//     },[dispatch]);


    
     
    



    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.title.value;
        const password = form.body.value;

        const userInfo = {email,password};
        console.log(userInfo);

        // dispatch(addBooks(userInfo));
        
      await postUser(userInfo);


    }

    // handleDeleteuser here
    // const handleDelete = (id)=>{
      
    //     dispatch(userDeleteFetch(id))
    //     .unwrap()
    //     .then(() => alert('User deleted successfully'))
    //     .catch((err) => alert(`Error: ${err}`));

    // }

    const handleDelete = async(id)=>{
         
      const res = await DeleteUser(id);
      // console.log(res);

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
        return <> <h1 className="text-2xl text-center text-red-600">Loading ...........</h1></> 
    }
  
    if(isError){
        return console.error('Error here users : ')
    }
    
    if(isError){
        return console.error('Error here users : ')
    }
  
     

    return (
        <div>
             
 
{/* Form here */}
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

            <div>
              <h1 className="text-2xl font-bold text-green-500 text-center my-7">All User here</h1>
            </div>


        {
            user ? 
                        
                          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-7">
                          <table className="table">
                       
                            <thead>
                              <tr>
                                <th className="text-2xl font-bold text-black">Id</th>
                                <th className="text-2xl font-bold text-black">Name</th>
                                <th className="text-2xl font-bold text-black">Email</th>
                                <th className="text-2xl font-bold text-black">Password</th>
                                <th className="text-2xl font-bold text-black">Update</th>
                                <th className="text-2xl font-bold text-black">Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                            
                            {
                                user?.map((user,id)=>   <tr key={user._id}>
                                <th >{id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                               <Link to={`user/${user._id}`}> <td className=""><div className="btn text-2xl bg-green-600">Update</div></td> 
                                </Link>
                                <td  className=""><div onClick={()=>handleDelete(user._id)} className=" btn text-2xl bg-red-500">Delete</div></td>
                              </tr>)
                            }
                            
                          
                            </tbody>
                          </table>
                        </div>
            : 
            
            <><h1 className="text-center text-2xl">not found user</h1></>
        }


              
        </div>
    );
};

export default Contacts;