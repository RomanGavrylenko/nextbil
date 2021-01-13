import { Formik } from 'formik';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Gender, OptionItem } from '@/types/common';
import { formikPropsToProp, selectFormikPropsToProp } from '@/utils/formikPropToProp';
import Checkbox from '@/components/forms/Checkbox';
import TextField from '@/components/forms/TextField';
import LockIcon from '@/assets/images/svg/lock.svg';
import EmailIcon from '@/assets/images/svg/lock.svg';
import Radio from '@/components/forms/Radio';
import Select from '@/components/forms/Select';
import { Button } from '@/components/Button';
import { Link } from '@/components/Link';
import { UserSignupInput } from '@/graphql/user/types';
import { validationSchema } from './validation';

const SubmitButton = styled(Button)`
    margin-top: 20px;
`;

interface FormValues extends UserSignupInput {
    terms: boolean;
}

interface SignupFormProps {
    onSubmit: (d: Omit<FormValues, 'terms'>) => void;
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

const country = ['Latvia', 'Russia', 'Ukraine', 'England', 'Japan', 'Spain'];

const countryOptions = country.map((item) => ({
    label: item,
    value: item,
}));

export const SignupForms: React.FC<SignupFormProps> = ({ onSubmit }) => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        terms: false,
        gender: undefined,
        country: '',
    };

    // eslint-disable-next-line
    const handleSubmit = ({ terms, ...rest }: FormValues) => {
        onSubmit(rest);
    };

    const checkboxLabel = useMemo(() => {
        return (
            <span>
                Accept<Link href="#"> terms </Link> and<Link href="#"> conditions </Link>
            </span>
        );
    }, []);

    return (
        <Formik<FormValues>
            initialValues={initialValues}
            onSubmit={handleSubmit}
            isInitialValid={false}
            validationSchema={validationSchema}
            validateOnChange
            validateOnMount
        >
            {(props) => {
                const { values, handleSubmit, isValid } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            {...formikPropsToProp<FormValues>('name', props)}
                            value={values['name']}
                            placeholder="Enter yur name"
                            type="text"
                        />
                        <TextField
                            {...formikPropsToProp<FormValues>('email', props)}
                            value={values['email']}
                            placeholder="Email"
                            icon={EmailIcon}
                            type="email"
                        />

                        <TextField
                            {...formikPropsToProp<FormValues>('password', props)}
                            value={values['password']}
                            placeholder="Password"
                            icon={LockIcon}
                            type="password"
                        />

                        <Select
                            {...selectFormikPropsToProp<FormValues>('country', props)}
                            placeholder="Select country"
                            value={values['country']}
                            options={countryOptions}
                        />

                        <Radio
                            {...formikPropsToProp<FormValues>('gender', props)}
                            value={values['gender']}
                            options={genderOptions}
                            type="radio"
                        />

                        <Checkbox
                            {...formikPropsToProp<FormValues>('terms', props)}
                            label={checkboxLabel}
                            checked={values['terms']}
                            type="checkbox"
                        />

                        <SubmitButton type="submit" disabled={!isValid}>
                            Sign up
                        </SubmitButton>
                    </form>
                );
            }}
        </Formik>
    );
};
