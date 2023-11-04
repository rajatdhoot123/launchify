import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";

const SelectComponent = ({ setState, item_key }) => {
  return (
    <SelectRoot
      onValueChange={(val) =>
        setState((prev) => ({ ...prev, [item_key]: val }))
      }
      className="w-full"
      defaultValue="varient-1"
    >
      <SelectTrigger className="w-full" />
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Navbar</SelectLabel>
          <SelectItem value="varient-1">Varient 1</SelectItem>
          <SelectItem value="varient-2">Varient 2</SelectItem>
          <SelectItem value="varient-3">Varient 3</SelectItem>
          <SelectItem value="varient-4">Varient 4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  );
};

export default SelectComponent;
