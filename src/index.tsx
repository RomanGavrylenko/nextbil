import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from '@/styles';
import { client } from '@/graphql/client';
import App from './App';
import '@/styles/fonts/index.css';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
            <GlobalStyle />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
