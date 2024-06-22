import Hero from "../../Components/Hero/Hero";
import LearAnythink from "../../Components/LearnAnythink/LearAnythink";
import OnlineCourses from "../../Components/OnlineCourses/OnlineCourses";
import OurCourses from "../../Components/OurCourses/OurCourses";



const Home = () => {
    return (
        <div>
            <Hero/>
            <LearAnythink/>
            <OurCourses/>
            <OnlineCourses/>
        </div>
    );
};

export default Home;