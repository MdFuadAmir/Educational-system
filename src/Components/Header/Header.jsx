import { Link } from "react-router-dom";
import Head from "../Head/Head";


const Header = () => {
    
    return (
        <div className="bg-cyan-400">
        <Head/>
        <nav className="mx-4 text-white">
            <div className=" md:flex justify-between items-center bg-slate-100 bg-opacity-20 rounded-md"> 
            <div className="flex flex-col text-center md:flex-row gap-6 text-md font-bold px-6 py-8">
                {/* links */}
                <Link className="hover:text-[#1eb2a6] duration-200" to="/">Home</Link>
                <Link className="hover:text-[#1eb2a6] duration-200" to="/courses">All Courses</Link>
                <Link className="hover:text-[#1eb2a6] duration-200" to="/about">About</Link>
                <Link className="hover:text-[#1eb2a6] duration-200" to="/team">Team</Link>
                <Link className="hover:text-[#1eb2a6] duration-200" to="/pricing">Pricing</Link>
                <Link className="hover:text-[#1eb2a6] duration-200" to="/journal">Journal</Link>
                <Link className="hover:text-[#1eb2a6] duration-200" to="/contact">Contact</Link>
            </div>
            {/* start */}
             <div className="bg-[#1eb2a6] py-8 px-12 text-center items-center">
                <Link to="/">GET CERTIFICATE</Link>
            </div>
            </div>
            
        </nav>
        </div>
      
    );
};

export default Header;
