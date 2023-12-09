import { useNode } from "@craftjs/core";

export const ElementContainer = ({
  background,
  padding,
  children,
  ...props
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      className="relative z-50"
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{
        margin: "5px 0",
        background,
        padding: `${padding}px`,
      }}
    >
      {children}
    </div>
  );
};

ElementContainer.craft = {
  rules: {
    canDrag: (node, helper) => {
      return true;
    },
    canMoveIn: (incoming, self, helper) => {
      return false;
    },
    canMoveOut: (outgoing, self, helper) => {
      return true;
    },
  },
};

export default ElementContainer;
