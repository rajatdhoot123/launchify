import { isMobile } from "@/app/utils__/helper";
import { headers } from "next/headers";
import Mobile from "./Mobile";

const Layout = ({ children }) => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  const is_mobile = isMobile(userAgent);

  if (is_mobile) {
    return <Mobile />;
  }
  return children;
};

export default Layout;
