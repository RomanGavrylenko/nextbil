import { Gender } from '@/types/common';

interface UserInfo {
    name: string;
    email: string;
    country: string;
    gender?: Gender;
}

export interface UserSignupInput extends UserInfo {
    password: string;
}

export interface User extends UserInfo {
    id: string;
}

export interface UserMutation {
    signup: User;
}

export interface UserVariables {
    input: UserSignupInput;
}
