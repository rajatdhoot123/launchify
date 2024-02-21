"use client"
import React, { useState } from "react";

const FaqAccordion = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-6 container">
      <h1 className="text-2xl font-bold  mb-4">FAQs</h1>

      {/* Accordion component */}
      <div className="divide-y">
        {/* Accordion item 1 */}
        {[
          {
            title: "What are the advantages of your service?",
            content:
              " If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          },
          {
            title: "What are the advantages of your service?",
            content:
              " If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          },
          {
            title: "What are the advantages of your service?",
            content:
              " If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          },
        ].map(({ title, content }, index) => (
          <div key={`${title}-${index}`} className="py-2">
            <h2>
              <button
                id="faqs-title-01"
                type="button"
                className="flex items-center justify-between w-full text-left font-semibold py-2"
                onClick={() => setExpanded(index)}
                aria-expanded={expanded === index}
                aria-controls="faqs-text-01"
              >
                <span>{title}</span>
                <svg
                  className="fill-indigo-500 shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      expanded === index ? "!rotate-180" : ""
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      expanded === index ? "!rotate-180" : ""
                    }`}
                  />
                </svg>
              </button>
            </h2>
            <div
              id="faqs-text-01"
              role="region"
              aria-labelledby="faqs-title-01"
              className={`grid text-sm text-foreground/70 overflow-hidden transition-all duration-300 ease-in-out ${
                expanded === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-3">{content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
