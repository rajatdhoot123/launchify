import GoogleButton from "@/app/auth/GoogleSignIn";
import EmailSignIn from "@/app/auth/EmailSignIn";
import { Fragment } from "react";

async function getProviders() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/providers`);

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch providers");
  }

  return res.json();
}

export default async function SignIn() {
  let resp;
  try {
    resp = (await getProviders()) || {};
  } catch (err) {
    console.log(err);
  }

  if (!resp) {
    return null;
  }
  return (
    <div className="flex  min-h-[500px] flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-3xl font-semibold">Sign In</h1>
      <div className="space-y-4">
        {Object.values(resp).map((provider) => {
          switch (provider.id) {
            case "email":
              return (
                <Fragment key={provider.id}>
                  <EmailSignIn />
                  <hr className="my-4 w-64 border-t border-gray-300" />
                </Fragment>
              );
            case "google":
              return <GoogleButton key={provider.id} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
