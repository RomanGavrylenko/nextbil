import { Formik } from 'formik';
import React, { useMemo } from 'react';
import TextField from '@/components/forms/TextField';
import LockIcon from '@/assets/images/svg/lock.svg';
import EmailIcon from '@/assets/images/svg/lock.svg';
import Checkbox from '@/components/forms/Checkbox';
import { Button } from '@/components/Button';
import Radio from '@/components/forms/Radio';
import { Gender, OptionItem } from '@/types/common';

interface FormValues {
    email: string;
    password: string;
    terms: boolean;
    gender?: Gender;
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

function App() {
    const initialValues = {
        email: '',
        password: '',
        terms: false,
        gender: undefined,
    };

    const handleSubmit = (values: FormValues) => {
        console.log(values);
    };

    const checkboxLabel = useMemo(() => {
        return <span>check update</span>;
    }, []);

    return (
        <>
            <div>Good luck!</div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                initialErrors={{
                    email: 'Please enter a valid email address',
                }}
                initialTouched={{
                    email: true,
                }}
            >
                {(props) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <Checkbox
                                label={checkboxLabel}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="terms"
                                checked={values['terms']}
                                error={errors['terms']}
                                touched={touched['terms']}
                                type="checkbox"
                            />
                            <TextField
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="email"
                                value={values['email']}
                                error={errors['email']}
                                touched={touched['email']}
                                placeholder="Email"
                                icon={EmailIcon}
                            />
                            <TextField
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="password"
                                value={values['password']}
                                error={errors['password']}
                                touched={touched['password']}
                                placeholder="Enter password"
                                icon={LockIcon}
                            />
                            <Radio
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="gender"
                                value={values['gender']}
                                error={errors['gender']}
                                touched={touched['gender']}
                                options={genderOptions}
                            />

                            <Button>sdasdasdas</Button>
                        </form>
                    );
                }}
            </Formik>
        </>
    );
}

export default App;
