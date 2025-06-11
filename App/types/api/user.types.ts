import { OrganizationRole } from "./organization.types";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  name: string;
  userType: "EMPLOYER" | "EMPLOYEE";
  organizationRoles: OrganizationRole[];
  logo: string | null;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  password?: string;
  oldPassword?: string;
}
