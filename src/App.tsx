import React from 'react';
import styled from 'styled-components';
import { Signup } from '@/components/Signup';
import { colors } from './styles/colors';

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.violet};
`;

function App() {
    return (
        <Container>
            <Signup />
        </Container>
    );
}

export default App;
