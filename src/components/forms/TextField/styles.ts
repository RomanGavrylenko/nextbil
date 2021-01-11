import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';
import { colors } from '@/styles/colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    withIcon?: boolean;
}

export const Input = styled.input<InputProps>`
    width: 100%;
    padding: 18px 18px 15px 18px;
    padding-left: ${(props) => (props.withIcon ? '52px' : '18px')};
    font-family: RobotoRegular;
    font-size: 14px;
    line-height: 17px;
    background: ${colors.darkLight};
    color: ${colors.beige};
    border: none;
    border-radius: 8px;
    outline: none;
`;

export const ContainerInput = styled.div`
    position: relative;
`;

export const InputIconWrapper = styled.figure`
    position: absolute;
    display: block;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
`;

export const Label = styled.label``;
