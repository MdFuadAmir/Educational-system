import Head from "../../Components/Head/Head";
import Header from "../../Components/Header/Header";
import LearAnythink from "../../Components/LearnAnythink/LearAnythink";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import bgimg from "../../assets/b2.png"

const About = () => {
    return (
        <div>
            <div style={{height:"115vh", backgroundImage:`url(${bgimg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <Head/>
            <Header/>
            <div className="w-full h-full flex justify-center items-center flex-col gap-6 text-cyan-900">
                <p className="text-xl font-bold font-mono">Home / About</p>
                <h1 className="text-3xl md:text-5xl font-bold font-mono">About Us</h1>

            </div>
            </div>
            <LearAnythink/>
            <NewsLetter/>
        </div>
    );
};

export default About;