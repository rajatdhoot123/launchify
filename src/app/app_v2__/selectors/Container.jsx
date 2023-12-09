import { useNode } from "@craftjs/core";

const Container = ({ background, padding, children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      className="overflow-y-scroll pb-16"
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

export default Container;
