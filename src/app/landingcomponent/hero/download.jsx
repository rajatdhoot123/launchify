"use client";

import Link from "next/link";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { logEvent } from "@/app/utils__/events";
import Loader from "@/app/components/__loader/loader";
import { useToast } from "@/components/ui/use-toast";

export const DownloadExtension = () => {
  const [loader, setLoader] = useState(false);
  const { toast } = useToast();

  const handleNextJSDownload = async () => {
    setLoader(true);
    logEvent("extension_download", {
      event_name: "handle_download",
    });

    try {
      const response = await fetch("/handle_export/chrome-extension/nextjs", {
        method: "GET",
      });

      if (response.ok) {
        const res_blob = await response.blob();
        const url = window.URL.createObjectURL(res_blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "chrome-extension";
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        throw response;
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      if (error instanceof Response) {
        const { message } = await error.json();

        switch (error.status) {
          case 403:
            toast({
              title: "Something went wrong",
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4">
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
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4">
                    Subscribe Now
                  </Link>
                </ToastAction>
              ),
            });
        }
      }
    }
  };

  const handleDownload = async () => {
    setLoader(true);
    logEvent("extension_download", {
      event_name: "handle_download",
    });

    try {
      const response = await fetch("/handle_export/chrome-extension", {
        method: "GET",
      });

      if (response.ok) {
        const res_blob = await response.blob();
        const url = window.URL.createObjectURL(res_blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "chrome-extension";
        link.click();
        window.URL.revokeObjectURL(url);
        handleNextJSDownload();
      } else {
        throw response;
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      if (error instanceof Response) {
        const { message } = await error.json();

        switch (error.status) {
          case 403:
            toast({
              title: "Something went wrong",
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4">
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
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4">
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
    <div className="flex space-x-6">
      <button
        onClick={handleDownload}
        className="bg-[#3A30BA] text-white rounded-3xl px-5 py-3 inline-flex items-center space-x-2"
      >
        {loader && <Loader />}
        <span>Download Extension</span>
      </button>
    </div>
  );
};
