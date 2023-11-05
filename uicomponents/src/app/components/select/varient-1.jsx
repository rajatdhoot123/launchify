import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";

const SelectComponent = ({ setState, item_key, list, title }) => {
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
          <SelectLabel>{title}</SelectLabel>
          {list.map((li, index) => (
            <SelectItem key={li} value={li}>
              {`Varient ${index + 1}`}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  );
};

export default SelectComponent;