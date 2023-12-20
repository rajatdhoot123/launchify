import { Dialog, Button, Flex } from "@radix-ui/themes";

const MoreFunctionality = ({ children }) => {
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
        <Dialog.Title>Features</Dialog.Title>

        <div className="w-full overflow-scroll p-5">Add remove</div>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>

          <Button>Copy</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default MoreFunctionality;
