import { Link } from "react-router";
import loginImage from "../assets/login.jpg";
import { useDispatch } from "react-redux";
import { createUserFetch } from "../Features/userSlice";



const Login = () => {

  const dispatch = useDispatch();

    const handleSubmit = (e)=>{


      e.preventDefault();
      const form = e.target;
      
      const email = form.email.value;
      const password = form.password.value;

      const LoginUserInfo = {email,password};

      console.log(LoginUserInfo);

      dispatch(createUserFetch(LoginUserInfo))



     

    }

    return (
    

<section className="my-11">

<div className="hero grid-rows-none bg-base-200 ">
<div className=" flex-row gap-3 lg:flex   ">
    {/* Image Section */}
  <div className="text-center  lg:w-2/4 lg:text-left">
   
    <img src={loginImage} alt="loginImage" />
   
  </div>


{/* Form Section Here */}
  <div className=" lg:w-2/5 mx-auto  bg-base-100  shrink-0 shadow-2xl">
    <div className="card-body text-center">

     <form onSubmit={handleSubmit} className="fieldset ">

      <div>
            <h1 className="text-center font-bold text-2xl">Please Login Here</h1>
        </div>
             <div className=" form-control ">
              
                <label className="  text-2xl min-lg:-ml-84 text-black">Email</label> <br />
                <input type="email" className="input w-3/4 focus:border-none " name="email" placeholder="Enter Your Email Here" />
            </div>

            <div className="form-control">
                <label className="-ml-56 max-md:mr-52  min-lg:-ml-74  max-xl:mr-17 text-2xl 
                text-black">Password</label> <br />
                <input type="password" className="input w-3/4 focus:border-none" name="password" placeholder="Enter Your Password Here" />
            </div>
            
        <div><a className="link link-hover lg:text-xl">Forgot password?</a></div>

     <div className="">
     <input className="btn w-2/5 bg-green-500 text-2xl" type="submit" value="Login" />
     </div>
      </form>


      <div className="">
    <h1 className=" text-[1rem] items-center justify-items-center ">
    Don't Have An Account Please 
    
    <Link to='/register' className="btn text-[1rem] p-0 btn-link  items-center justify-items-center no-underline">Register</Link>
    </h1>
      </div>
        

        {/* Social Media Login btn*/}
        <div className="">
                <button className="btn bg-blue-500">Google</button>
                <button className="btn bg-red-400">FaceBook</button>
        </div>

      
    </div>
  </div>
</div>
</div>

</section>
    );
};

export default Login;