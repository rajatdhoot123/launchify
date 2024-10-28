import "./prosemirror.css";
import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  return (
    <div className="blog-builder">
      {children}
      <Toaster />
    </div>
  );
}
