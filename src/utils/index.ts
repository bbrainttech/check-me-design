import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param inputs Css classNames
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
