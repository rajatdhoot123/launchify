const RandomCard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:block -space-y-72 items-center relative">
        <div className="relative shadow-2xl shadow-[#16192E] z-30 bg-transparent stroke-1 -rotate-[60deg] skew-y-[30deg] scale-75 border-gray-200 w-[650px] mx-auto h-[420px] rounded-3xl">
          <div className="w-full h-full absolute top-0 left-0 rounded-3xl bg-cover bg-[url('https://products.ls.graphics/mesh-gradients/images/37.-Light-Sky-Blue_1.jpg')]">
            <div className="p-12 flex flex-col justify-between h-full">
              <img
                className="h-24 w-24"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-gray-500 text-lg font-mono">
                  1253 8282 2588 23562
                </p>
                <p className="font-bold text-lg text-stone-600">Robert</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shadow-2xl shadow-[#16192E] z-20 bg-transparent stroke-1 -rotate-[60deg] skew-y-[30deg] scale-75 border-gray-200 w-[650px] mx-auto h-[420px] rounded-3xl">
          <div className="w-full h-full absolute top-0 left-0 rounded-3xl bg-cover bg-[url('https://products.ls.graphics/mesh-gradients/images/35.-Ronchi.jpg')]">
            <div className="p-12 flex flex-col justify-between h-full">
              <img
                className="h-28 w-28"
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-gray-300 text-lg font-mono">
                  1253 8282 2588 23562
                </p>
                <p className="font-bold text-lg text-stone-300">Caroline Q.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shadow-2xl shadow-[#16192E] z-10 bg-transparent stroke-1  -rotate-[60deg] skew-y-[30deg] scale-75 w-[650px] mx-auto h-[420px] rounded-3xl">
          <div className="w-full h-full absolute top-0 left-0 rounded-3xl bg-cover bg-[url('https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1.jpg')]">
            <div className="p-12 flex flex-col justify-between h-full">
              <img
                className="h-24 w-24"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-gray-500 text-lg font-mono">
                  1253 8282 2588 23562
                </p>
                <p className="font-bold text-lg text-stone-600">
                  Robert Lewonsky
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomCard;
