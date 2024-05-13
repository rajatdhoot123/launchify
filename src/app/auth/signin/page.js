import { Fragment } from "react";
import EmailSignIn from "../EmailSignIn";
import GoogleSignIn from "../GoogleSignIn";

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
    <div
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-green-200"
      data-id="1"
    >
      <div
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full overflow-hidden relative"
        data-id="2"
      >
        <h1 className="text-2xl font-bold text-center mb-5" data-id="4">
          Login
        </h1>

        {Object.entries(resp).map(([key, value]) => {
          switch (key) {
            case "google":
              return <GoogleSignIn key={key} />;
            case "email":
              return (
                <Fragment key={key}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Get a magic link sent to your email
                  </p>
                  <EmailSignIn />
                  <div className="border-b border-gray-200 dark:border-gray-600 my-4" />
                </Fragment>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
