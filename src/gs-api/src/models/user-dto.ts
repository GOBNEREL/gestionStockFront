/* tslint:disable */
import { RolesDto } from './roles-dto';
export interface UserDto {
  activer?: boolean;
  adresse?: string;
  email?: string;
  id?: number;
  login?: string;
  nom?: string;
  password?: string;
  phone?: string;
  roles?: Array<RolesDto>;
}
