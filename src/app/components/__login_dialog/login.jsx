import GoogleButton from "@/app/auth/GoogleSignIn";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmailSignIn from "@/app/auth__/signin/EmailSignIn";

export function LoginDialog({ text }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">{text}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div>
          <h1 className="text-2xl font-bold text-center mb-5" data-id="4">
            Login
          </h1>
          <GoogleButton />
          <div
            className="border-b border-gray-200 dark:border-gray-600 my-4"
            data-id="7"
          ></div>
          <p
            className="mb-6 text-sm text-gray-600 dark:text-gray-400"
            data-id="8"
          >
            Or get a magic link sent to your email
          </p>
          <EmailSignIn />
        </div>
      </DialogContent>
    </Dialog>
  );
}
