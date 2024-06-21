import { FaLongArrowAltRight } from "react-icons/fa";
import coverPhoto from "../../assets/pexels-dima-valkov-1186343-4826213-removebg-preview.png"

const Hero = () => {
    return (
        <div className="bg-cyan-400 text-white pb-6 md:pb-0">
            <div className="px-4 md:px-12 pt-8 flex flex-col-reverse md:flex-row justify-between gap-6 items-center">
                <div className="w-full md:w-1/2">
                    <div>
                    <p className="uppercase font-bold text-lg">Welcome to Academia</p>
                    <h1 className="text-2xl md:text-6xl my-4 font-bold font-mono">Best Education syster in Bangladesh</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error quaerat sint laborum labore magnam tenetur blanditiis cumque quos accusantium!</p>
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row gap-6">
                        <button className="btn bg-[#1eb2a6] border-none text-white">GET STARTED NOW <i><FaLongArrowAltRight/></i></button>
                        <button className="btn bg-white text-[#1eb2a6] border-none">VIEW COURSE <i><FaLongArrowAltRight/></i></button>
                    </div>
                </div>
                {/* photo */}
                <div className="w-full md:w-1/2 flex justify-end">
                    <img src={coverPhoto} alt="" className=""/>
                </div>

            </div>
        </div>
    );
};

export default Hero;