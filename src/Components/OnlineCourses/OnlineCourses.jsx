import img1 from "../../assets/o1.1.png"
import img2 from "../../assets/o2.1.png"
import img3 from "../../assets/o3.1.png"
import img4 from "../../assets/o4.1.png"
import img5 from "../../assets/o5.1.png"
import img6 from "../../assets/o6.1.png"
import img7 from "../../assets/o7.1.png"
import img8 from "../../assets/o8.1.png"
import img9 from "../../assets/o9.1.png"
import img10 from "../../assets/o10.1.png"
import img11 from "../../assets/o11.1.png"
import img12 from "../../assets/o12.1.png"

const datas = [
    {
        id:1,
        Logo: img1,
        name: "UI/UX Design Courses",
        amount: "25 Courses",
    },
    {
        id:2,
        Logo: img2,
        name: "Art & Design",
        amount: "25 Courses",
    },
    {
        id:3,
        Logo: img3,
        name: "Computer Science",
        amount: "10 Courses",
    },
    {
        id:4,
        Logo: img4,
        name: "History & Archeologic",
        amount: "15 Courses",
    },
    {
        id:5,
        Logo: img5,
        name: "Software Engineering",
        amount: "30 Courses",
    },
    {
        id:6,
        Logo: img6,
        name: "Information Software",
        amount: "60 Courses",
    },
    {
        id:7,
        Logo: img7,
        name: "Health & Fitness",
        amount: "10 Courses",
    },
    {
        id:8,
        Logo: img8,
        name: "Marketing",
        amount: "30 Courses",
    },
    {
        id:9,
        Logo: img9,
        name: "Graphic Design",
        amount: "80 Courses",
    },
    {
        id:10,
        Logo: img10,
        name: "Music",
        amount: "120 Courses",
    },
    {
        id:11,
        Logo: img11,
        name: "Business Administration",
        amount: "17 Courses",
    },
    {
        id:12,
        Logo: img12,
        name: "Web Management",
        amount: "17 Courses",
    },
]

const OnlineCourses = () => {
    return (
        <div className="py-12 bg-[#eae9ed]">
            {/* header */}
            <div className=" space-y-3 text-center py-6">
                <p className="text-[#1eb2a6] font-bold text-lg"> COURSES</p>
                <h1 className="font-bold text-3xl md:text-5xl">Browse Our Online Courses</h1>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 md:px-12">
                {
                    datas.map((data) => <div key={data.id} className="p-4 flex flex-col justify-center items-center text-center space-y-4 bg-[#1eb2a6] text-white duration-500 hover:bg-[#3dc9be]">
                        <img src={data.Logo} alt="" className="w-24 h-24"/>
                        <h2 className="font-bold text-xl">{data.name}</h2>
                        <p className="bg-gray-100 px-6 py-1 text-[#1eb2a6] rounded-md">{data.amount}</p>
                    </div>)
                }

            </div>
            
        </div>
    );
};

export default OnlineCourses;