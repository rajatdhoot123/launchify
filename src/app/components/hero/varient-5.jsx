const Hero = () => {
  return (
    <div className="bg-white relative pb-40 dark:bg-gray-900">
      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
          Run successful remote and <br className="lg:block hidden" />{" "}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Hybrid teams
          </span>
          .
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
              DailyBot takes chat and collaboration to the next level: daily
              standups, team check-ins, surveys, kudos, best companion bot for
              your virtual watercooler, 1:1 intros, motivation tracking and
              more.
            </p>
            <span className="block font-semibold text-gray-500 dark:text-gray-400">
              The best companion bot for your chat app.
            </span>
            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              <a
                aria-label="add to slack"
                className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                target="_blank"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="w-6 h-6"
                    src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png"
                    alt="slack logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Slack
                  </span>
                </div>
              </a>
              <a
                aria-label="add to chat"
                className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
                target="_blank"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="w-6 h-6"
                    src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png"
                    alt="chat logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Google Chat
                  </span>
                </div>
              </a>
              <a
                aria-label="add to zoom"
                className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30"
                target="_blank"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="w-6 h-6"
                    src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png"
                    alt="chat logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Zoom
                  </span>
                </div>
              </a>
            </div>

            <div className="dark:text-gray-300">
              🔥🌟
              <span>Other integrations :</span>
              <a
                className="font-semibold text-gray-700 dark:text-gray-200"
                target="_blank"
              >
                Discord,
              </a>
              <a
                className="font-semibold text-gray-700 dark:text-gray-200"
                target="_blank"
              >
                Telegram
              </a>
            </div>

            <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
              <img
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
            </div>
          </div>
          <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
            <div className="relative w-full">
              <div
                aria-hidden="true"
                className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
              ></div>
              <img
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                className="relative w-full"
                alt="wath illustration"
                loading="lazy"
                width="320"
                height="280"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
