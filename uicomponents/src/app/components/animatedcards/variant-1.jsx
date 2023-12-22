const AnimatedCard = () => {
  return (
    <div
      className="FMT__container__contents"
      style={{
        display: "flex",
        width: "max-content",
        marginLeft: "-4992px",
        transform: "translateX(-1018.17px) translateZ(0px)",
      }}
    >
      <div className="flex">
        <div className="group flex flex-col justify-center text-center py-4 relative hover:cursor-pointer">
          <img
            alt="Allen Taylor"
            loading="lazy"
            width={612}
            height={612}
            decoding="async"
            data-nimg={1}
            className="w-48 px-4 group-hover:blur-sm group-hover:opacity-20 transition-all cursor-pointer"
            style={{ color: "transparent" }}
            sizes="160px"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fallen_taylor.95c6afed.jpg&w=3840&q=75"
          />
          <div className="group-hover:block hidden text-slate-800 text-xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:cursor-pointer">
            Allen Taylor
          </div>
        </div>
        {/* Add the remaining items following the same structure */}
      </div>
      <div className="flex">
        {/* Repeat the structure for the second set of items */}
      </div>
    </div>
  );
};

export default AnimatedCard;
