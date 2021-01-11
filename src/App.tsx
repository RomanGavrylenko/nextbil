import { Formik } from 'formik';
import React, { useMemo } from 'react';
import TextField from '@/components/forms/TextField';
import LockIcon from '@/assets/images/svg/lock.svg';
import EmailIcon from '@/assets/images/svg/lock.svg';
import Checkbox from './components/forms/Checkbox';

interface FormValues {
    email: string;
    password: string;
    terms: boolean;
}

function App() {
    const initialValues = {
        email: '',
        password: '',
        terms: false,
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
                        </form>
                    );
                }}
            </Formik>
        </>
    );
}

export default App;
