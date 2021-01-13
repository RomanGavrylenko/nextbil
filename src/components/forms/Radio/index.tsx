import React, { memo } from 'react';
import { CommonInputProps, OptionItem } from '@/types/common';
import { HiddenInput } from '@/components/forms/HiddenInput';
import { ErrorMessage } from '@/components/forms/ErrorMessage';
import { FieldWrapper } from '@/components/forms/FieldWrapper';
import { Container, RadioItem } from './styles';

interface RadioProps extends CommonInputProps {
    options: Array<OptionItem>;
}

const Radio: React.FC<RadioProps> = (props) => {
    const { name, value, options, error, touched, ...rest } = props;

    const renderItem = (item: OptionItem) => {
        return (
            <RadioItem selected={item.value.toString() === value} key={item.value}>
                <HiddenInput
                    {...rest}
                    name={name}
                    value={item.value}
                    checked={item.value.toString() === value}
                    type="radio"
                />
                <div className="radioLike" />
                <div className="radioLabel">{item.label}</div>
            </RadioItem>
        );
    };

    return (
        <FieldWrapper>
            <Container>
                {options.map(renderItem)}
                <ErrorMessage isShow={!!(error && touched)}>{error}</ErrorMessage>
            </Container>
        </FieldWrapper>
    );
};

export default memo(Radio);
