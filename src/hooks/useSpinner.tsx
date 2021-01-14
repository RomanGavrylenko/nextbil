import { useCallback, useState } from 'react';

export const useSpinner = (isDefaultShow: boolean) => {
    const [isShowSpinner, setIsShowSpinner] = useState(isDefaultShow);

    const handleShow = useCallback(() => {
        setIsShowSpinner(true);
    }, [setIsShowSpinner]);

    const handleHide = useCallback(() => {
        setIsShowSpinner(false);
    }, [setIsShowSpinner]);

    return {
        isShowSpinner,
        onShowSpinner: handleShow,
        onHideSpinner: handleHide,
    };
};
