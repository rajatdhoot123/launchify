import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BUILD_FEATURES } from "../constant";

const Pricing = () => {
  return (
    <div>
      <div className="md:w-8/12 gap-12 flex flex-col items-center mx-auto">
        <div className="space-y-4 text-center">
          <div className="md:text-4xl text-2xl font-semibold">Pricing</div>
          <p className="md:text-xl text-lg">
            Save hours of repetitive code, build fast, make $$$ !
          </p>
        </div>
        <div className="bg-[#FFF9F3] shadow-[5px_5px_0px_0px_#080a47] border-2 border-[#080a47] container rounded-md items-center grid md:grid-cols-3 grid-cols-1 p-6 gap-6">
          <div className="col-span-2 space-y-4 text-center">
            <div className="relative">
              <div className="font-medium text-xl">Lifetime Access</div>
              <div className="border inline p-1 px-3 rounded-md bg-black text-white border-black/50 text-xs font-bold ">
                79 user left
              </div>
            </div>
            <div className="text-7xl">$59</div>
            <div className="font-xl font-medium">
              Pay once. Build <span className="font-bold">unlimited </span>
              projects
            </div>
            <div>
              <Link
                href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0"
                className="bg-[#3A30BA] text-white rounded-3xl px-12 py-3 inline-block"
              >
                Get Lifetime Access
              </Link>
              <div>
                <small className="font-semibold flex items-center justify-center mt-1">
                  <span>
                    <svg
                      className="text-black text-opacity-80 h-4 w-4 mr-0.5"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        d="M200 144h40v-40a40 40 0 1 0-40 40zm152-40a40 40 0 0 0-80 0v40h40a40 40 0 0 0 40-40z"
                      ></path>
                      <path d="M80 416a64 64 0 0 0 64 64h92a4 4 0 0 0 4-4V292a4 4 0 0 0-4-4H88a8 8 0 0 0-8 8zm160-164V144h32v108a4 4 0 0 0 4 4h140a47.93 47.93 0 0 0 16-2.75A48.09 48.09 0 0 0 464 208v-16a48 48 0 0 0-48-48h-40.54a2 2 0 0 1-1.7-3A72 72 0 0 0 256 58.82 72 72 0 0 0 138.24 141a2 2 0 0 1-1.7 3H96a48 48 0 0 0-48 48v16a48.09 48.09 0 0 0 32 45.25A47.93 47.93 0 0 0 96 256h140a4 4 0 0 0 4-4zm32-148a40 40 0 1 1 40 40h-40zm-74.86-39.9A40 40 0 0 1 240 104v40h-40a40 40 0 0 1-2.86-79.89zM276 480h92a64 64 0 0 0 64-64V296a8 8 0 0 0-8-8H276a4 4 0 0 0-4 4v184a4 4 0 0 0 4 4z"></path>
                    </svg>
                  </span>
                  For the first 100 customers
                </small>
              </div>
            </div>
          </div>
          <div>
            {BUILD_FEATURES.map((feature) => (
              <li key={feature.title}>{feature.title}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
