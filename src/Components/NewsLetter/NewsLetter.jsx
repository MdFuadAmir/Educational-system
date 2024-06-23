import { IoIosSend } from "react-icons/io";

const NewsLetter = () => {
    return (
        <div className="bg-[#1eb2a6] my-16 p-4 py-4 md:px-12 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className=" font-mono font-semibold text-3xl text-white">Newsletter - Stay tune and get the latest update</h1>
                    <p className=" text-lg text-white mt-4">Far far away, behind the word mountains</p>

                </div>
                <div className="flex justify-center items-center">
                    <input type="email" name="email" id="" placeholder="Enter your email address" className="w-2/3 py-2 px-3"/>
                    <button className="py-2 px-4 rounded-lg bg-white ml-4">
                    <IoIosSend size={20} color="#1eb2a6" />
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default NewsLetter;