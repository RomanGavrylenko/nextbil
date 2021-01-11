import { InputHTMLAttributes } from 'react';

export interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    touched?: boolean;
    name: string;
}
