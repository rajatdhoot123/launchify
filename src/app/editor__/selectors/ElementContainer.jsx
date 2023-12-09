import { useNode } from "@craftjs/core";

const ElementContainer = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      className="relative z-50"
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{}}
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
