import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).lenis) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis.scrollTo(element, { offset: -70 });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
