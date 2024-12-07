import { auth } from "@/auth";

const ServerSideAuth = async () => {
  const session = await auth();

  return (
    <div className="px-44 text-center p-12">
      {JSON.stringify(session, null, 2)}
    </div>
  );
};

export default ServerSideAuth;
