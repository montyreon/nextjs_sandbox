import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats the cooking time in a human-readable format.
 * If the cooking time is 60 minutes or more, it returns hours and minutes.
 * Otherwise, it returns just minutes.
 *
 * @param {number} cookingTime - The cooking time in minutes.
 * @returns {string} Formatted cooking time.
 */
export function formatCookingTime(cookingTime: number): string {
  if (cookingTime >= 60) {
    const hours = Math.floor(cookingTime / 60);
    const minutes = cookingTime % 60;
    return `${hours} hour${hours > 1 ? 's' : ''}${minutes > 0 ? ` ${minutes} min${minutes > 1 ? 's' : ''}` : ''}`;
  } else {
    return `${cookingTime} min${cookingTime > 1 ? 's' : ''}`;
  }
}