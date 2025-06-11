import i18n from "@/i18n";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractNames = (
  fullName: string
): { firstName: string; lastName: string } => {
  const nameParts = fullName.trim().split(/\s+/);
  return {
    firstName: nameParts[0] || "",
    lastName: nameParts.length > 1 ? nameParts[nameParts.length - 1] : "",
  };
};

export const formatDate = (date?: Date | string | null) => {
  if (!date) return "-";
  return new Intl.DateTimeFormat("he-IL", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

export const getInitials = (name: string) => {
  if (!name) return "מ";
  const words = name.split(" ");
  if (words.length === 1) return words[0].charAt(0);
  return words[0].charAt(0) + words[1].charAt(0);
};
export const formatTimeAgo = (date: Date, locale = "he-IL") => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return "עכשיו";
  if (diffMins < 60) return `לפני ${diffMins} דקות`;
  if (diffHours < 24) return `לפני ${diffHours} שעות`;
  if (diffDays < 7) return `לפני ${diffDays} ימים`;

  return date.toLocaleDateString(locale);
};
