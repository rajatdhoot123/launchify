"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return <ThemeProvider forcedTheme="light">{children}</ThemeProvider>;
}
