import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";


const Root = () => {
    return (
        <div className=" max-w-5xl mx-auto">
            <div className="mb-4">
            <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
           <div className="mt-5">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;