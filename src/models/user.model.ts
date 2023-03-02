import { ROLES } from "./rol.model";

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  rol: ROLES;
}
