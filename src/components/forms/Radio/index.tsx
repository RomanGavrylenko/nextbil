import React, { memo } from 'react';
import { CommonInputProps, OptionItem } from '@/types/common';
import { HiddenInput } from '@/components/forms/HiddenInput';
import { ErrorMessage } from '@/components/forms/ErrorMessage';
import { Container, RadioItem } from './styles';

interface RadioProps extends CommonInputProps {
    options: Array<OptionItem>;
}

const Radio: React.FC<RadioProps> = (props) => {
    const { name, value, options, error, touched, ...rest } = props;

    const renderItem = (item: OptionItem) => {
        return (
            <RadioItem selected={item.value === value?.toString()} key={item.value}>
                <HiddenInput
                    {...rest}
                    name={name}
                    value={item.value}
                    checked={item.value === value?.toString()}
                    type="radio"
                />
                <div className="radioLike" />
                <div className="radioLabel">{item.label}</div>
            </RadioItem>
        );
    };

    return (
        <Container>
            {options.map(renderItem)}
            <ErrorMessage isShow={!!(error && touched)}>{error}</ErrorMessage>
        </Container>
    );
};

export default memo(Radio);
