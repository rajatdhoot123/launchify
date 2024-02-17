import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const OptionPopover = ({ components }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="text-sm font-bold" variant="ghost">
          Code & Ai Magic
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col space-y-2 cursor-pointer">
          {components}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default OptionPopover;
