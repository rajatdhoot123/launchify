import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const SelectComponent = ({ setState, item_key, list, title, state }) => {
  const router = useRouter();
  return (
    <SelectRoot
      onValueChange={(val) => {
        setState((prev) => ({ ...prev, [item_key]: val }));
        router.push(`#${item_key}`);
        if (typeof navigator !== "undefined") {
          if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            router.replace("/?floater=true");
          }
        }
      }}
      className="w-full"
      defaultValue={state[item_key]}
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
