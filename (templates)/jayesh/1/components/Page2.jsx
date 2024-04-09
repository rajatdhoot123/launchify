import "../styles/index.css";
import bg2 from "../images/page2-bg-object.png";
import img1 from "../images/page2-img1.svg";
import img2 from "../images/page2-img2.svg";
import img3 from "../images/page2-img3.svg";
import Services from "./Services";

const Page2 = () => {
  return (
    <div className="text-gray-50 bg2 rounded-3xl">
      <div className="backdrop-brightness-50  lg:min-h-fit min-h-screen rounded-3xl w-full h-full lg:py-16 py-8 lg:px-16 px-8 relative z-10">
        <div className="">
          {/* Heading */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between text-5xl z-20 relative mb-8 lg:mb-16  font-semibold">
            <p>
              My&nbsp;<span className="text-orange-400">Services</span>{" "}
            </p>
            <p className="font-normal text-lg lg:w-1/2 w-full text-center lg:text-left mt-4 lg:mt-0">
            Graphic design service logo design, typography, illustration, layout, web design, print design, and marketing collateral creation.
            </p>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Services img={img1} title="UI/UX Design" />
            <Services img={img2} title="Web Design"/>
            <Services img={img1} title="Landing Page"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
