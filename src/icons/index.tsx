import { ReactComponent as LetterIcon } from '@/assets/images/svg/letter.svg';
import { ReactComponent as LockIcon } from '@/assets/images/svg/lock.svg';
import React, { memo } from 'react';


export { 
    LetterIcon,
    LockIcon,
};

export const Icon = memo(() => {
    return (
        <LockIcon width={16} height={20} />
    );
})
