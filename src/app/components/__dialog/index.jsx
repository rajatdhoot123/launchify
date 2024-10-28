import { logEvent } from "@/app/utils__/events";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

function format(html) {
  var tab = "\t";
  var result = "";
  var indent = "";

  html.split(/>\s*</).forEach(function (element) {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }

    result += indent + "<" + element + ">\r\n";

    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
      indent += tab;
    }
  });

  return result.substring(1, result.length - 3);
}

const CodeDialog = ({ children, handleCode, data }) => {
  const [code, setCode] = useState({ path: "", file: "", actions: "" });
  const [isOpen, setIsOpen] = useState(false);

  const handleComponentExport = useCallback(async () => {
    logEvent("export_component_clicked", {
      event_name: "export_component_clicked",
    });

    try {
      const response = await fetch("/handle_export/components", {
        method: "POST",
        body: JSON.stringify({
          data,
        }),
      });

      if (response.ok) {
        const res = await response.json();

        setCode(res.files[0]);
      } else {
        throw response;
      }
    } catch (error) {
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
  }, [data]);

  useEffect(() => {
    if (isOpen) {
      (async () => {
        if (isOpen) {
          const response = await handleComponentExport();
        }
      })();
    }
  }, [handleCode, handleComponentExport, isOpen]);
  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code.file);
    } else {
      alert(text);
    }
  };

  return (
    <Dialog
      onOpenChange={(state) => {
        setIsOpen(state);
      }}
    >
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Code</DialogTitle>
          <DialogDescription>{code?.path}</DialogDescription>
        </DialogHeader>

        <div className="max-h-[60vh] bg-black w-full overflow-scroll p-5">
          <code className="whitespace-pre text-white">{code.file}</code>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button onClick={handleCopy} type="button">
            Copy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CodeDialog;
