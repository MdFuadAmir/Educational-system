import Head from "../../Components/Head/Head";
import Header from "../../Components/Header/Header";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Price from "../../Components/Price/Price";
import bgimg from "../../assets/b1.png"

const Pricing = () => {
    return (
        <div>
            <div style={{height:"115vh", backgroundImage:`url(${bgimg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <Head/>
            <Header/>
            <div className="w-full h-full flex justify-center items-center flex-col gap-6 text-white text-center">
                <p className="text-xl font-bold font-mono">Home / Pricing</p>
                <h1 className="text-3xl md:text-5xl font-bold font-mono">ChooseThe Right Plan</h1>
            </div>
            </div>
            <Price/>
            <div>
                {/* header */}
            <div className=" space-y-3 text-center py-6 mt-8">
                <p className="text-[#1eb2a6] font-bold text-lg">FAQS</p>
                <h1 className="font-bold text-3xl md:text-5xl">Frequesntly Ask Question</h1>
            </div>
            {/* faq */}
            <div className="mt-12 px-4 md:px-12 flex justify-center">
            <div className="join join-vertical w-1/2 space-y-3">
  <div className="collapse collapse-arrow join-item bg-white text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-300 border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">How to Enroll This Online Courses?</div>
    <div className="collapse-content">
      <p className="text-gray-600 hover:text-white">This is the first item s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border bg-white text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-300">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Where it is hidden by deafault, unit the collaps?</div>
    <div className="collapse-content">
      <p className="text-gray-600 hover:text-white">It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border bg-white text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-300 ">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p className="text-gray-600 hover:text-white">It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border bg-white text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-300 ">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Where it is hidden by deafault, unit the collaps?</div>
    <div className="collapse-content">
      <p className="text-gray-600 hover:text-white">It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border bg-white text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-300 ">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Where it is hidden by deafault, unit the collaps?</div>
    <div className="collapse-content">
      <p className="text-gray-600 hover:text-white">It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border bg-white text-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-300 ">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Where it is hidden by deafault, unit the collaps?</div>
    <div className="collapse-content">
      <p className="text-gray-600 hover:text-white">It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
    </div>
  </div>
</div>
            </div>

            </div>
            <NewsLetter/>
            
        </div>
    );
};

export default Pricing;