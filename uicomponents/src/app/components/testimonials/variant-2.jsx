import { Card, CardContent, CardHeader } from "@/components/ui/card";

const CARDS = [
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
];

const Testimonials = () => {
  return (
    <div className="container">
      <h3 className="md:text-3xl text-center my-12">
        Join thousands of happy clients
      </h3>
      <div className=" grid md:grid-cols-3 grid-cols-1 mx-auto gap-5">
        {CARDS.map((card, index) => (
          <Card key={index}>
            <CardContent className="p-5">
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/300"
                    alt=""
                    className="object-cover"
                  />
                </span>
                <div className="text-left">
                  <h3 className="text-base font-semibold">{card.name}</h3>
                  <p className="text-sm text-gray-400">{card.handle}</p>
                </div>
              </div>
              <div className="mt-4 flex text-sm">
                <p className="text-sm">
                  <span className="text-blue-400 font-semibold">
                    {card.fancy}
                  </span>
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 w-full">
        <h3 className="my-5 flex justify-center items-center text-center text-lg  font-extrabold uppercase">
          <span className="mr-3 w-16 h-1 "></span>They trusted Us
          <span className="ml-3 w-16 h-1 "></span>
        </h3>

        <div className="flex  justify-around items-center">
          <svg
            className="h-20 w-20 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
            />
          </svg>

          <svg
            className="h-20 w-20 text-primary"
            version="1.1"
            viewBox="0 0 512 512"
          >
            <g id="comp_x5F_345-twitter">
              <g>
                <path
                  fill="currentColor"
                  d=" M438.717,162.307c0.292,4.088,0.292,8.174,0.292,12.259c0,124.634-94.861,268.237-268.237,268.237    c-53.414,0-103.033-15.468-144.771-42.321c7.588,0.874,14.885,1.166,22.766,1.166c44.073,0,84.645-14.884,117.043-40.276    c-41.447-0.877-76.181-28.022-88.147-65.383c5.838,0.875,11.675,1.459,17.805,1.459c8.464,0,16.93-1.168,24.809-3.209    c-43.197-8.758-75.597-46.702-75.597-92.527v-1.167c12.55,7.005,27.146,11.383,42.614,11.967    c-25.393-16.93-42.03-45.826-42.03-78.516c0-17.515,4.669-33.566,12.842-47.577c46.41,57.208,116.169,94.569,194.391,98.655    c-1.458-7.005-2.335-14.3-2.335-21.599c0-51.954,42.032-94.277,94.277-94.277c27.145,0,51.662,11.383,68.884,29.771    c21.307-4.085,41.736-11.967,59.834-22.766c-7.005,21.892-21.891,40.279-41.446,51.954c18.973-2.042,37.361-7.298,54.289-14.594    C473.158,132.243,457.104,148.88,438.717,162.307L438.717,162.307z"
                />
              </g>
            </g>
            <g id="Layer_1" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 32 32"
            className="h-20 w-20 text-primary"
          >
            <g id="LinkedIn">
              <path
                d="M4.983,8.875H4.94C2.657,8.875,1,7.361,1,5.275c0-2.089,1.692-3.606,4.023-3.606   c2.292,0,3.928,1.476,3.977,3.589C9,7.359,7.311,8.875,4.983,8.875z M5.023,2.669C3.243,2.669,2,3.741,2,5.275   c0,1.531,1.209,2.601,2.94,2.601h0.043C6.76,7.875,8,6.804,8,5.27C7.963,3.694,6.795,2.669,5.023,2.669z"
                fill="currentColor"
              />
              <path
                d="M7.5,29h-5C2.224,29,2,28.776,2,28.5v-18C2,10.224,2.224,10,2.5,10h5C7.776,10,8,10.224,8,10.5v18   C8,28.776,7.776,29,7.5,29z M3,28h4V11H3V28z"
                fill="currentColor"
              />
              <path
                d="M30.5,29h-6c-0.276,0-0.5-0.224-0.5-0.5V19c0-1.654-1.346-3-3-3s-3,1.346-3,3v9.5   c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5v-18c0-0.276,0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5v3.014   c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V11h-5v17h5v-9c0-2.206,1.794-4,4-4s4,1.794,4,4v9h5V17.5c0-3.584-2.916-6.5-6.5-6.5   c-1.384,0-2.722,0.406-3.871,1.173c-0.229,0.152-0.54,0.092-0.693-0.138s-0.092-0.54,0.139-0.693C20.388,10.464,21.918,10,23.5,10   c4.136,0,7.5,3.364,7.5,7.5v11C31,28.776,30.776,29,30.5,29z"
                fill="currentColor"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
