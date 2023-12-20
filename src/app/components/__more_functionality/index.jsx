"use client";
import { FLOATER_SELECT } from "@/app/constants__/floater";
import { Dialog, Button, Flex, Text, Checkbox, Link } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const MoreFunctionality = ({ children, components, setState }) => {
  const [active_component, set_active_components] = useState({});

  useEffect(() => {
    const modified = FLOATER_SELECT.reduce((acc, current) => {
      const { selected } =
        components.find(({ item_id }) => item_id === current.item_id) || {};
      return {
        ...acc,
        [current.item_id]: {
          active: Boolean(selected),
          selected: selected,
        },
      };
    }, {});

    set_active_components(modified);
  }, [components]);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Link className="text-sm" onClick={(e) => e.stopPropagation()}>
          {children}
        </Link>
      </Dialog.Trigger>

      <Dialog.Content
        onClick={(e) => e.stopPropagation()}
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

        <div className="w-full overflow-scroll p-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FLOATER_SELECT.map(({ title, item_id }) => (
              <Text key={title} as="label" size="2">
                <Checkbox
                  className="mr-2"
                  onCheckedChange={(val) =>
                    set_active_components((prev) => ({
                      ...prev,
                      [item_id]: {
                        ...prev[item_id],
                        active: val,
                      },
                    }))
                  }
                  checked={active_component[item_id]?.active}
                />
                {title}
              </Text>
            ))}
          </div>
        </div>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button
              onClick={(e) => e.stopPropagation()}
              variant="soft"
              color="gray"
            >
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setState((prev) => ({
                  ...prev,
                  components: FLOATER_SELECT.filter(
                    ({ item_id }) => active_component[item_id].active
                  ).map((comp) => {
                    return {
                      ...comp,
                      selected:
                        active_component[comp.item_id].selected ||
                        comp.selected,
                    };
                  }),
                }));
              }}
            >
              Done
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default MoreFunctionality;
