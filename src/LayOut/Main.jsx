import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const Main = () => {
    return (
        <div>
            <NavBar/>

            <div className="container mx-auto my-9">
                <Outlet/>
            </div>

            <Footer/>

        </div>
    );
};

export default Main;