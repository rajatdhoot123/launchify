const Card = () => {
  return (
    <div className="mx-auto container">
      <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div
            className="h-[236px] object-cover"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage:
                "url(https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6)",
            }}
          ></div>
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              Spagetti with shrimp sauce
            </p>
            <div className="flex flex-row">
              <p className="text-[#3C3C4399] text-[17px] mr-2 line-through">
                MVR 700
              </p>
              <p className="text-[17px] font-bold text-[#0FB478]">MVR 700</p>
            </div>
            <p className="text-[#7C7C80] font-[15px] mt-6">
              Our shrimp sauce is made with mozarella, a creamy taste of shrimp
              with extra kick of spices.
            </p>

            <a
              target="_blank"
              href="foodiesapp://food/1001"
              className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              View on foodies
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/id1493631471"
              className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Download app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
