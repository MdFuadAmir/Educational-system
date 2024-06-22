import Hero from "../../Components/Hero/Hero";
import LearAnythink from "../../Components/LearnAnythink/LearAnythink";
import OnlineCourses from "../../Components/OnlineCourses/OnlineCourses";
import OurCourses from "../../Components/OurCourses/OurCourses";
import Testmonial from "../../Components/Testmonial/Testmonial";



const Home = () => {
    return (
        <div>
            <Hero/>
            <LearAnythink/>
            <OurCourses/>
            <OnlineCourses/>
            <Testmonial/>
        </div>
    );
};

export default Home;