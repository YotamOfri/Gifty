import { Name } from "./api.types";

export interface Role {
  id: number;
  name: Name;
  userCount: number;
  permissions: Permissions[];
}

export interface Permissions {
  id: number;
  roleId: number;
  resource: string;
  canView: boolean;
  canUpdate: boolean;
  canCreate: boolean;
  canDelete: boolean;
}
