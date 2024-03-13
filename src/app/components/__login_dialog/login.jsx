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
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div
          className="w-full absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
          data-id="1"
        >
          <div
            className="bg-background drop-shadow-md	 rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full overflow-hidden relative"
            data-id="2"
          >
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
