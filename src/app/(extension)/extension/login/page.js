import { Button } from "@/components/ui/button";
import { CardHeader, Card, CardContent } from "@/components/ui/card";
import { login } from "./actions";

export const dynamic = "force-dynamic";

const Login = ({ searchParams }) => {
  const source = searchParams?.source ?? "";

  return (
    <div className="w-full bg-gradient-to-r from-blue-200 to-green-200 min-h-screen flex flex-col justify-center p-5 rounded-lg">
      <form action={login}>
        <Card className="max-w-md md:mx-auto md:min-w-96">
          <CardHeader>
            <h1 className="text-2xl font-bold text-center mb-5" data-id="4">
              Login
            </h1>
          </CardHeader>
          <CardContent className="space-y-6">
            <input hidden value={source} name="source" />
            <Button type="submit" className="w-full" data-id="5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-secondary h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              Login with Google
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default Login;
