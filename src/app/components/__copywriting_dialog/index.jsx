import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function getUniqueElementsByKey(array, key) {
  const seen = new Set();
  const filter_array = array.filter((item) => {
    const keyValue = item[key];

    if (!seen.has(keyValue)) {
      seen.add(keyValue);
      return true;
    }

    return false;
  });

  return filter_array;
}

import { useState } from "react";

const modify_components = (content) => {
  return content.reduce((acc, current) => {
    const [item_id, variant] = current.split("-");
    return [
      ...acc,
      { item_id: item_id, variant: `variant-${variant}`, key: item_id },
    ];
  }, []);
};

const CopyWritingDialog = ({
  handleExportWithCopywriting,
  dispatch,
  children,
  title,
  data,
  setState,
  state,
  is_open,
}) => {
  const [{ open_ai_key, groq_ai_key, open_ai_prompt }, set_open_ai] =
    useState(state);
  const [active_component, set_active_components] = useState({});

  const handleClose = () => {
    dispatch({
      type: "CLOSE_COPWRITING_MODAL",
      payload: {
        open_ai_key,
        groq_ai_key,
        open_ai_prompt,
      },
    });
  };

  const handleGenerate = () => {
    handleExportWithCopywriting({
      selected_components: modify_components(Object.keys(active_component)),
      open_ai_key,
      groq_ai_key,
      open_ai_prompt,
    });
    dispatch({
      type: "CLOSE_COPWRITING_MODAL",
      payload: {
        open_ai_key,
        groq_ai_key,
        open_ai_prompt,
      },
    });
  };

  return (
    <Dialog open={is_open}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent open={is_open}>
        <DialogTitle>Export With Copywriting</DialogTitle>
        <DialogDescription size="2" mb="4">
          {title}
        </DialogDescription>
        <div className="w-full overflow-scroll p-5 space-y-4">
          <p className="text-sm font-semibold">
            Currently in beta output will be unstable
          </p>
          <div>
            <Label htmlFor="open_ai">Open Ai Key</Label>
            <Input
              value={open_ai_key}
              name="open_ai"
              onChange={(e) => {
                set_open_ai((prev) => ({
                  ...prev,
                  open_ai_key: e.target.value,
                }));
              }}
              className="mt-2"
              type="text"
              id="open_ai"
              placeholder="Enter Open Ai Key"
            />
          </div>
          <div>
            <Label htmlFor="groq_ai_key">Groq Ai Key</Label>
            <Input
              value={groq_ai_key}
              name="groq_ai_key"
              onChange={(e) => {
                set_open_ai((prev) => ({
                  ...prev,
                  groq_ai_key: e.target.value,
                }));
              }}
              className="mt-2"
              type="text"
              id="groq_ai_key"
              placeholder="Enter Groq Ai Key"
            />
          </div>
          <div>
            <Label htmlFor="use_case">Enter Your Use Case</Label>
            <Textarea
              value={open_ai_prompt}
              onChange={(e) => {
                set_open_ai((prev) => ({
                  ...prev,
                  open_ai_prompt: e.target.value,
                }));
              }}
              size="2"
              id="use_case"
              className="mt-2"
              placeholder="Enter Your Use Case"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {getUniqueElementsByKey(data?.content ?? [], "type").map(
              ({ type }) => (
                <div className="items-center flex space-x-2" key={type}>
                  <Checkbox
                    id={type}
                    onCheckedChange={(val) =>
                      set_active_components((prev) => ({
                        ...prev,
                        [type]: val,
                      }))
                    }
                    checked={active_component[type]}
                  />
                  <Label htmlFor={type}>{type}</Label>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button onClick={handleGenerate}>Generate</Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CopyWritingDialog;
