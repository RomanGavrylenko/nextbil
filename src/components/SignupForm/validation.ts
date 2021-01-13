import * as Yup from 'yup';

const nameRegex = /^[A-Za-z]+$/;

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email address').required(),
    password: Yup.string().trim().min(6, 'Password must contain at least 6 symbols').required(),
    country: Yup.string().required('You must select your country'),
    gender: Yup.string().required('You must select the gender'),
    terms: Yup.boolean().oneOf([true], 'You must accept the policies'),
    name: Yup.string()
        .matches(nameRegex, 'Please enter a valid name')
        .required('You must enter your name'),
});
