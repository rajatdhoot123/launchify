import { DM_Sans,Open_Sans} from "next/font/google";
import scratch from '../assets/images/footer_sign.svg'
const dm = DM_Sans({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
});

const os = Open_Sans({
  weight:['400','500','600','700','800'],
  subsets:['latin']
});

const Footer = () => {
  return (
    <div className="py-16 ">
      <div className="">
        {/* email section  */}
        <div className="relative flex py-10 mb-10 rounded-2xl flex-col items-center w-full bg-[#121A21] text-white  ">
          <p className="font-medium lg:text-3xl text-2xl text-center px-10">
            Join our beta program for more features
          </p>
          <div className="flex w-full px-10 items-center justify-center md:flex-row flex-col py-6 gap-6">
            <input
              type="text"
              className="bg-white/20 lg:rounded-lg rounded-md w-full py-3 lg:w-[30rem] placeholder:text-center sm:placeholder:text-left placeholder:text-xs sm:placeholder:pl-4 "
              placeholder="Your Best Email Address"
            />
            <button className="bg-white rounded-lg w-fit font-bold text-[#0A2640] px-6 py-3 ">
              Get a demo
            </button>
          </div>
          <img src={scratch.src} className="absolute -top-7 sm:-top-10 -right-6 sm:-right-8 sm:w-auto w-12" alt="" />
        </div>


        {/* footer  */}

        <div className="px-3">
          <div className="flex text-center lg:text-left lg:justify-between justify-center flex-row  flex-wrap  gap-10 ">
            <div className="flex flex-col  gap-6">
              <p className={`text-4xl ${dm.className} font-bold`}>Kind</p>
              <p className="max-w-md text-[Gray] text-lg">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
              <p className={`${os.className} text-[Gray]`}>All rights reserved.</p>
            </div>
            
            
              <div className="flex gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-[#121215]">About</p>
                <p className="text-[#121215]/60 font-bold">Contact</p>
                <p className="text-[#121215]/60 font-bold">Blog</p>
                <p className="text-[#121215]/60 font-bold">Story</p>
              </div>
              
              <div className="flex flex-col gap-4">
                <p className="font-bold text-[#121215]">Company</p>
                <p className="text-[#121215]/60 font-bold">Product</p>
                <p className="text-[#121215]/60 font-bold">Press</p>
                <p className="text-[#121215]/60 font-bold">More</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-[#121215]">Press</p>
                <p className="text-[#121215]/60 font-bold">Careers</p>
                <p className="text-[#121215]/60 font-bold">News Letters</p>
                <p className="text-[#121215]/60 font-bold">More</p>
              </div>
              </div>
            

          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
