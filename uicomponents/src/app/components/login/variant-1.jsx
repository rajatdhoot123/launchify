import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  return (
    <section className="container mx-auto">
      <Card className="p-5 flex mx-auto rounded-2xl shadow-lg max-w-3xl">
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl font-bold ">Login</h2>
          <p className="text-sm mt-4 ">If you have an account, please login</p>
          <form className="mt-6" action="#" method="POST">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
              className="mt-2"
                type="email"
                name=""
                id="email"
                placeholder="Enter Email Address"
                autoFocus
                required
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="password">Password</Label>
              <Input
              className="mt-2"
                type="password"
                name=""
                id="password"
                placeholder="Enter Password"
                minLength="6"
                required
              />
            </div>

            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold ">
                Forgot Password?
              </a>
            </div>
            <Button className="w-full mt-5" type="submit">Log In</Button>
          </form>
          <Separator className="my-5" />
          <Button className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-6 h-6"
              viewBox="0 0 48 48"
            >
              <defs>
                <path
                  id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="b">
                <use xlinkHref="#a" overflow="visible" />
              </clipPath>
              <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path
                clipPath="url(#b)"
                fill="#EA4335"
                d="M0 11l17 13 7-6.1L48 14V0H0z"
              />
              <path
                clipPath="url(#b)"
                fill="#34A853"
                d="M0 37l30-23 7.9 1L48 0v48H0z"
              />
              <path
                clipPath="url(#b)"
                fill="#4285F4"
                d="M48 48L17 24l-4-3 35-10z"
              />
            </svg>
            <span className="ml-4">Login with Google</span>
          </Button>

          <div className="text-sm flex justify-between items-center mt-3">
            <p>If you don't have an account...</p>
            <Button>Register</Button>
          </div>
        </div>

        <div className="w-1/2 md:block hidden ">
          <img
            src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            className="rounded-2xl"
            alt="page img"
          />
        </div>
      </Card>
    </section>
  );
};

export default Login;
