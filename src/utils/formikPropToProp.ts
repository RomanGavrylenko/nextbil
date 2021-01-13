import { FormikProps } from 'formik';

export const formikPropsToProp = <K>(name: keyof K, props: FormikProps<K>) => ({
    onChange: props.handleChange,
    onBlur: props.handleBlur,
    name,
    error: props.errors[name],
    touched: props.touched[name],
});

export const selectFormikPropsToProp = <K>(name: keyof K, props: FormikProps<K>) => ({
    setFieldValue: props.setFieldValue,
    setFieldTouched: props.setFieldTouched,
    name,
    error: props.errors[name],
    touched: props.touched[name],
});
