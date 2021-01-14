import React, { ButtonHTMLAttributes } from 'react';
import { Button } from '@/components/Button';
import { Spinner } from '@/components/Spinner';
import Spin from '@/assets/images/svg/spinner.svg';

interface ButtonWithSpinnerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isShowSpinner: boolean;
    onShowSpinner: () => void;
}

export const ButtonWithSpinner: React.FC<ButtonWithSpinnerProps> = (props) => {
    const { isShowSpinner, onClick, onShowSpinner, children, ...rest } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onShowSpinner();
        onClick?.(e);
    };

    return (
        <Button onClick={handleClick} {...rest}>
            {isShowSpinner ? <Spinner src={Spin} /> : children}
        </Button>
    );
};
