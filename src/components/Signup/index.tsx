import React from 'react';
import { SignupContainer } from '../SignupContainer';
import { SignupForms } from '../SignupForm';
import { Title } from '../TItle';

export const Signup: React.FC<any> = () => {
    return (
        <SignupContainer>
            <Title>Create a new account</Title>
            <SignupForms />
        </SignupContainer>
    );
};
