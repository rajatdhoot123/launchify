import img from "../images/experience-img.svg";

const Experience = () => {
  return (
    <div className="w-full flex justify-center items-center lg:px-16 px-8">
      <div className="w-full">
        <span className="text-center lg:text-6xl text-5xl font-medium">
          <p className="text-gray-700">
            My&nbsp;
            <span className="text-orange-400">Work Experience</span>
          </p>
        </span>

        <div className="mt-20 h-full flex relative  lg:gap-0 justify-between">
          <div className="h-full">
            <div className="absolute top-0 left-0 w-1/3 md:w-auto">
              <p className="lg:text-3xl text-lg font-semibold">Sugee limited, Mumbai</p>
              <p className="md:text-lg text-xs text-gray-400">Sept 2016 - July 2020</p>
            </div>
            <div className="absolute top-1/2 w-1/3 md:w-auto">
              <p className="lg:text-3xl text-lg w-3/4 font-semibold">
                Cognizant, Mumbai
              </p>
              <p className="md:text-lg text-xs text-gray-400">Sep 2020- July 2023</p>
            </div>
            <div className="absolute bottom-0 w-1/4 md:w-auto">
              <p className="lg:text-3xl text-lg font-semibold">Cinetstox, Mumbai</p>
              <p className="md:text-lg text-xs text-gray-400">Sept 2016 - July 2020</p>
            </div>
          </div>
          <div className="flex items-center h-full">
            <img src={img.src} alt="" className=" object-cover" />
          </div>
          <div className="">
            <div className="absolute top-0 right-0 w-1/3 md:w-48 lg:w-96">
              <p className="lg:text-3xl text-lg font-semibold">Experience Designer</p>
              <p className="text-xs lg:text-lg hidden md:block text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justod dsadd 
              </p>
            </div>
            <div className="absolute top-1/2 right-0 w-1/3 md:w-48 lg:w-96">
              <p className="lg:text-3xl text-lg font-semibold">UI/UX Designer</p>
              <p className="text-xs lg:text-lg hidden md:block text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justo vulputate, bibendum sodales.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 md:w-48 lg:w-96">
              <p className="lg:text-3xl text-lg font-semibold">Lead UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
