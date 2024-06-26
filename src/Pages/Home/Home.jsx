import Blog from "../../Components/Blog/Blog";
import Head from "../../Components/Head/Head";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import LearAnythink from "../../Components/LearnAnythink/LearAnythink";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import OnlineCourses from "../../Components/OnlineCourses/OnlineCourses";
import OurCourses from "../../Components/OurCourses/OurCourses";
import Price from "../../Components/Price/Price";
import Testmonial from "../../Components/Testmonial/Testmonial";



const Home = () => {
    return (
        <div>
            <div className="bg-[#74d4cc]">
            <Head/>
            <Header/>
            <Hero/>
            </div>
            <LearAnythink/>
            <OurCourses/>
            <OnlineCourses/>
            <Testmonial/>
            <Blog/>
            <Price/>
            <NewsLetter/>
        </div>
    );
};

export default Home;