import React from "react";


const Title = ({
  variant = "lg",
  className = "",
  children
} )  => {
  return (
    <div
      className={`heading space-y-6 text-center text-dark z-10 ${className}`}
    >
      <h2
        className={`${
          variant == "lg"
            ? "text-3xl sm:text-4xl lg:text-5xl"
            : "text-3xl sm:text-5xl lg:text-7xl"
        }  font-bold leading-loose`}
        style={{
          lineHeight: "1.25"
        }}
      >
        {children}
      </h2>
    </div>
  );
};


export const SubTitle = ({ subTitleClass, children }) => {
  return (
    <p
      className={`mx-auto font-medium leading-relaxed text-center text-md md:text-lg ${subTitleClass}`}
    >
      {children}
    </p>
  );
}


export default Title;
