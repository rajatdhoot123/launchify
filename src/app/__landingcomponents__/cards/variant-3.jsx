const Card = () => {
  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full bg-white p-4">
        <div className="p-6 md:p-10 rounded-xl bg-blue-50">
          <div className="inline-flex rounded-full bg-white p-4">
            <img className="h-6 w-6" src="/__images__/select.png" alt="" />
          </div>

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
            Select Component →
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Choose building blocks intuitively.
          </p>
        </div>

        <div className="p-6 md:p-10 rounded-xl bg-blue-50">
          <div className="inline-flex rounded-full bg-white p-4">
            <img className="h-6 w-6" src="/__images__/export.png" alt="" />
          </div>

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
            Export Code →
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Open the code in any code editor.
          </p>
        </div>

        <div className="p-6 md:p-10 rounded-xl bg-blue-50">
          <div className="inline-flex rounded-full bg-white p-4">
            <img className="h-6 w-6" src="/__images__/customise.png" alt="" />
          </div>

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
            Customise →
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Customise the content as per need.
          </p>
        </div>

        <div className="p-6 md:p-10 rounded-xl bg-blue-50">
          <div className="inline-flex rounded-full bg-white p-4">
            <img className="h-6 w-6" src="/__images__/publish.png" alt="" />
          </div>

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
            Publish &nbsp; ✓⃝
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            All set to go live seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
