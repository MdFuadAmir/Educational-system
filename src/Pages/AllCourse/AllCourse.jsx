import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import OnlineCourses from "../../Components/OnlineCourses/OnlineCourses";
import logo from "../../assets/b1.png"
import star from "../../assets/stars.png"
import img1 from "../../assets/c1.png"
import img2 from "../../assets/c2.png"
import img3 from "../../assets/c3.png"
import img4 from "../../assets/c4.png"
import img5 from "../../assets/c5.png"
import img6 from "../../assets/c6.png"
import img7 from "../../assets/c7.png"
import img8 from "../../assets/c8.png"
import img9 from "../../assets/c9.png"

const courses =[
    {
        id:1,
        img: img1,
        name:"Introducing to Software Engineering",
        logo: logo,
        lecture: "50 lectures (190 hrs)",
        price: "$100 All Course / $15 per month",
    },
    {
        id:2,
        img:img2,
        name:"Enhancing Adobe Photoshop CC 2024 Skills",
        logo: logo,
        lecture: "30 lectures (125 hrs)",
        price: "$200 All Course / $25 per month",
    },
    {
        id:3,
        img:img3,
        name:"HTML, CSS, and Javascript for Web Developers",
        logo: logo,
        lecture: "50 lectures (50 hrs)",
        price: "$50 All Course / $5 per month",
    },
    {
        id:4,
        img:img4,
        name:"Introducing to Programming with WordPress",
        logo: logo,
        lecture: "50 lectures (50 hrs)",
        price: "$50 All Course / $5 per month",
    },
    {
        id:5,
        img:img5,
        name:"Introducing to Programming with ReactJS",
        logo: logo,
        lecture: "50 lectures (50 hrs)",
        price: "$50 All Course / $5 per month",
    },
    {
        id:6,
        img:img6,
        name:"Learn Frontend Programming Language",
        logo: logo,
        lecture: "50 lectures (50 hrs)",
        price: "$50 All Course / $5 per month",
    },
    {
        id:7,
        img:img7,
        name:"Introducing to with HTML / CSS",
        logo: logo,
        lecture: "50 lectures (50 hrs)",
        price: "$50 All Course / $5 per month",
    },
    {
        id:8,
        img:img8,
        name:"Introducing to with JAVA",
        logo: logo,
        lecture: "50 lectures (50 hrs)",
        price: "$50 All Course / $5 per month",
    },
    {
        id:9,
        img:img9,
        name:"Introducing to with HTML / CSS / JAVASCRIPT",
        logo: logo,
        lecture: "50 lectures (50 hrs)",
        price: "$50 All Course / $5 per month",
    },
]


const AllCourse = () => {
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-12 gap-4">
                {
                    courses.map((course) => <div key={course.id} className="bg-white hover:text-white hover:bg-[#1eb2a6] duration-500 p-4 rounded-lg">
                        <div>
                            <div className="flex justify-center">
                            <img src={course.img} alt="" className="bg-[#1eb2a6] w-32 h-32 p-6 rounded-full"/>
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
            <OnlineCourses/>
            <NewsLetter/>
        </div>
    );
};

export default AllCourse;