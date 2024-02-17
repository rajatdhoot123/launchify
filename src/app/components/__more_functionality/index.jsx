import { FLOATER_SELECT } from "@/app/constants__/floater";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Features</DialogTitle>
          <DialogDescription>
            Select / Remove Components from here
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4 p-5">
          {FLOATER_SELECT.map(({ title, item_id }) => (
            <div key={item_id} className="flex items-center space-x-2">
              <Checkbox
                checked={active_component[item_id]?.active}
                onCheckedChange={(val) =>
                  set_active_components((prev) => ({
                    ...prev,
                    [item_id]: {
                      ...prev[item_id],
                      active: val,
                    },
                  }))
                }
                id="terms"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {title}
              </label>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={(e) => e.stopPropagation()}
              variant="soft"
              color="gray"
            >
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
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
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MoreFunctionality;
