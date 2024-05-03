import Navbar from "./Navbar";
import wand from "../assets/images/Hero/wand.png";
import heroimg from "../assets/images/Hero/heroimg.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #b67eec, #a56be4, #9459dd, #8146d5, #6d33ce, #632dcb, #5727c9, #4b21c6, #4a28c8, #492ec9, #4833cb, #4738cc);",
      }}
      className="relative  bg-cover bg-no-repeat"
    >
      <div className="w-full min-h-screen">
        {/* navbar  */}
        <div className="md:py-6">
          <Navbar />
        </div>

        {/* Hero section  */}
        <div className="sm:px-8 lg:px-28 px-6">
          <div className="relative flex justify-center md:mt-28 mt-36">
            <img src={wand.src} alt="" className="absolute -top-20" />
            <p className="text-white text-4xl  lg:text-5xl max-w-3xl text-center">
              Take your <span className="font-bold">coding</span> to the next
              level with our{" "}
              <span className="font-bold">powerful code editor</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 left-0 right-0 mx-auto max-md:h-1/3 md:h-1/2 sm:px-8 lg:px-28 px-6">
        <img
          src={heroimg.src}
          alt=""
          className="rounded-t-xl h-full object-fit mx-auto "
        />
      </div>
    </div>
  );
};

export default Hero;
