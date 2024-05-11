"use client";
import { WEBSITES_TEMPLATES } from "@/boilercode/constants";
import Link from "next/link";
import NextBoilerPlate from "../components/integtrations";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { logEvent } from "@/app/utils__/events";
import { toast } from "@/components/ui/use-toast";
import Loader from "@/app/components/__loader/loader";
import CheckoutForm from "@/app/stripe/CheckoutForm";
import { useConfig } from "../__context/ConfigContext";

const WithTemplate = () => {
  const { paid_templates } = useConfig();
  const state_ref = useRef({});
  const [loader, setLoader] = useState({});

  const handleExport = async ({ id, dependencies = {} }) => {
    setLoader((prev) => ({ ...prev, [id]: true }));
    const state = state_ref.current;
    logEvent("export_clicked", {
      event_name: "export_clicked",
    });

    try {
      const response = await fetch("/handle_export", {
        method: "POST",
        body: JSON.stringify({
          twak_to_id: state.twak_to_id,
          post_hog: state.post_hog,
          ga_id: state.ga_id,
          crisp_id: state.crisp_id,
          pages: state.pages,
          premium_features: state.premium_features,
          template: id,
          dependencies,
        }),
      });

      if (response.ok) {
        const res_blob = await response.blob();
        const url = window.URL.createObjectURL(res_blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "uicomponents";
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        throw response;
      }
      setLoader((prev) => ({ ...prev, [id]: false }));
    } catch (error) {
      setLoader((prev) => ({ ...prev, [id]: false }));
      if (error instanceof Response) {
        const { message } = await error.json();

        switch (error.status) {
          case 403:
            toast({
              title: "Something went wrong",
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                    Subscribe Now
                  </Link>
                </ToastAction>
              ),
            });
          /* ... */
          default:
            toast({
              title: error.statusText,
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                    Subscribe Now
                  </Link>
                </ToastAction>
              ),
            });
        }
      }
    }
  };

  return (
    <div className="py-12">
      <div className="w-80 flex-shrink-0 fixed left-0 pl-5 hidden sm:block">
        <NextBoilerPlate ref={state_ref} integrations={true} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-8 gap-6 sm:ml-80 px-5">
        {WEBSITES_TEMPLATES.map((website) => {
          const is_paid = paid_templates
            .map(({ product_id }) => +product_id)
            .includes(+website.id);
          return (
            <div
              className="border p-5 rounded-md flex flex-col justify-between"
              key={website.name}
            >
              <Link
                target="_blank"
                href={`https://templates.launchify.club/${website.link}`}
              >
                <div className="space-y-2">
                  <div className="border-2 rounded-lg">
                    {website.image.map((image) => (
                      <img
                        loading="lazy"
                        key={image}
                        className="object-contain"
                        src={`https://templates.launchify.club${image}`}
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
                          {`Developed by: ${website.author}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {is_paid ? (
                <Button
                  disabled={!is_paid}
                  onClick={() => handleExport(website)}
                  className="w-full mt-5"
                >
                  {loader[website.id] && <Loader />}
                  &nbsp;&nbsp;Export
                </Button>
              ) : (
                <CheckoutForm templateId={website.id} uiMode="hosted" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WithTemplate;
