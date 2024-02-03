import { clsx as classNames, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Prefer to use cn on every tailwind class names combination
export default function cn(...inputs: ClassValue[]) {
  return twMerge(classNames(inputs));
}
