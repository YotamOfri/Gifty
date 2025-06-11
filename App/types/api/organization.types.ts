import { Name } from "./api.types";
import { Department } from "./departments.types";

export interface Organization {
  id: number;
  name: string;
  logo: string;
  OrganizationRole: OrganizationRole;
  customStyles?: CustomStyles;
}

export interface OrganizationRole {
  role: Role;
  department?: Department;
}
export interface Role {
  id: number;
  name: Name;
}

export interface CustomStyles {
  accentColor?: "blue" | "dark" | "light" | "green" | "red" | "gray";
}
export interface NewOrganizationPayload {
  name: string;
}
export interface UpdateOrganizationPayload {
  organizationId: number;
  name: string;
  logo?: string;
  customStyles?: CustomStyles;
}

export interface GetOrganizationPayload {
  id: number;
}
