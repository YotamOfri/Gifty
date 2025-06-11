import { Department } from "./departments.types";
import { Location } from "./locations.types";
import { User } from "./user.types";

export interface CallCategory {
  id: number;
  name: { he: string; en: string; ar: string };
  logo: string;
  departmentId: number;
  organizationId: number;
  department: Department;
}
export interface NewCallCategoryPayload {
  name: { he: string; en?: string; ar?: string };
  logo: string;
  departmentId: number;
  organizationId: number;
}

export type CallStatus =
  | "OPENED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "ON_HOLD";
export interface CallStatusHistory {
  id: number;
  callId: string;
  fromStatus: CallStatus | null;
  toStatus: CallStatus;
  changedAt: Date;
  changedById: number;
  changedBy?: User;
}

export interface Call {
  id: string;
  description: string;
  createdAt: string;
  closedAt: string | null;
  locationId: number;
  departmentId: number;
  createdById: number;
  createdBy: User;
  assignedToId: number;
  assignedTo: User | null;
  closedById: number | null;
  closedBy?: User | null;
  updatedAt: Date;
  status: CallStatus;
  callCategoryId: number;
  Department: Department;
  callCategory: CallCategory;
  location: Location;
  CallStatusHistory: CallStatusHistory[];
}

export type FlattenedCall = {
  type: "header" | "item";
  status?: string;
  call?: Call;
};
