import React from 'react';
import { SignupContainer } from '@/components/SignupContainer';
import { Title } from '@/components/Title';

interface SignupSuccessProps {
    name: string;
    email: string;
}

export const SignupSuccess: React.FC<SignupSuccessProps> = ({ name, email }) => {
    return (
        <SignupContainer>
            <Title>Sign up success</Title>
            <Title>Name - ${name}</Title>
            <Title>Email - ${email}</Title>
        </SignupContainer>
    );
};
