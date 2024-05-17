const Section2 = () => {
  const arr = [
    {
      logo: "📣",
      title: "Productivity",
      desc: "Our productivity app allows you to seamlessly collaborate with your team",
    },
    {
      logo: "👯",
      title: "Efficiency",
      desc: "Delegate tasks for every one and track progress in real-time.",
    },
    {
      logo: "🤑",
      title: "Simplification",
      desc: "With centralized communication and task management system",
    },
    {
      logo: "🤝",
      title: "App",
      desc: "Projects are completed on time and within budget + more ad-ons",
    },
    {
      logo: "🎁",
      title: "App",
      desc: "With features such as shared to-do lists, team calendars, and file sharing",
    },
    {
      logo: "💬",
      title: "App",
      desc: "Better communication, faster completion of tasks, and ultimately, increased productivity.",
    },
  ];
  return (
    <div
      className={` sm:px-8 py-16 lg:px-40 px-6 bg-no-repeat bg-cover section2`}
    >
      <div className="flex flex-col items-center space-y-10">
        <div className="flex justify-center"></div>
        <div className="max-w-xl flex flex-col gap-5">
          <p className="text-4xl text-white font-extrabold text-center">
            With intuitive design and <br className="md:block hidden"></br>{" "}
            user-friendly interface
          </p>
          <p className="text-center text-white">
            You will be able to streamline your work and achieve more in less
            time.
          </p>
        </div>
        {/* buton  */}
        <div>
          <button className="text-black bg-white rounded-full font-bold py-3 px-5">
            Find Our Advertisers &rarr;
          </button>
        </div>
        <div className="flex gap-10 items-center flex-wrap justify-center">
          {arr.map((item) => (
            <div
              key={item.logo}
              className=" flex gap-1 justify-center flex-col"
            >
              <p className="text-6xl text-center pb-4">{item.logo}</p>

              <p className="max-w-xs text-center font-medium text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
