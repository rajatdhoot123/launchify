import img1 from "../assets/images/Section2/box1.png";
import img3 from "../assets/images/Section2/box3.png";
import imgleft from "../assets/images/Section2/boxleft.png";
import imgRight from "../assets/images/Section2/boxright.png";

const Section2 = () => {
  return (
    <div className="space-y-10">
      {/* section1 */}
      <div className="bg1 bg-no-repeat bg-cover rounded-xl px-10">
        <div className="sm:px-8 pt-8 max-md:pb-8 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Image */}
          <img
            src={img1.src}
            alt=""
            className="w-full col-span-6"
          />

          {/* Text */}
          <div className="col-span-5 col-start-1 md:col-start-7 md:col-span-4 md:ml-10 flex flex-col justify-center  gap-3">
            <p className="text-xl font-bold text-left text-black">Design Like a Pro</p>
            <p className="text-[#3E3E3E] text-left text-base md:max-w-sm">
              Our intuitive interface and advanced features make it easy to
              write and debug code
            </p>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* left section */}
        <div className="bg2 bg-no-repeat bg-cover py-10 px-10  space-y-10 rounded-3xl">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-white">Debugging</p>
            <p className="max-w-sm text-white/70">
              You can focus on what really matters - creating amazing
              applications. you can use our editor for all your coding needs
            </p>
          </div>
          <div className="flex justify-start">
            <img src={imgleft.src} alt="" />
          </div>
        </div>

        {/* right section */}
        <div className="lg:w-auto w-full bg4 bg-no-repeat bg-cover py-10 space-y-10 px-10  rounded-3xl">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-black">More efficient</p>
            <p className="max-w-sm text-base text-black">
              Our code editor provides a simple and intuitive interface that
              helps you write code quickly and efficiently.
            </p>
          </div>
          <div className="flex justify-start">
            <img src={imgRight.src} alt="" />
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="px-10 bg3 py-16 relative bg-no-repeat bg-cover space-y-10 rounded-xl">
        <div className=" flex justify-between">
          <div className="flex flex-col gap-1 justify-center">
            <p className="text-2xl font-bold text-black">Programming</p>
            <p className="max-w-sm text-black/70">
              Plus, with support for multiple programming languages, you can use
              our editor for all your coding needs.
            </p>
          </div>
        </div>
        <img
          src={img3.src}
          alt=""
          className="md:absolute h-3/4 static right-0 top-0 bottom-0 my-auto"
        />
      </div>
    </div>
  );
};

export default Section2;
