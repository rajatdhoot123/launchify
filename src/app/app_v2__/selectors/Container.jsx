import { useNode } from "@craftjs/core";

const Container = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      className="overflow-y-scroll min-h-screen bg-white"
      {...props}
      ref={(ref) => connect(drag(ref))}
    >
      {children}
    </div>
  );
};

export default Container;
