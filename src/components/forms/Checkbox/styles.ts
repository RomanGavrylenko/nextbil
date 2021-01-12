import { HTMLProps } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { Roboto14 } from '@/styles/fonts/fonts';

interface ContainerProps extends HTMLProps<HTMLLabelElement> {
    checked?: boolean;
}

export const Container = styled.label<ContainerProps>`
    display: flex;
    align-items: center;

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

    .checkboxLabel {
        ${Roboto14}
    }
`;

export const ChekcboxLike = styled.div`
    position: relative;
    width: 14px;
    height: 14px;
    border: 1px solid ${colors.blue};
    border-radius: 3px;
`;
