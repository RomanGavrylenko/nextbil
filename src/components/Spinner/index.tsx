import styled, { keyframes } from 'styled-components';

const Move = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.img`
    display: block;
    width: 15px;
    height: 15px;
    animation: ${Move} 2s linear infinite;
`;
