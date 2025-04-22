import { NavLink } from "react-router";


const NavBar = () => {

    const navLinks = <>
       <NavLink to='/'  className={({ isActive }) =>
          isActive ? "text-red-500" : ""
        }>   <li  className="text-2xl lg:mx-1 font-bold ">Home</li></NavLink>

       <NavLink to='/about'  className={({ isActive }) =>
          isActive ? "text-red-500" : ""
        }> <li  className="text-2xl lg:mx-1 font-bold ">About</li></NavLink>

       <NavLink to='/contact' className={({ isActive }) =>
          isActive ? "text-red-500" : ""
        }> <li className="text-2xl font-bold "> Contact</li></NavLink>
    
    </>

    return (
      
        <nav className="navbar bg-green-300 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       
        {navLinks}

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">E<samp>Fashion</samp></a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className=" menu menu-horizontal  ">
     
     
      {navLinks}
     

    </ul>
  </div>

  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</nav>       
       
    );
};

export default NavBar;