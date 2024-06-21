import Rightimage from "../../assets/about.jpg"
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";

const datas = [
    {
        id:1,
        name: "Online Courses",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: <PiBookOpenTextDuotone size={40}/>,
    },
    {
        id:2,
        name: "Earn A Certificates",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: <TbCertificate size={40}/>,
    },
    {
        id:3,
        name: "Learn with Expert",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        img: <GrUserWorker size={40}/>,
    },
] 

const LearAnythink = () => {
    return (
        <div className="bg-[#eae9ed]">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[f6f4f5] px-4 md:px-12 gap-4 py-12 items-center">
            {/* photo */}
            <div className="">
                <img src={Rightimage} alt="" className="rounded-md h-screen"/>
            </div>
            {/* text */}
            <div className="">
                <div className="space-y-3">
                    <p className="uppercase font-bold text-lg text-[#1eb2a6]">Learn anything</p>
                    <h1 className="font-bold text-3xl md:text-6xl">Benefits About Online Learning Expertise</h1>
                </div>
                <div className="mt-5">
                    {
                        datas.map((data) => <div key={data.id} className="bg-white my-8 rounded-lg hover:bg-[#1eb2a6] hover:text-white duration-500 ">
                        <div className="flex gap-4 p-8">
                            <div className="">
                            {data.img}                            
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl">{data.name}</h2>
                                <p className="text-lg">{data.discription}</p>
                            </div>
                        </div>
                        </div> )
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default LearAnythink;