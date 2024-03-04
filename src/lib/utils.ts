import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getReadableStatus(status: string | null | undefined): string {
  switch (status) {
    case "IN_PROGRESS":
      return "In Progress";
    case "COMPLETED":
      return "Completed";
    case "AVAILABLE":
      return "Available";
    case "CANCELED":
      return "Canceled";
    default:
      return "Unknown Status";
  }
}

export function getStatusClasses(status: string | null | undefined): string {
  switch (status) {
    case "IN_PROGRESS":
      return "bg-orange-400 text-white";
    case "COMPLETED":
      return "bg-green-400 text-white";
    case "AVAILABLE":
      return "bg-blue-400 text-white";
    case "CANCELED":
      return "bg-red-400 text-white";
    default:
      return "bg-gray-400 text-white";
  }
}

export function getReadableCategory(
  category: string | null | undefined,
  categoriesList: { label: string; value: string }[]
): string {
  return (
    categoriesList?.find((cat) => cat.value === category)?.label ||
    "Unknown Category"
  );
}


export function paginateArray<T>(array: T[], pageSize: number, pageNumber: number): T[] {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return array.slice(startIndex, endIndex);
}