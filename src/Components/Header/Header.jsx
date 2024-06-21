import { Link } from "react-router-dom";
import Head from "../Head/Head";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineMenu } from "react-icons/md";


const links =[
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "All Courses",
        path: "/allCourses"
    },
    {
        id: 3,
        name: "About",
        path: "/about"
    },
    {
        id: 4,
        name: "Pricing",
        path: "/pricing"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }

]


const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="bg-cyan-400">
        <Head/>

        <nav className="font-mono bg-slate-100 bg-opacity-20 pl-0 md:pl-9 text-white">
            <div className="flex flex-row-reverse md:flex-row justify-between items-center">
                <div>
                {/* Desktop navber */}
                <div className="hidden md:flex gap-5 font-semibold">
                    {
                        links.map((link) => (<Link to={link.path} key={link.id} className="hover:border-[#1eb2a6] hover:border-b-2 hover:text-[#1eb2a6] hover:scale-105 duration-200">{link.name}</Link>))
                    }
                </div>
                {/* menu optation */}
                <div onClick={() => setMenu(!menu)} className="md:hidden">
                        {
                        menu ? <RxCross2 size={24}/> : <MdOutlineMenu size={24}/> 
                        }
                </div>
                </div>
                <div className="bg-[#1eb2a6] py-8 px-12 text-center items-center text-white">
                <Link to="/" className="font-bold">GET CERTIFICATE</Link>
                </div>
            </div>
                {/* Monbile Navber  */}
                {
                    menu && (
                <div className="md:hidden flex-col flex items-center justify-center space-y-3 bg-slate-100 bg-opacity-20 py-4  rounded-lg font-semibold">
                    {
                        links.map((link) => (<Link to={link.path} key={link.id} className="hover:border-green-600 hover:border-b-2 hover:text-green-500 hover:scale-105 duration-200">{link.name}</Link>))
                    }
                </div>
                    )
                }
        </nav>
        </div>
      
    );
};

export default Header;
