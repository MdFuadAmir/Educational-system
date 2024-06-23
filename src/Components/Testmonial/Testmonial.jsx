import img1 from "../../assets/t1.webp"
import img2 from "../../assets/t2.webp"
import img3 from "../../assets/t3.webp"


const datas =[
    {
        id:1,
        name: "Roger Scott",
        img: img1,
        work: "MARKETING MANAGER",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        id:2,
        name: "Takla Chand",
        img: img2,
        work: "Web Developer",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        id:3,
        name: "Bura Bada",
        img: img3,
        work: "Frontend developer",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
]
const Testmonial = () => {
    return (
        <div>
            {/* header */}
            <div className=" space-y-3 text-center py-12">
                <p className="text-[#1eb2a6] font-bold text-lg">TESTIMONIAL</p>
                <h1 className="font-bold text-3xl md:text-5xl">Our Successful Students</h1>
            </div>
            <div className="pb-12 px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        datas.map((data) =><div key={data.id} className="p-6 bg-white hover:bg-[#1eb2a6] hover:text-white duration-500 rounded-md">
                            <div className="flex gap-6 items-center ">
                                <div>
                                    <img src={data.img} alt="" className="w-24 h-24 rounded-full"/>
                                </div>
                                <div className=" space-y-2">
                                    <h1 className="text-2xl font-bold font-serif">{data.name}</h1>
                                    <p className="">{data.work}</p>
                                </div>
                            </div>
                            <p className="text-lg p-4">{data.discription}</p>
                        </div>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Testmonial;