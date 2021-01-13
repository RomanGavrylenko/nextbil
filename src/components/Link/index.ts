import styled from 'styled-components';
import { colors } from '@/styles/colors';

export const Link = styled.a`
    text-decoration: none;
    color: ${colors.blue};
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;
