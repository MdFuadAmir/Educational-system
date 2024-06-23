import { MdEngineering } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import logo from "../../assets/b1.png"
import star from "../../assets/stars.png"

const courses =[
    {
        id:1,
        img:<MdEngineering size={100} className="p-3 bg-[#1eb2a6] text-white rounded-full"/>,
        name:"Introducing to Software Engineering",
        logo: logo,
        lecture: "50 lectures (190 hrs)",
        price: "$100 All Course / $15 per month",
    },
    {
        id:2,
        img:<SiAdobephotoshop size={100} className="p-3 bg-[#1eb2a6] text-white rounded-full"/>,
        name:"Enhancing Adobe Photoshop CC 2024 Skills",
        logo: logo,
        lecture: "30 lectures (125 hrs)",
        price: "$200 All Course / $25 per month",
    },
    {
        id:3,
        img:<FaComputer size={100} className="p-3 bg-[#1eb2a6] text-white rounded-full"/>,
        name:"HTML, CSS, and Javascript for Web Developers",
        logo: logo,
        lecture: "50 lectures (50 hrs)",
        price: "$50 All Course / $5 per month",
    },
]

const OurCourses = () => {
    return (
        <div>
            {/* header */}
            <div className=" space-y-3 text-center py-6">
                <p className="text-[#1eb2a6] font-bold text-lg">OUR COURSES</p>
                <h1 className="font-bold text-3xl md:text-5xl">Explore Our Popular Online Courses</h1>
            </div>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-12 gap-4">
                {
                    courses.map((course) => <div key={course.id} className="bg-white hover:text-white hover:bg-[#1eb2a6] duration-500 p-4 rounded-lg">
                        <div>
                            <div className="flex justify-center">
                            {course.img}
                            </div>
                           <div className="items-center flex flex-col mt-4">
                           <h1 className="font-bold text-3xl md:text-4xl">{course.name}</h1>
                            <img src={star} alt="" className="w-1/2 "/>
                           </div>
                           <div className="flex flex-col justify-center items-center">
                                <img src={course.logo} alt="" className="rounded-full w-24 h-24"/>
                                <p className="mt-2 fomt-mono font-bold text-lg">By Syneen</p>
                                <p className="">{course.lecture}</p>
                           </div>
                           <div className="p-2 bg-gray-100 rounded-md mt-2">
                            <h3 className="text-[#1eb2a6] text-2xl text-center">{course.price}</h3>
                           </div>
                           <div className="mt-4">
                            <button className="btn btn-outline bg-gray-100 w-full border-2 border-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white hover:border-white">ENROLL NOW</button>
                           </div>
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default OurCourses;