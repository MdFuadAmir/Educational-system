import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Head = () => {
    return (
        <div className="px-6 md:px-16 py-4 text-white">
            <div className="flex justify-between items-center">
                {/* left head */}
                <div className="">
                    <h2 className="font-bold text-2xl md:text-4xl font-serif">EDUCATION</h2>
                    <p className="font-serif">ONLINE EDUCATION & LEARNING</p>
                </div>
                {/* right head */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Link><FaFacebookF size={35} className="rounded-full p-2 bg-slate-200 
                    text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-200"/></Link>
                    <Link>
                    <FaInstagram size={35} className="rounded-full p-2 bg-slate-200 text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-200"/>
                    </Link>
                    <Link>
                    <FaTwitter size={35} className="rounded-full p-2 bg-slate-200 text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-200"/>
                    </Link>
                    <Link>
                    <FaYoutube size={35} className="rounded-full p-2 bg-slate-200 text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-200"/>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};
export default Head;