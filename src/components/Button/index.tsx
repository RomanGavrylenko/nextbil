import styled from 'styled-components';
import { colors } from '@/styles/colors';

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
    border-radius: 31px;
    font-family: 'RobotoRegular';
    font-size: 18px;
    line-height: 22px;
    color: ${colors.white};
    background: ${colors.blue};
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        background: ${colors.beige};
        cursor: not-allowed;
    }
`;
