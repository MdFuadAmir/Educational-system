import img1 from "../../assets/b1.png"
import img2 from "../../assets/b2.png"
import img3 from "../../assets/b3.png"
import { GiWitchFace } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { FaComment } from "react-icons/fa6";


const datas =[
    {
        id:1,
        name: "Build your Dream Software & Engineering Career",
        img: img1,
        discription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        comments: "3 COMMENTS",
        date: "April 8, 2002",
        admin: "ADMIN"
    },
    {
        id:2,
        name: "Build your Dream Software & Engineering Career",
        img: img2,
        discription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        comments: "5 COMMENTS",
        date: "June 12, 2022",
        admin: "ADMIN"
    },
    {
        id:3,
        name: "Build your Dream Software & Engineering Career",
        img: img3,
        discription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        comments: "10 COMMENTS",
        date: "May 15,2024",
        admin: "USER"
    },
   
]

const Blog = () => {
    return (
        <div>
            {/* header */}
            <div className=" space-y-3 text-center py-12">
                <p className="text-[#1eb2a6] font-bold text-lg">OUR BLOG</p>
                <h1 className="font-bold text-3xl md:text-5xl hover:text-[#1eb2a6] duration-300">Recent From Blog</h1>
            </div>

            <div className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    datas.map((data) =><div key={data.id} className=" bg-white">
                        <img src={data.img} alt="" className="mb-6"/>
                        <div className="px-4 pb-6">
                            <div className="flex gap-2 items-center mb-4 justify-around">
                                <div className="flex flex-col gap-2 items-center">
                                    <GiWitchFace size={20} color="#1eb2a6"/>
                                    <p className=" text-[#1eb2a6]">{data.admin}</p>
                                </div>
                                <div className="flex flex-col gap-2 items-center">
                                    <SlCalender size={20} color="#1eb2a6"/>
                                    <p className=" text-[#1eb2a6]">{data.date}</p>
                                </div>
                                <div className="flex flex-col gap-2 items-center">
                                    <FaComment size={20} color="#1eb2a6"/>
                                    <p className=" text-[#1eb2a6]">{data.comments}</p>
                                </div>

                            </div>
                            <div className=" space-y-3">
                                <h1 className="font-bold text-2xl hover:text-[#1eb2a6] duration-200">{data.name}</h1>
                                <p className="font-lg text-gray-500">{data.discription}</p>
                                
                            </div>
                        </div>
                    </div>)
                }

            </div>
            
        </div>
    );
};

export default Blog;