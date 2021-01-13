import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from '@/styles';
import FontsStyles from '@/styles/fonts/fonts';
import { client } from '@/graphql/client';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
            <FontsStyles />
            <GlobalStyle />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
