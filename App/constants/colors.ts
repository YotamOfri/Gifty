export const statusColors: Record<
  string,
  { gradient: [string, string]; lightGradient: [string, string] }
> = {
  OPENED: {
    gradient: ["#3b82f6", "#60a5fa"],
    lightGradient: ["#dbeafe", "#bfdbfe"],
  },
  IN_PROGRESS: {
    gradient: ["#f59e0b", "#fbbf24"],
    lightGradient: ["#fef3c7", "#fde68a"],
  },
  COMPLETED: {
    gradient: ["#10b981", "#34d399"],
    lightGradient: ["#d1fae5", "#a7f3d0"],
  },
  FAILED: {
    gradient: ["#ef4444", "#f87171"],
    lightGradient: ["#fee2e2", "#fecaca"],
  },
  ON_HOLD: {
    gradient: ["#8b5cf6", "#a78bfa"],
    lightGradient: ["#ede9fe", "#ddd6fe"],
  },
};
