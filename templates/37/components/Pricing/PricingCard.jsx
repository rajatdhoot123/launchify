import React from 'react'
import Button from '../ui/Button/Button'
import Tag from '../ui/Tag/Tag';
import { SubTitle } from '../ui/Title/Title';

const PricingCard = ({
    tag,
    cost,
    tagline,
    buttonText,
    features,
    variant = "light"
}) => {
    return (
      <div
        className={`card border-main p-5 py-2 rounded-xl text-dark space-y-8  ${
          variant == "dark" ? "bg-main text-white" : "bg-white text-black"
        }`}
      >
        <div className="card-header space-y-3">
          <Tag variant={variant}>{tag}</Tag>
          <h3 className="text-4xl font-semibold tracking-wide leading-10 flex items-center justify-start gap-3">
            ${cost}{" "}
            <span
              className={`text-[14px] font-medium ${
                variant == "dark" ? "text-white" : "text-black/20"
              }`}
            >
              /month
            </span>
          </h3>
          <p className={`${variant == "dark" && "text-white"} text-start`}>
            {tagline}
          </p>
        </div>

        <Button className={"w-full flex-center gap-4"} variant="white">
          {buttonText}
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="#1053F3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 7.07024H13.2351L10.0861 10.1722L11.4224 11.5L17 6.00572L11.4224 0.5L10.0861 1.82778L13.2235 4.90687H0V7.07024Z"
              fill={`${variant == "light" ? "#242424" : "#1053F3"}`}
            />
          </svg>
        </Button>
        {/* <hr className="opacity-50" /> */}

        <ul className="card-features border-t-2 pt-5 pb-2 space-y-4">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8146 1.31217C16.0974 0.972746 16.0516 0.468294 15.7121 0.185443C15.3727 -0.0974082 14.8683 -0.051549 14.5854 0.287873L7.21265 9.1352L4.62469 5.90026C4.34869 5.55525 3.84525 5.49932 3.50024 5.77533C3.15523 6.05133 3.0993 6.55477 3.3753 6.89978L6.5753 10.8998L7.18735 11.6648L7.81458 10.9122L15.8146 1.31217ZM8 2.00557e-05C9.41552 2.00557e-05 10.7452 0.367658 11.8987 1.01266L10.8518 2.26894C9.99311 1.84083 9.02468 1.60002 8 1.60002C4.46538 1.60002 1.6 4.4654 1.6 8.00002C1.6 11.5346 4.46538 14.4 8 14.4C11.5346 14.4 14.4 11.5346 14.4 8.00002C14.4 7.27284 14.2787 6.57399 14.0553 5.92259L15.2123 4.53417C15.7171 5.58277 16 6.75836 16 8.00002C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8.00002C0 3.58174 3.58172 2.00557e-05 8 2.00557e-05Z"
                  fill="#9FB3C8"
                />
              </svg>

              <span className={`font-medium ${variant == "light" ? "text-black/40" : "text-white"}`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default PricingCard
