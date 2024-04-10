const Hero = () => {
  return (
    <div className=" flex items-center flex-col justify-center pt-20 space-y-7 i ">
        {/* Heading  */}
      <div className="flex flex-col text-center items-center space-y-7">
        <div className="flex flex-col gap-3 text-5xl lg: max-w-4xl  font-extrabold">
          <p className="">Simplify your business operations &</p> 
          <p>streamline employee management</p>
        </div>  
        <p className="lg:text-base text-sm font-medium text-[#1A1A1A]/75">With our user-friendly platform, you can easily handle everything from onboarding to <br className="hidden sm:block"/> offboarding, time-off tracking, and more, all in one place.</p>
      </div>

        {/* Buttons  */}
        <div className="flex justify-center gap-4 sm:gap-6 ">
            <button className="bg-[#121A21] font-bold sm:text-lg rounded-lg text-white px-4 sm:px-6 py-3 ">Get A Free Demo &rarr;</button>
            <button className="rounded-lg bg-[#0A2640]/10 px-3 sm:px-6 font-bold text-lg">Explore Kind</button>
        </div>

    </div>
  );
};

export default Hero;
