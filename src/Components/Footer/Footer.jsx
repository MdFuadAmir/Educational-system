import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <h1 className="text-4xl font-bold font-sans">EDUCATION</h1>
    <p className="text-[#1eb2a6]">ONLINE EDUCATION & LEARNING</p>
    <p className="text-gray-400 mt-5">A small river named Duden flows by <br /> their place and supplies it with the <br /> necessary regelialia.</p>
    <div className="gap-6 flex mt-8">
                    <Link><FaFacebookF size={35} className="rounded-full p-2 bg-[#1eb2a6] 
                    text-white"/></Link>
                    <Link>
                    <FaInstagram size={35} className="rounded-full p-2 bg-[#1eb2a6] 
                    text-white"/>
                    </Link>
                    <Link>
                    <FaTwitter size={35} className="rounded-full p-2 bg-[#1eb2a6] 
                    text-white"/>
                    </Link>
                    <Link>
                    <FaYoutube size={35} className="rounded-full p-2 bg-[#1eb2a6] 
                    text-white"/>
                    </Link>
                </div>
  </aside>
  <nav>
    <h6 className="footer-title">Explore</h6>
    <a className="link link-hover text-lg">About</a>
    <a className="link link-hover text-lg">All Courses</a>
    <a className="link link-hover text-lg">Pricing</a>
    <a className="link link-hover text-lg">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved |This template is made with  by Fuad Programmer</p>
  </aside>
</footer>
            
        </div>
    );
};

export default Footer;