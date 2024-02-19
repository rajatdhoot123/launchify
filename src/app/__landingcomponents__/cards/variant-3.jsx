import { Card as ShadCnCard } from "@/components/ui/card";

const Card = () => {
  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full  p-4">
        <ShadCnCard className="p-5">
          <div className="inline-flex rounded-full bg-primary p-4">
            <img className="h-6 w-6" src="/__images__/select.png" alt="" />
          </div>

          <h3 className="mt-4 text-base md:text-xl font-medium ">
            Select Component →
          </h3>
          <p className="mt-4 text-base md:text-lg text-primary/80">
            Choose building blocks intuitively.
          </p>
        </ShadCnCard>

        <ShadCnCard className="p-5">
          <div className="inline-flex rounded-full bg-primary p-4">
            <img className="h-6 w-6" src="/__images__/export.png" alt="" />
          </div>

          <h3 className="mt-4 text-base md:text-xl font-medium ">
            Export Code →
          </h3>
          <p className="mt-4 text-base md:text-lg text-primary/80">
            Open the code in any code editor.
          </p>
        </ShadCnCard>

        <ShadCnCard className="p-5">
          <div className="inline-flex rounded-full bg-primary p-4">
            <img className="h-6 w-6" src="/__images__/customise.png" alt="" />
          </div>

          <h3 className="mt-4 text-base md:text-xl font-medium ">
            Customise →
          </h3>
          <p className="mt-4 text-base md:text-lg text-primary/80">
            Customise the content as per need.
          </p>
        </ShadCnCard>

        <ShadCnCard className="p-5">
          <div className="inline-flex rounded-full bg-primary p-4">
            <img className="h-6 w-6" src="/__images__/publish.png" alt="" />
          </div>

          <h3 className="mt-4 text-base md:text-xl font-medium ">
            Publish &nbsp; ✓⃝
          </h3>
          <p className="mt-4 text-base md:text-lg text-primary/80">
            All set to go live seamlessly.
          </p>
        </ShadCnCard>
      </div>
    </div>
  );
};

export default Card;
