import Link from "next/link";

import { TESTINOMIAL_COLORS } from "../constant";
import React from "react";

const ConditionalLink = ({ link, children }) => {
  return link ? (
    <Link href={link} target="_blank">
      {children}
    </Link>
  ) : (
    children
  );
};

const Features = ({ features, source }) => {
  return (
    <div className="space-y-12">
      <div className="md:w-[550px] gap-12 flex flex-col items-center text-center mx-auto">
        {source === "extension" ? (
          <div className="md:text-4xl text-2xl font-semibold">
            Extensions Built with
            <br />
            Launchify Boilerplate
          </div>
        ) : (
          <div className="md:text-4xl text-2xl font-semibold">
            Build your app instantly.
            <br />
            Launch faster, make 💸
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => {
          return (
            <ConditionalLink link={feature.link} key={index}>
              <div
                style={{
                  backgroundColor:
                    TESTINOMIAL_COLORS[index % TESTINOMIAL_COLORS.length].hex,
                }}
                className="h-full p-5 rounded-md space-y-2"
              >
                <h2 className="text-lg font-semibold flex items-center">
                  <span className="flex-shrink-0">{feature.icon}</span>
                  <span className="ml-2">{feature.title}</span>
                </h2>
                <p className="text-sm leading-6">{feature.description}</p>
              </div>
            </ConditionalLink>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
