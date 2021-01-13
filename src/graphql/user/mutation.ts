import { gql } from '@apollo/client';

export const USER_SIGNUP = gql`
    mutation UserSignUp($input: SignupInput!) {
        signup(input: $input) {
            id
            name
            email
            country
            gender
        }
    }
`;
