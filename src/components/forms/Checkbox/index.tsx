import React, { FC, memo, ReactElement } from 'react';
import { CommonInputProps } from '@/types/common';
import { HiddenInput } from '@/components/forms/HiddenInput';
import { Container } from './styles';

interface CheckboxProps extends CommonInputProps {
    label: string | ReactElement | JSX.Element;
}

const Checkbox: FC<CheckboxProps> = (props) => {
    const { checked, label, ...rest } = props;

    return (
        <Container checked={checked}>
            <div className="checkboxLike" />
            <HiddenInput {...rest} checked={checked} />
            <span className="checkboxLabel">{label}</span>
        </Container>
    );
};

export default memo(Checkbox);
