import React, { memo, SelectHTMLAttributes, useCallback, useRef, useState } from 'react';
import { OptionItem } from '@/types/common';
import { ErrorMessage } from '@/components/forms/ErrorMessage';
import { SelectMenuList, SelectContainer, SelectField, SelectMenuItem } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    error?: string;
    touched?: boolean;
    name: string;
    options: Array<OptionItem>;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    setFieldTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
    validateOnChange?: boolean;
}

const Select: React.FC<SelectProps> = (props) => {
    const {
        options,
        name,
        setFieldValue,
        setFieldTouched,
        value,
        error,
        touched,
        validateOnChange,
        multiple,
        placeholder,
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menu = useRef<HTMLDivElement>(null);

    const handleSelect = (item: OptionItem) => () => {
        setFieldValue(name, item.value, validateOnChange);
        if (!touched) setFieldTouched(name, true);
        if (!multiple) setIsOpen(false);

        document.removeEventListener('click', handleDocumentClick);
    };

    const handleDocumentClick = useCallback(
        (e: MouseEvent) => {
            console.log('click');
            if (e.target !== menu.current) {
                setIsOpen(false);
                document.removeEventListener('click', handleDocumentClick);
            }
        },
        [setIsOpen],
    );

    const handleOpen = () => {
        if (!isOpen) {
            document.addEventListener('click', handleDocumentClick);
        }

        setIsOpen((isOpen) => !isOpen);
    };

    const renderItem = (item: OptionItem) => (
        <SelectMenuItem onClick={handleSelect(item)} key={item.value}>
            {item.label}
        </SelectMenuItem>
    );

    const selectValue = () => {
        const option = options.find((item) => item.value === value);
        return option?.label || placeholder;
    };

    console.log('select update');

    return (
        <SelectContainer>
            <SelectField isEmptyValue={!value} isOpen={isOpen} onClick={handleOpen}>
                {selectValue()}
            </SelectField>
            <ErrorMessage isShow={!!(error && touched)}>{error}</ErrorMessage>
            {isOpen && <SelectMenuList>{options.map(renderItem)}</SelectMenuList>}
        </SelectContainer>
    );
};

export default memo(Select);
