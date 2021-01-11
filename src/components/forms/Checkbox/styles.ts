import { HTMLProps } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';

interface ContainerProps extends HTMLProps<HTMLLabelElement> {
    checked?: boolean;
}

export const Container = styled.label<ContainerProps>`
    display: flex;
    align-items: center;

    input {
        visibility: hidden;
        width: 0;
        height: 0;
    }

    .checkboxLike {
        position: relative;
        width: 14px;
        height: 14px;
        border: 1px solid ${colors.blue};
        border-radius: 3px;

        &::after {
            content: '';
            position: absolute;
            display: ${(props) => (props.checked ? 'block' : 'none')};
            top: 0;
            left: 50%;
            width: 5px;
            height: 9px;
            border-bottom: 1px solid ${colors.blue};
            border-right: 1px solid ${colors.blue};
            transform: translateX(-50%) rotate(45deg);
        }
    }
`;

export const ChekcboxLike = styled.div`
    position: relative;
    width: 14px;
    height: 14px;
    border: 1px solid ${colors.blue};
    border-radius: 3px;
`;
