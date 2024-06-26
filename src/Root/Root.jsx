import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";



const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;