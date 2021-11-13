import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputFied.propTypes = {
    form: PropTypes.object.isRequired, //bắt buộc phải có
    name: PropTypes.string.isRequired, //bắt buộc phải có

    label: PropTypes.string,
    disabled: PropTypes.bool, 
};

function InputFied(props) {
    const {form, name, label, disabled} = props;
    // const {errors, formState} = form;
    // const hasError = formState.touchedFields[name] && errors[name];
    // console.log(errors[name], formState.touchedFields[name]);

    return (
        <Controller
            name={name}
            control = {form.control}
            render = {({field}) => (
                <TextField
                    {...field}
                    fullWidth
                    
                    label={label}
                    disabled={disabled}
                    variant="filled"

                    // error = {!!hasError}
                    // helperText= {errors[name]?.message}
                />
            )}
        />
    );
}

export default InputFied;