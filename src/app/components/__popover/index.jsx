import { HoverCard, Link } from "@radix-ui/themes";
const OptionPopover = ({ components }) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Link className="text-sm font-bold" variant="ghost">
          Code & Ai Magic
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="flex flex-col space-y-2 cursor-pointer">
          {components}
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
};

export default OptionPopover;
