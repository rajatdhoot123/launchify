import Link from "next/link";
import { ShadesGreen, ShadeRed } from "./shades";
import { DownloadExtension } from "./download";
const Video = () => {
  return (
    <div className="relative">
      <ShadesGreen />
      <video
        muted
        src="https://dfs98oe0smqfo.cloudfront.net/launchify/landing_page.mp4"
        autoPlay
        controls
        className="rounded-xl md:w-8/12 w-full aspect-video mx-auto relative z-10"
      />
      <ShadeRed />
    </div>
  );
};

export default function Hero({ source = "" }) {
  const isExtension = source === "extension";
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-24 relative md:pt-24 pt-12">
        <div className="md:w-[750px] w-[380px] gap-10 flex flex-col items-center">
          {!isExtension && (
            <div className="border-2 inline-block border-black rounded-3xl p-3 px-5 text-[#3A38B7] font-semibold">
              Not your "Typical Boilerplate" anymore
            </div>
          )}
          <div className="md:text-7xl text-5xl font-medium">
            Ship 🚀 your {isExtension ? "Extension" : "Startup"} in Days, not
            Weeks
          </div>
          <div>
            <div className="text-black text-opacity-60 text-lg md:text-xl">
              {isExtension
                ? "Start developing your chrome extension with modern tools like ReactJS, TailwindCSS. Want to build a Side Bar, Side Panel, inject content scripts or a popup? we have them all covered"
                : "Prebuilt UI components, ready-to-use NextJS boilerplate codes & AI integration to make your app"}

              <span className="font-bold">&nbsp;Production ready</span>
            </div>
          </div>
          <div className="md:flex space-y-6 md:space-y-0 md:space-x-6">
            <Link
              href="/editor"
              className="bg-[#3A30BA] text-white rounded-3xl px-5 py-3 block"
            >
              Start Building With Drag & Drop
            </Link>
            <Link
              href="/with-template"
              className="bg-[#3A30BA] text-white rounded-3xl px-5 py-3 block"
            >
              Start With Next JS Templates
            </Link>
          </div>
          {!isExtension ? (
            <Link
              href="/extension"
              className="bg-[#3A30BA] text-white rounded-3xl px-5 py-3 block"
            >
              <div>Start With Chrome Extension Boilerplate</div>
            </Link>
          ) : (
            <DownloadExtension />
          )}

          <Link
            target="_blank"
            href="https://github.com/rajatdhoot123/nextjs-blog-cli"
            className="border-2 p-2 rounded-md"
          >
            To integrate blog with your app, you can use our open source
            package&nbsp;
            <span className="font-bold">NextJS Blog CLI</span>
          </Link>
          {/* <button className=" rounded-3xl h-12 flex items-center md:ml-5 space-x-1">
              <span className="bg-[#F480D4] p-2 rounded-full h-8 w-8 flex justify-center">
                <svg
                  className="text-white"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                </svg>
              </span>
              <span>Watch Demo</span>
            </button> */}
        </div>
        <Video />
      </div>
    </>
  );
}
