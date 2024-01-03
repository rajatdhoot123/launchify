import {
  Dialog,
  Button,
  Flex,
  TextField,
  Text,
  Checkbox,
  TextArea,
} from "@radix-ui/themes";
import { useState } from "react";

const CopyWritingDialog = ({
  dispatch,
  children,
  title,
  data,
  setState,
  state,
  is_open,
}) => {
  const [{ open_ai_key, open_ai_prompt }, set_open_ai] = useState(state);
  const [active_component, set_active_components] = useState({});

  const handleClose = () => {
    dispatch({
      type: "CLOSE_COPWRITING_MODAL",
      payload: {
        open_ai_key,
        open_ai_prompt,
      },
    });
  };

  const handleGenerate = () => {
    dispatch({
      type: "CLOSE_COPWRITING_MODAL",
      payload: {
        open_ai_key,
        open_ai_prompt,
      },
    });
  };
  return (
    <Dialog.Root open={is_open}>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content
        className="relative flex flex-col"
        style={{ width: "80%" }}
      >
        <Dialog.Close
          onClick={handleClose}
          className="absolute right-4 cursor-pointer"
        >
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
        <Dialog.Title>Export With Copywriting</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {title}
        </Dialog.Description>
        <div className="w-full overflow-scroll p-5 space-y-6">
          <TextField.Root>
            <TextField.Slot className="text-bold">Open Ai Key</TextField.Slot>
            <TextField.Input
              value={open_ai_key}
              name="open_ai"
              onChange={(e) => {
                set_open_ai((prev) => ({
                  ...prev,
                  open_ai_key: e.target.value,
                }));
              }}
              placeholder="Enter Open AI Key"
            />
          </TextField.Root>
          <TextArea
            value={open_ai_prompt}
            onChange={(e) => {
              set_open_ai((prev) => ({
                ...prev,
                open_ai_prompt: e.target.value,
              }));
            }}
            size="2"
            placeholder="Enter Your Use Case"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(data?.content ?? []).map(({ type }) => (
              <Text key={type} as="label" size="2">
                <Checkbox
                  className="mr-2"
                  onCheckedChange={(val) =>
                    set_active_components((prev) => ({
                      ...prev,
                      [type]: val,
                    }))
                  }
                  checked={active_component[type]}
                />
                {type}
              </Text>
            ))}
          </div>
        </div>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button onClick={handleGenerate}>Generate</Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleClose} variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CopyWritingDialog;
