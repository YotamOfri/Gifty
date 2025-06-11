// callTimeline.utils.ts
import { CallStatus, CallStatusHistory } from "@/types/api/calls.types";
import {
  CheckCircle,
  FileText,
  Pause,
  Settings2,
  UserCheck,
  XCircle,
} from "lucide-react-native";

export const getStatusIcon = (
  status: CallStatus,
  type: "status" | "assignment" = "status"
) => {
  const iconProps = { size: 16, color: "white" };

  if (type === "assignment") return <UserCheck {...iconProps} />;

  const icons = {
    OPENED: <FileText {...iconProps} />,
    IN_PROGRESS: <Settings2 {...iconProps} />,
    COMPLETED: <CheckCircle {...iconProps} />,
    FAILED: <XCircle {...iconProps} />,
    ON_HOLD: <Pause {...iconProps} />,
  };

  return icons[status] || <FileText {...iconProps} />;
};

export const getStatusConfig = (status: CallStatus) => {
  const configs = {
    OPENED: {
      color: "#3b82f6",
      bg: "#dbeafe",
      text: "פתוח",
      lightColor: "#93c5fd",
    },
    IN_PROGRESS: {
      color: "#f59e0b",
      bg: "#fef3c7",
      text: "בטיפול",
      lightColor: "#fcd34d",
    },
    COMPLETED: {
      color: "#10b981",
      bg: "#d1fae5",
      text: "הושלם",
      lightColor: "#6ee7b7",
    },
    FAILED: {
      color: "#ef4444",
      bg: "#fee2e2",
      text: "נכשל",
      lightColor: "#fca5a5",
    },
    ON_HOLD: {
      color: "#8b5cf6",
      bg: "#ede9fe",
      text: "בהמתנה",
      lightColor: "#c4b5fd",
    },
  };
  return configs[status] || configs.OPENED;
};

export const getItemConfig = (item: StatusItem) => {
  if (item.type === "assignment") {
    return {
      color: "#8b5cf6",
      bg: "#ede9fe",
      text: "הוקצה ל",
      lightColor: "#c4b5fd",
    };
  }

  return getStatusConfig(item.toStatus);
};

export const getStatusActionText = (
  fromStatus: CallStatus | null,
  toStatus: CallStatus
) => {
  if (!fromStatus) return "הקריאה נפתחה";

  const statusTexts = {
    OPENED: "פתוח",
    IN_PROGRESS: "בטיפול",
    COMPLETED: "הושלם",
    FAILED: "נכשל",
    ON_HOLD: "בהמתנה",
  };

  return `הסטטוס שונה מ${statusTexts[fromStatus]} ל${statusTexts[toStatus]}`;
};

export const processStatusHistory = (
  callStatusHistory: CallStatusHistory[]
): StatusItem[] => {
  let lastAssignedToId: number | null = null;

  return callStatusHistory.map((status) => {
    const isSameStatus = status.fromStatus === status.toStatus;
    const assignedChanged =
      isSameStatus &&
      status.assignedToId &&
      status.assignedToId !== lastAssignedToId;

    if (assignedChanged) {
      lastAssignedToId = status.assignedToId!;
      return {
        ...status,
        type: "assignment" as const,
        displayText: `הוקצה ל${status.assignedTo?.name || "משתמש לא ידוע"}`,
      };
    }

    return {
      ...status,
      type: "status" as const,
      displayText: getStatusActionText(status.fromStatus, status.toStatus),
    };
  });
};
