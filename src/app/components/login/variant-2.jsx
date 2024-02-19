import { Button } from "@/components/ui/button";
import { CardHeader, Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-200 to-green-200 container mx-auto p-5 rounded-lg">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center mb-5" data-id="4">
            Login
          </h1>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button className="w-full" data-id="5">
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
          <Separator />
          <p className="text-sm">Or get a magic link sent to your email</p>
          <div className="mb-4" data-id="9">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
              data-id="10"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="you@example.com"
              required=""
              data-id="11"
              type="email"
            />
          </div>
          <Button type="submit" className="w-full">
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
              className=" mr-2 text-secondary h-5 w-5"
              data-id="13"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Send Magic Link
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
