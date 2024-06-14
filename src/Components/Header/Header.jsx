import { Link } from "react-router-dom";
import Head from "../Head/Head";


const Header = () => {
    return (
        <>
        <Head/>
        <nav className="px-4 md:px-12">
            <div className="flex justify-between items-center">
            {/* links */}
            <div>
                <Link to="/">Home</Link>
                <Link to="/courses">All Courses</Link>
                <Link to="/about">About</Link>
                <Link to="/team">Team</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/journal">Journal</Link>
                <Link to="/contact">Contact</Link>
            </div>
            {/* start */}
            <div>
               <h1>GET CERTIFICATE</h1> 
            </div>
            </div>
            
        </nav>
        </>
    );
};

export default Header;