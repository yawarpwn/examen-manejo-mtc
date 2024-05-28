import { twMerge } from 'tw-merge'
import { clsx, type ClassArray } from 'clsx'
export function cn(...input: ClassArray) {
  return twMerge(clsx(...input))
}
