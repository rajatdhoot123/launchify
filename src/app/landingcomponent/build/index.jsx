import { BUILD_FEATURES } from "../constant";

const BuildFeature = () => {
  return (
    <div className="space-y-12">
      <div className="md:w-[550px] gap-12 flex flex-col items-center text-center mx-auto">
        <div className="md:text-4xl text-2xl font-semibold">
          How can you build at such an accelerated speed?
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {BUILD_FEATURES.map((build_feature, index) => (
          <div
            key={index}
            className="bg-[#FFF9F3] shadow-[5px_5px_0px_0px_#080a47] border-2 border-[#080a47] container rounded-md p-5 space-y-4"
          >
            <h2 className="text-lg font-semibold flex items-center justify-between">
              <span className="ml-2">{build_feature.title}</span>
              <div className="flex space-x-2">
                {build_feature?.icons?.map((icon) => (
                  <img
                    src={icon}
                    key={icon}
                    className="h-8 w-8 object-contain rounded-md "
                  />
                ))}
              </div>
            </h2>
            <ul className="ml-6 list-disc space-y-2">
              {build_feature.features.map((feature, index) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildFeature;
