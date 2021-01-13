import { Formik } from 'formik';
import React, { useMemo } from 'react';
import { Gender, OptionItem } from '@/types/common';
import { formikPropsToProp, selectFormikPropsToProp } from '@/utils/formikPropToProp';
import Checkbox from '@/components/forms/Checkbox';
import TextField from '@/components/forms/TextField';
import LockIcon from '@/assets/images/svg/lock.svg';
import EmailIcon from '@/assets/images/svg/lock.svg';
import Radio from '../forms/Radio';
import Select from '../forms/Select';
import { Button } from '../Button';
import { Link } from '../Link';

interface FormValues {
    name: string;
    email: string;
    password: string;
    terms: boolean;
    gender?: Gender;
    city: string | number;
}

const genderOptions: Array<OptionItem> = [
    {
        label: 'Male',
        value: Gender.MALE,
    },
    {
        label: 'Female',
        value: Gender.FEMALE,
    },
];

export const SignupForms: React.FC<any> = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        terms: false,
        gender: undefined,
        city: '',
    };

    const handleSubmit = (values: FormValues) => {
        console.log(values);
    };

    const checkboxLabel = useMemo(() => {
        return (
            <span>
                Accept<Link href="#"> terms </Link> and<Link href="#"> conditions </Link>
            </span>
        );
    }, []);

    return (
        <Formik<FormValues> initialValues={initialValues} onSubmit={handleSubmit}>
            {(props) => {
                const { values, handleSubmit } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            {...formikPropsToProp<FormValues>('name', props)}
                            value={values['name']}
                            placeholder="Enter yur name"
                        />
                        <TextField
                            {...formikPropsToProp<FormValues>('email', props)}
                            value={values['email']}
                            placeholder="Email"
                            icon={EmailIcon}
                        />

                        <TextField
                            {...formikPropsToProp<FormValues>('password', props)}
                            value={values['password']}
                            placeholder="Enter password"
                            icon={LockIcon}
                        />

                        <Select
                            {...selectFormikPropsToProp<FormValues>('city', props)}
                            placeholder="Enter password"
                            value={values['city']}
                            options={genderOptions}
                        />

                        <Radio
                            {...formikPropsToProp<FormValues>('gender', props)}
                            value={values['gender']}
                            options={genderOptions}
                        />

                        <Checkbox
                            {...formikPropsToProp<FormValues>('terms', props)}
                            label={checkboxLabel}
                            checked={values['terms']}
                            type="checkbox"
                        />

                        <Button>sdasdasdas</Button>
                    </form>
                );
            }}
        </Formik>
    );
};
