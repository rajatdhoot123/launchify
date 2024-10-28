"use client"
const MarqueeComponent = ({ isReverse }) => {
  return (
    <div
      className={`flex shrink-0 justify-around gap-4 ${
        isReverse
          ? "animate-[marquee-vertical_10s_linear_infinite_reverse]"
          : "animate-[marquee-vertical_10s_linear_infinite]"
      }  flex-col`}
    >
      <div className="relative flex h-fit w-full flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md bg-background shadow-2xl">
        <div className="flex flex-row justify-between tracking-tight">
          <div className="flex items-center space-x-2">
            <a
              href="https://twitter.com/Rajat_Dhoot"
              target="_blank"
              rel="noreferrer"
            >
              <img
                title="Profile picture of Ilias Ism"
                alt="illyism"
                height="48"
                width="48"
                src="https://pbs.twimg.com/profile_images/1472444801932926980/Z8F3o0PT_400x400.jpg"
                className="overflow-hidden rounded-full border border-transparent"
              />
            </a>
            <div>
              <a
                href="https://twitter.com/Rajat_Dhoot"
                target="_blank"
                rel="noreferrer"
                className="flex items-center whitespace-nowrap font-semibold"
              >
                Rajat Dhoot
                <svg
                  aria-label="Verified Account"
                  viewBox="0 0 24 24"
                  className="ml-1 inline h-4 w-4 text-blue-500"
                >
                  <g fill="currentColor">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                  </g>
                </svg>
              </a>
              <div className="flex items-center space-x-1">
                <a
                  href="https://twitter.com/Rajat_Dhoot"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-500 transition-all duration-75"
                >
                  @Rajat_Dhoot
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://twitter.com/Rajat_Dhoot/status/1791092303483830542"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Link to tweet</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="break-words leading-normal tracking-tighter text-sm">
          Haters say you cant ship SaaS in a day 😂 Because they haven't seen a
          NextJS boilerplate with drag and drop support yet. Grab LTD at{" "}
          <a href="https://www.launchify.club" target="_blank">
            https://www.launchify.club
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://www.launchify.club/opengraph-image.png"
            className="h-64 rounded-xl border object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="relative flex h-fit w-full flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md bg-background shadow-2xl">
        <div className="flex flex-row justify-between tracking-tight">
          <div className="flex items-center space-x-2">
            <a
              href="https://twitter.com/YesKhush_5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                title=""
                alt="YesKhush_5"
                height="48"
                width="48"
                src="https://pbs.twimg.com/profile_images/1760342422859427840/Y5n_G8ET_400x400.jpg"
                className="overflow-hidden rounded-full border border-transparent"
              />
            </a>
            <div>
              <a
                href="https://twitter.com/YesKhush_5"
                target="_blank"
                rel="noreferrer"
                className="flex items-center whitespace-nowrap font-semibold"
              >
                Khush from Launchify
                <svg
                  aria-label="Verified Account"
                  viewBox="0 0 24 24"
                  className="ml-1 inline h-4 w-4 text-blue-500"
                >
                  <g fill="currentColor">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                  </g>
                </svg>
              </a>
              <div className="flex items-center space-x-1">
                <a
                  href="https://twitter.com/YesKhush_5"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-500 transition-all duration-75"
                >
                  @YesKhush_5
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://twitter.com/YesKhush_5/status/1791092303483830542"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Link to tweet</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="break-words leading-normal tracking-tighter">
          <div className="break-words leading-normal tracking-tighter text-sm">
            Haters say you cant ship SaaS in a day 😂 Because they haven't seen
            a NextJS boilerplate with drag and drop support yet. Grab LTD at{" "}
            <a href="https://www.launchify.club" target="_blank">
              https://www.launchify.club
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://www.launchify.club/opengraph-image.png"
            className="h-64 rounded-xl border object-cover shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

const Animation = () => {
  return (
    <>
      <div className="bg-muted flex overflow-hidden h-screen">
        <div className="group flex overflow-hidden p-2 flex-col h-full w-2/4 object-cover gap-6">
          <MarqueeComponent />
          <MarqueeComponent />
          <MarqueeComponent />
          <MarqueeComponent />
        </div>
        <div className="group flex overflow-hidden p-2 flex-col h-full w-2/4 object-cover gap-6 ">
          <MarqueeComponent isReverse={true} />
          <MarqueeComponent isReverse={true} />
          <MarqueeComponent isReverse={true} />
          <MarqueeComponent isReverse={true} />
        </div>
      </div>
      <style jsx>
        {`
          @keyframes marquee-vertical {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-100%);
            }
          }
        `}
      </style>
    </>
  );
};

export default Animation;
