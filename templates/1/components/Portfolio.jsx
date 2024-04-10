import image from "../images/portfolio.svg";

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen px-8 lg:px-16 ">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
        <p className="text-gray-700 text-4xl text-center lg:text-left lg:text-5xl font-semibold">
          Lets have a look at <br></br>my{" "}
          <span className="text-orange-400"> Portfolio</span>
        </p>
        <button className="bg-orange-400 p-5 w-36 h-16 rounded-full text-xl text-white font-bold">
          See All
        </button>
      </div>
      {/* Heading  */}
      <div className="w-full flex flex-col md:items-center lg:flex-row gap-8 py-12 justify-between">
        <div className="w-full relative">
          <img src={image.src} alt="" className="w-full" />
          <p className="absolute bottom-3 left-3 text-orange-50 text-4xl lg:text-6xl bg-opacity-75 px-2 py-1 font-semibold">
            Lirante
          </p>
        </div>
        <div className="w-full relative">
          <img src={image.src} alt="" className="w-full " />
          <p className="absolute bottom-3 left-3 text-orange-50 text-4xl lg:text-6xl bg-opacity-75 px-2 py-1 font-semibold">
            Lirante
          </p>
        </div>
      </div>
      <div className="flex justify-center py-6 text-center">
        <div className="grid grid-cols-2 md:flex gap-4">
          <div className="px-8 py-4 rounded-full bg-gray-100">Landing Page</div>
          <div className="px-8 py-4 rounded-full bg-gray-100">
            Product Design
          </div>
          <div className="px-8 py-4 rounded-full bg-gray-100">Animation</div>
          <div className="lg:px-8 px-3 py-4 rounded-full bg-gray-100">
            Glassmorphism
          </div>
          <div className="px-8 py-4 rounded-full bg-gray-100">Cards</div>
          <div className="px-8 py-4 rounded-full bg-gray-100">Display</div>

        </div>
      </div>
      <div className="flex flex-col items-center text-gray-700">
        <div className=" flex justify-center mt-6">
          <div className="flex text-left justify-center gap-4 items-center font-bold  lg:text-5xl text-2xl">
            <p>Lirante - Food Delivery Solution</p>
            <div className="rounded-full bg-orange-400 text-gray-50 px-5 py-3">
              &#8599;
            </div>
          </div>
        </div>
        <p className="max-w-3xl mt-6 text-center text-xl text-gray-700">The food delivery solution app offers convenient ordering, diverse cuisine options, efficient delivery, and seamless payment processing for users.</p>
      </div>
    </div>
  );
};

export default Portfolio;
