"use client";
import { WEBSITES_TEMPLATES } from "@/boilercode/constants";
import Link from "next/link";
import NextBoilerPlate from "../components/integtrations";
import { useRef } from "react";

const WithTemplate = () => {
  const state_ref = useRef({});

  return (
    <div className="container mx-auto py-12 flex gap-6">
      <div className="w-80 flex-shrink-0">
        <NextBoilerPlate ref={state_ref} integrations={true} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-8 gap-6">
        {WEBSITES_TEMPLATES.map((website) => (
          <Link
            target="_blank"
            href={`https://templates.launchify.club/${website.link}`}
            key={website.name}
          >
            <div className="space-y-2">
              <div className="border-2 rounded-lg">
                {website.image.map((image) => (
                  <img
                    key={image}
                    className="object-contain"
                    src={`https://templates.launchify.club/${image}`}
                    alt={website.type}
                    width={400}
                    height={200}
                  />
                ))}
              </div>
              <div>
                <h3>{website.name}</h3>
                <p>{website.description}</p>
                <div>
                  <div className="flex flex-col">
                    <span>{website.type}</span>
                    <span className="text-black text-opacity-65 font-semibold text-sm">
                      {`Author: ${website.author}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WithTemplate;
