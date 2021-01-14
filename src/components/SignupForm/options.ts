import { Gender, OptionItem } from '@/types/common';

export const genderOptions: Array<OptionItem> = [
    {
        label: 'Male',
        value: Gender.MALE,
    },
    {
        label: 'Female',
        value: Gender.FEMALE,
    },
];

const country = ['Latvia', 'Russia', 'Ukraine', 'England', 'Japan', 'Spain'];

export const countryOptions = country.map((item) => ({
    label: item,
    value: item,
}));
