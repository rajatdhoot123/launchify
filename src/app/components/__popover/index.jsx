import { HoverCard, Link } from "@radix-ui/themes";
const OptionPopover = ({ components }) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Link variant="ghost">Options</Link>
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
