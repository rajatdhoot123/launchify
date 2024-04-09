import React from 'react'

const Title = ({
    variant="lg",
    title="",
    subTitle="",
    className="",
    subTitleClass="",
    children
}) => {
    return (
      <div
        className={`heading space-y-6 text-center text-dark z-10 ${className}`}
      >
        <h2
          className={`${
            variant == "lg"
              ? "text-3xl sm:text-4xl lg:text-5xl"
              : "text-4xl sm:text-6xl lg:text-8xl"
          }  font-medium`}
        >
          {title}
          {children}
        </h2>
        {subTitle && (
          <p
            className={`text-[#343E3A] mx-auto  text-md w-3/4 lg:w-1/2 ${subTitleClass}`}
          >
            {subTitle}
          </p>
        )}
      </div>
    );
}

export default Title
