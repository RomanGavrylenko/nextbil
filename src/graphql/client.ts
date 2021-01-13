import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://homework.nextbil.com/graphql',
    cache: new InMemoryCache(),
    typeDefs: gql`
        enum Gender {
            MALE
            FEMALE
        }

        input SignupInput {
            name: String!
            email: String!
            password: String!
            country: String!
            gender: Gender!
        }
    `,
});
