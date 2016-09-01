import { Tool } from './tool';

export class IUser {
    firstName: string;
    lastName: string;
    email: string;
    numberOfTools: number;
    numberOfProfiles: number;
    items: Tool[]
}