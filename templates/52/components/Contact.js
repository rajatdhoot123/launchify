import React from "react";
import Image from "next/image";
import Reddit from "./../images/reddit.svg";
import Facebook from "./../images/facebook.svg";
import Twitter from "./../images/twitter.svg";
import Skipe from "./../images/skipe.svg";

const Contact = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="flex justify-center items-center mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center py-8 lg:py-16 px-4 mx-auto w-3/4 gap-16 space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Contact Form */}
          <form action="#" className="w-full space-y-4">
            <input
              type="email"
              id="email"
              className="block w-full p-2.5 text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Name"
              required
            />
            <input
              type="text"
              id="subject"
              className="block w-full p-2.5 text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Email"
              required
            />
            <input
              type="text"
              id="website"
              className="block w-full p-2.5 text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Website"
              required
            />
            <textarea
              id="message"
              rows="6"
              className="block w-full p-2.5 text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave a comment..."
            ></textarea>

            <div className="flex rounded-md justify-start">
              <div className="flex flex-col lg:flex-row gap-4 items-start">
                <div>
                  <button
                    type="submit"
                    className="p-6 text-sm font-medium bg-black rounded-lg text-center text-white focus:ring-4 focus:outline-none"
                  >
                    Get in Touch
                  </button>
                </div>
                <div className="flex gap-4">
                  <div className="group hover:bg-black hover:text-white p-4 rounded-lg border-2 border-black transition duration-300 ease-in-out">
                    <Image
                      src={Facebook}
                      alt="Facebook"
                      width={30}
                      height={30}
                      className="group-hover:invert"
                    />
                  </div>
                  <div className="group hover:bg-black hover:text-white p-4 rounded-lg border-2 border-black transition duration-300 ease-in-out">
                    <Image
                      src={Reddit.src}
                      alt="Reddit"
                      width={30}
                      height={30}
                      className="group-hover:invert"
                    />
                  </div>
                  <div className="group hover:bg-black hover:text-white p-4 rounded-lg border-2 border-black transition duration-300 ease-in-out">
                    <Image
                      src={Twitter}
                      alt="Twitter"
                      width={30}
                      height={30}
                      className="group-hover:invert"
                    />
                  </div>
                  <div className="group hover:bg-black hover:text-white p-4 rounded-lg border-2 border-black transition duration-300 ease-in-out">
                    <Image
                      src={Skipe}
                      alt="Skipe"
                      width={30}
                      height={30}
                      className="group-hover:invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Contact Information */}
          <div className="flex flex-col justify-center items-start gap-4 w-80 lg:w-full ">
            <p className="text-6xl font-bold">
              Lets{" "}
              <span className="text-white font-extrabold" style={{
                    textShadow:
                      "-3px -3px 0 black, 0 -3px 0 black, 3px -3px 0 black, -3px 0 0 black, 3px 0 0 black, -3px 3px 0 black, 0 3px 0 black, 3px 3px 0 black",
                  }}>
                Talk
              </span>{" "}
              for
              <br />
              Something Special
            </p>
            <p className="text-gray-500">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <p className="font-bold">Email: example@example.com</p>
            <p className="font-bold">Phone: +123 456 789</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
