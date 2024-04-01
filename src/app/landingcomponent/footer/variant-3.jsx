const Footer = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-center text-teal-600">
        <img src="/logo.png" className="h-12 w-12" />
      </div>

      <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
        Boilercode by{" "}
        <a href="http://www.kwiktwik.com"> KwikTwik Technologies PVT LTD </a>{" "}
      </p>

      <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
        Follow us on social media for the freshest updates and exclusive
        content. Your journey with us is just beginning.
      </p>

      <ul className="mt-12 flex justify-center gap-6 md:gap-8">
        <li>
          <a
            href="https://twitter.com/yeskhush_5"
            rel="noreferrer"
            target="_blank"
            className="  transition hover: /75"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
