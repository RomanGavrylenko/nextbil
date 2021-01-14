import React from 'react';
import { useMutation } from '@apollo/client';
import { SignupContainer } from '@/components/SignupContainer';
import { SignupForms } from '@/components/SignupForm';
import { Title } from '@/components/Title';
import { SignupSuccess } from '@/components/SignupSuccess';
import { USER_SIGNUP } from '@/graphql/user/mutation';
import { UserMutation, UserSignupInput, UserVariables } from '@/graphql/user/types';

export const Signup: React.FC<Record<string, unknown>> = () => {
    const [signup, { data }] = useMutation<UserMutation, UserVariables>(USER_SIGNUP);

    const signUp = (input: UserSignupInput) => {
        return signup({ variables: { input } });
    };

    console.log('update');

    return (
        <SignupContainer>
            {data?.signup ? (
                <SignupSuccess name={data.signup.name} email={data.signup.email} />
            ) : (
                <>
                    <Title>Create a new account</Title>
                    <SignupForms onSubmit={signUp} />
                </>
            )}
        </SignupContainer>
    );
};
