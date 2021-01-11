import React, { InputHTMLAttributes, memo } from 'react';
import { ErrorMessage } from '@/components/forms/ErrorMessage';
import { Label, Input, ContainerInput, InputIconWrapper } from './styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>{
    error?: string;
    touched?: boolean;
    label?: string;
    name: string;
    icon?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
    const {
        error,
        touched,
        id,
        label,
        icon,
        ...rest
      } = props;

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
          {error && touched && <ErrorMessage>{error}</ErrorMessage>}
        </>
      );
}

export default memo(TextField);