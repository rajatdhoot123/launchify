import { useNode } from "@craftjs/core";

const Container = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      className="overflow-y-scroll min-h-screen bg-white space-y-12 pb-40"
      {...props}
      ref={(ref) => connect(drag(ref))}
    >
      {children}
    </div>
  );
};

export default Container;
