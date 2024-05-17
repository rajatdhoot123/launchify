import rightImg from "../assets/images/Hero/right-img.png";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* left */}

        <div className="max-w-xl space-y-10 ">
          <div className="space-y-5">
            <p className="text-text md:text-left text-center font-extrabold text-4xl">
              Focus on connecting with others and sharing your experiences.
            </p>
            <div className=" flex justify-center md:justify-start">
              <p className="max-w-md md:text-left text-center text-xl text-light font-medium">
                We as secured product choose privacy & safety as our main goal
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-5">
            {/* email  */}
            <div className="bg-bannerbg px-6 py-4 w-fit text-light rounded-lg">
              Your best email address
            </div>
            {/* button  */}
            <button  className="bg-blue px-6 text-white py-4 rounded-lg font-bold hover:bg-transparent hover:text-blue hover:border-2 hover:border-blue transition-all hover:scale-x-105">
              Get Early Access &rarr;
            </button>
          </div>
        </div>

        {/* right  */}
        <div className="px-12 md:py-0 py-20 grid place-content-center rounded-2xl bg-[#EAE8FF]">
          <img src={rightImg.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
