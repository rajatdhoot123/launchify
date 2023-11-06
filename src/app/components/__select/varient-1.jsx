import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const SelectComponent = ({ list, title, value, handleChange }) => {
  const router = useRouter();
  return (
    <SelectRoot
      onValueChange={handleChange}
      className="w-full"
      defaultValue={value}
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
