const Accordion = () => {
  return (
    <div
      id="ctc-component-1-tab-1"
      role="tabpanel"
      aria-labelledby="ctc-component-1-tab-1-item"
      className=""
    >
      <div className="border rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="hs-accordion-group">
          <div className="hs-accordion" id="hs-basic-heading-one">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-collapse-one"
            >
              <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62421 7.86L13.6242 7.85999"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M8.12421 13.36V2.35999"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
              <svg
                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62421 7.86L13.6242 7.85999"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
              Accordion #1
            </button>
            <div
              id="hs-basic-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 h-0"
              aria-labelledby="hs-basic-heading-one"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-heading-two">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-collapse-two"
            >
              <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62421 7.86L13.6242 7.85999"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M8.12421 13.36V2.35999"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
              <svg
                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62421 7.86L13.6242 7.85999"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
              Accordion #2
            </button>
            <div
              id="hs-basic-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 h-0"
              aria-labelledby="hs-basic-heading-two"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-heading-three">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-collapse-three"
            >
              <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62421 7.86L13.6242 7.85999"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M8.12421 13.36V2.35999"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
              <svg
                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62421 7.86L13.6242 7.85999"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
              Accordion #3
            </button>
            <div
              id="hs-basic-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 h-0"
              aria-labelledby="hs-basic-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
