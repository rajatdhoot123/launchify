import { getServerSession } from "next-auth/next";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/route";

const ServerSideAuth = async () => {
  const session = await getServerSession(AUTH_OPTIONS);

  return (
    <div className="px-44 text-center p-12">
      {JSON.stringify(session, null, 2)}
    </div>
  );
};

export default ServerSideAuth;
