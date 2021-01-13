import { Formik } from 'formik';
import React, { useMemo } from 'react';
import TextField from '@/components/forms/TextField';
import LockIcon from '@/assets/images/svg/lock.svg';
import EmailIcon from '@/assets/images/svg/lock.svg';
import Checkbox from '@/components/forms/Checkbox';
import { Button } from '@/components/Button';
import Radio from '@/components/forms/Radio';
import { Gender, OptionItem } from '@/types/common';
import Select from './components/forms/Select';
import { formikPropsToProp, selectFormikPropsToProp } from './utils/formikPropToProp';

interface FormValues {
    email: string;
    password: string;
    terms: boolean;
    gender?: Gender;
    select: string | number;
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
        select: '',
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
            <Formik<FormValues>
                initialValues={initialValues}
                onSubmit={handleSubmit}
                initialErrors={{
                    select: 'Please enter a valid email address',
                }}
                initialTouched={{
                    select: true,
                }}
            >
                {(props) => {
                    const { values, handleSubmit } = props;
                    return (
                        <form onSubmit={handleSubmit} style={{ width: 300 }}>
                            <Checkbox
                                {...formikPropsToProp<FormValues>('terms', props)}
                                label={checkboxLabel}
                                checked={values['terms']}
                                type="checkbox"
                            />
                            <TextField
                                {...formikPropsToProp<FormValues>('email', props)}
                                value={values['email']}
                                placeholder="Email"
                                icon={EmailIcon}
                            />

                            <Radio
                                {...formikPropsToProp<FormValues>('gender', props)}
                                value={values['gender']}
                                options={genderOptions}
                            />

                            <TextField
                                {...formikPropsToProp<FormValues>('password', props)}
                                value={values['password']}
                                placeholder="Enter password"
                                icon={LockIcon}
                            />

                            <Select
                                {...selectFormikPropsToProp<FormValues>('select', props)}
                                placeholder="Enter password"
                                value={values['select']}
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
