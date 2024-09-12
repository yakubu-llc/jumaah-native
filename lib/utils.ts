import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ApiError, ErrorModel } from './sdk/requests';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function errorDetails(error: ApiError) {
  return error.body as ErrorModel;
}
