"use client";

import { ThemeProvider } from "./ThemeProvider";
import { LenisProvider } from "./LenisProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LenisProvider>{children}</LenisProvider>
    </ThemeProvider>
  );
}
