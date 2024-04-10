import star from "../images/stars.svg";
import quote from "../images/quote-down.svg";
const Testimonial = ({ name, position, review, imageUrl }) => {
  return (
    <div className="backdrop-blur-xl pl-5 pr-5 w-full">
      <div className="flex h-1/4 overflow-hidden bg-white/15 w-full relative rounded-2xl">
        <img src={quote.src} alt="" className="absolute right-0 lg:h-32 h-16 mr-2 mt-2 lg:mt-0 lg:mr-2 opacity-40" />
        <div className="px-6 py-6">
          <div className="flex flex-col gap-3 items-start">
            <div className="flex gap-3">
              <img src={imageUrl.src} alt="" className=" h-12 mt-1" /> 
              <div>
                <h3 className="text-xl font-bold ">{name}</h3>
                <p className="text-white ">{position}</p>
              </div>
            </div>
            <img src={star.src} alt="" className="h-8" />
            <div>
              <p >{review}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
