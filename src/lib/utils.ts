import { twMerge, type ClassNameValue } from 'tailwind-merge'
import { clsx, type ClassArray } from 'clsx'
export function cn(...input: ClassNameValue[]) {
  return twMerge(input)
}
