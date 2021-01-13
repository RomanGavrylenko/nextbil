import { InputHTMLAttributes } from 'react';

export interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    touched?: boolean;
    name: string;
}

export interface OptionItem {
    label: string;
    value: string | number;
}

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}
