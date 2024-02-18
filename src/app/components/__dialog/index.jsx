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
import { useEffect, useState } from "react";

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

const DialogComponent = ({ children, handleShowCode, title }) => {
  const [code, setCode] = useState("");
  useEffect(() => {
    setCode(format(handleShowCode()));
  }, [handleShowCode]);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    } else {
      alert(text);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Code</DialogTitle>
          <DialogDescription>{`${title} Component Code`}</DialogDescription>
        </DialogHeader>

        <div className="max-h-[60vh] bg-black w-full overflow-scroll p-5">
          <code className="whitespace-pre text-white">{code}</code>
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

export default DialogComponent;
