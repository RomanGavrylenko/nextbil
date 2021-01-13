import React, { FC, memo, ReactElement } from 'react';
import { CommonInputProps } from '@/types/common';
import { HiddenInput } from '@/components/forms/HiddenInput';
import { FieldWrapper } from '@/components/forms/FieldWrapper';
import { Container } from './styles';

interface CheckboxProps extends CommonInputProps {
    label: string | ReactElement | JSX.Element;
}

const Checkbox: FC<CheckboxProps> = (props) => {
    const { checked, label, ...rest } = props;

    return (
        <FieldWrapper>
            <Container checked={checked}>
                <div className="checkboxLike" />
                <HiddenInput {...rest} checked={checked} />
                <span className="checkboxLabel">{label}</span>
            </Container>
        </FieldWrapper>
    );
};

export default memo(Checkbox);
