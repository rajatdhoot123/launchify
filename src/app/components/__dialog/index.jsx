import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
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
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="ghost">{children}</Button>
      </Dialog.Trigger>

      <Dialog.Content
        className="relative flex flex-col"
        style={{ width: "80%" }}
      >
        <Dialog.Close className="absolute right-4 cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
          </svg>
        </Dialog.Close>
        <Dialog.Title>Code</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {`${title} Component Code`}
        </Dialog.Description>
        <div className="bg-black w-full overflow-scroll p-5">
          <code className="whitespace-pre text-white">{code}</code>
        </div>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>

          <Button onClick={handleCopy}>Copy</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DialogComponent;
