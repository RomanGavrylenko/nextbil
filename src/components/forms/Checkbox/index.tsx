import React, { FC, memo, ReactElement } from 'react';
import { CommonInputProps } from '@/types/common';
import { Container } from './styles';

interface CheckboxProps extends CommonInputProps {
    label: string | ReactElement | JSX.Element;
}

const Checkbox: FC<CheckboxProps> = (props) => {
    const { checked, label, ...rest } = props;

    return (
        <Container checked={checked}>
            <div className="checkboxLike" />
            <input {...rest} checked={checked} />
            <span>{label}</span>
        </Container>
    );
};

export default memo(Checkbox);
