import hireimage from "../images/hireimage.svg";

const Hire = () => {
  return (
    <div className=" lg:px-16  w-full bg-gray-100 flex px-8 py-2 lg:py-16">
      <div className="w-full flex flex-col justify-center items-center lg:flex-row">
        <img src={hireimage.src} alt="" className="h-[30rem]" />
        <div className="flex flex-col gap-12">
          <div className="mt-10  flex text-5xl lg:text-6xl font-semibold">
            <p className="lg:-ml-2">
              Why&nbsp;
              <span className="text-orange-400 ">Hire Me</span>
            </p>
          </div>
          <div className="lg:max-w-sm  font-normal  text-sm text-gray-400">
            Hiring me as a graphic designer ensures expertly crafted visuals
            tailored to your brand, enhancing its identity and communication
            effectiveness.
          </div>
          <div className="flex justify-between ">
            <div>
              <p className="text-2xl font-medium">450+</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl font-medium">450+</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-normal">
            <butto className="border border-black w-fit px-10 py-3 font-semibold rounded-3xl transition-all hover:bg-black hover:text-white ">
              Hire Me
            </butto>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
