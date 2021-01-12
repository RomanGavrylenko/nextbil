import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '@/styles/colors';
import { Roboto14 } from '@/styles/fonts/fonts';

interface RadioItemProps extends HTMLAttributes<HTMLLabelElement> {
    selected: boolean;
}

const flexStart = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Container = styled.div`
    ${flexStart}
`;

export const RadioItem = styled.label<RadioItemProps>`
    ${flexStart}
    margin-right: 25px;
    cursor: pointer;

    .radioLike {
        position: relative;
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 8px;
        border: 1px solid ${colors.blue};
        border-radius: 50%;

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            display: ${(props) => (props.selected ? 'block' : 'none')};
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: ${colors.blue};
        }
    }

    .radioLabel {
        ${Roboto14}
        color: ${colors.black};
    }
`;
