const CARD_DATA = [
  {
    type: "listing",
    attributes: {
      category: "Featured",
      location: {
        name: "Statue of Liberty",
        address: "New York, NY 10004, United States",
      },
      pricing: {
        monthly: "$3,200",
        perSquareFoot: "$1.98",
      },
      propertyDetails: {
        type: "Condominium",
        size: "1,386 sq. ft.",
        furnishingStatus: "Partly furnished",
      },
      agent: {
        name: "John Doe",
        profileStatus: "active",
      },
      icons: [
        {
          icon: "rooms",
          count: "3 + 1",
        },
        {
          icon: "bathrooms",
          count: "2",
        },
        {
          icon: "garages",
          count: "3",
        },
      ],
    },
  },
  {
    type: "listing",
    attributes: {
      category: "Featured",
      location: {
        name: "Statue of Liberty",
        address: "New York, NY 10004, United States",
      },
      pricing: {
        monthly: "$3,200",
        perSquareFoot: "$1.98",
      },
      propertyDetails: {
        type: "Condominium",
        size: "1,386 sq. ft.",
        furnishingStatus: "Partly furnished",
      },
      agent: {
        name: "John Doe",
        profileStatus: "active",
      },
      icons: [
        {
          icon: "rooms",
          count: "3 + 1",
        },
        {
          icon: "bathrooms",
          count: "2",
        },
        {
          icon: "garages",
          count: "3",
        },
      ],
    },
  },
  {
    type: "listing",
    attributes: {
      category: "Featured",
      location: {
        name: "Statue of Liberty",
        address: "New York, NY 10004, United States",
      },
      pricing: {
        monthly: "$3,200",
        perSquareFoot: "$1.98",
      },
      propertyDetails: {
        type: "Condominium",
        size: "1,386 sq. ft.",
        furnishingStatus: "Partly furnished",
      },
      agent: {
        name: "John Doe",
        profileStatus: "active",
      },
      icons: [
        {
          icon: "rooms",
          count: "3 + 1",
        },
        {
          icon: "bathrooms",
          count: "2",
        },
        {
          icon: "garages",
          count: "3",
        },
      ],
    },
  },
  {
    type: "listing",
    attributes: {
      category: "Featured",
      location: {
        name: "Statue of Liberty",
        address: "New York, NY 10004, United States",
      },
      pricing: {
        monthly: "$3,200",
        perSquareFoot: "$1.98",
      },
      propertyDetails: {
        type: "Condominium",
        size: "1,386 sq. ft.",
        furnishingStatus: "Partly furnished",
      },
      agent: {
        name: "John Doe",
        profileStatus: "active",
      },
      icons: [
        {
          icon: "rooms",
          count: "3 + 1",
        },
        {
          icon: "bathrooms",
          count: "2",
        },
        {
          icon: "garages",
          count: "3",
        },
      ],
    },
  },
];

const PropertyListing = ({ data }) => {
  return (
    <div className="relative mx-auto w-full">
      <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
        <div className="shadow p-4 rounded-lg bg-white">
          <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('https://source.unsplash.com/random/400x200?usa')]"></div>
            </div>
          </div>
          <span className="absolute top-0 left-0 inline-flex mt-6 ml-6 px-3 py-1 rounded-lg bg-red-500 text-sm font-medium text-white select-none">
            {data.attributes.category}
          </span>
          <div className="mt-4">
            <h2
              className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
              title={data.attributes.location.name}
            >
              {data.attributes.location.name}
            </h2>
            <p
              className="mt-2 text-sm text-gray-800 line-clamp-1"
              title={data.attributes.location.address}
            >
              {data.attributes.location.address}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <span className="mt-2 xl:mt-0">
                {data.attributes.propertyDetails.type}
              </span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <span className="mt-2 xl:mt-0">
                {data.attributes.propertyDetails.size}
              </span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <span className="mt-2 xl:mt-0">
                {data.attributes.propertyDetails.furnishingStatus}
              </span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <span className="mt-2 xl:mt-0">
                {data.attributes.pricing.perSquareFoot}
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <div className="flex items-center">
              <div className="relative">
                <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
              </div>
              <p className="ml-2 text-gray-800 line-clamp-1">
                {data.attributes.agent.name}
              </p>
            </div>
            <div className="flex justify-end">
              <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                <span className="text-sm uppercase">$</span>
                <span className="text-lg">
                  {data.attributes.pricing.monthly}
                </span>
                /m
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {CARD_DATA.map((data, index) => (
          <PropertyListing key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Card;
