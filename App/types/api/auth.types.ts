import { ExpoPushToken } from "expo-notifications";
import { Organization } from "./organization.types";
import { User } from "./user.types";

export interface LoginCredentials {
  email: string;
  password: string;
  expoPushToken?: ExpoPushToken;
}

export type LoginResponse = {
  accessToken: string; // JWT token
  user: User;
  organization: Organization;
};
