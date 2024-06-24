import Head from "../../Components/Head/Head";
import Header from "../../Components/Header/Header";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import bgimg from "../../assets/b2.png"

const Contact = () => {
    return (
        <div>
            <div style={{height:"115vh", backgroundImage:`url(${bgimg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <Head/>
            <Header/>
            <div className="w-full h-full flex justify-center items-center flex-col gap-6 text-cyan-900 text-center">
                <p className="text-xl font-bold font-mono">Home / Contact</p>
                <h1 className="text-3xl md:text-5xl font-bold font-mono">Contact Us</h1>
            </div>
            </div>
            {/* map */}
            <div className="my-12 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* map */}
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.9153727738933!2d89.131125411101!3d23.901619421723527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe96556c37b153%3A0x6cae4df97a983d39!2sGraphic%20studio%20kushita!5e0!3m2!1sen!2sbd!4v1719256920179!5m2!1sen!2sbd" className="w-full h-full"></iframe>
                </div>
                {/* from */}
                <div className="px-8 py-12 bg-white rounded-lg">
                    <h1 className="text-2xl font-medium font-serif">Contact Us</h1>
                    <p className="text-gray-400">We re open for any suggestion or just to have a chat</p>

                    <div className="flex justify-around items-center my-6 gap-2">
                        <div>
                            <p className="font-bold">ADDRESS:</p>
                            <p className="text-gray-400 mt-4">Dr ayen Duddin Ahmmed Road,Kataikhana mor,kushtia,7000</p>
                        </div>
                        <div>
                        <p className="font-bold">EMAIL:</p>
                            <p className="text-gray-400 mt-4">fuadamir@gmail.com</p>
                        </div>
                        <div>
                        <p className="font-bold">PHONE:</p>
                            <p className="text-gray-400 mt-4">+880170******1</p>
                        </div>
                    </div>

                    {/*  */}
                    <div className="my-6">

                    <div className="flex flex-col md:flex-row items-center gap-4">
                    <input type="text" placeholder="Name" className="input input-bordered input-primary w-full" />
                    <input type="email" placeholder="Email" className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="w-full">
                    <input type="email" placeholder="Email" className="input input-bordered input-primary w-full mt-4" />
                    </div>
                    <div>
                    <textarea className="textarea w-full h-24 my-4 textarea-primary" placeholder="Bio"></textarea>
                    </div>
                    <button className="btn bg-[#1eb2a6] text-white hover:bg-[#1b837b]">Send Massage</button>
                    </div>
                    {/*  */}
                    <div>
                        <p className="font-bold text-lg">Follow us here</p>
                        <p className="font-bold font-sans text-lg text-[#1eb2a6]">FACEBOOK TWITTER INSTAGRAM DRIBBBLE</p>
                    </div>
                </div>

            </div>
            <NewsLetter/>
        </div>
    );
};

export default Contact;