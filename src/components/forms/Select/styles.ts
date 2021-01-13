import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';

interface SelectFieldProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    isEmptyValue: boolean;
}

export const SelectField = styled.div<SelectFieldProps>`
    position: relative;
    padding: 18px 18px 15px 18px;
    background: ${colors.darkLight};
    border-radius: 8px;
    color: ${(props) => (props.isEmptyValue ? colors.beige : colors.black)};
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 21px;
        width: 8px;
        height: 8px;
        border-bottom: 2px solid ${colors.black};
        border-right: 2px solid ${colors.black};
        transform: ${(props) =>
            !props.isOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(0) rotate(225deg)'};
    }
`;

export const SelectContainer = styled.div`
    position: relative;
    margin-bottom: 21px;
`;

export const SelectMenuList = styled.ul`
    position: absolute;
    top: 101%;
    left: 0;
    right: 0;
    max-height: 300px;
    margin: 0;
    padding: 6px 0;
    background: ${colors.white};
    box-shadow: 0px 3px 8px #00000026;
    border-radius: 8px;
    list-style: none;
`;

export const SelectMenuItem = styled.li`
    padding: 10px 19px;
    color: ${colors.black};
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: ${colors.darkLight};
    }
`;
