import React, { memo } from 'react';
import { ErrorMessage } from '@/components/forms/ErrorMessage';
import { CommonInputProps } from '@/types/common';
import { Label, Input, ContainerInput, InputIconWrapper } from './styles';

interface TextFieldProps extends CommonInputProps {
    label?: string;
    icon?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
    const { error, touched, id, label, icon, ...rest } = props;

    return (
        <>
            {<Label htmlFor={id}>{label}</Label>}
            <ContainerInput>
                <Input id={id} {...rest} withIcon={!!icon} />
                {icon && (
                    <InputIconWrapper>
                        <img src={icon} alt="icon" />
                    </InputIconWrapper>
                )}
            </ContainerInput>
            <ErrorMessage isShow={!!(error && touched)}>{error}</ErrorMessage>
        </>
    );
};

export default memo(TextField);
