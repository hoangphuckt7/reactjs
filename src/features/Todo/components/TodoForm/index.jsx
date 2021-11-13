import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputFied from '../../../Album/components/InputField';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {

    const schema = yup.object({
        title: yup.string()
        .required('loi')
        .min(5, 'title is too short'),
      }).required();
      
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    });
    const handleSubmit = (values) =>{
        // console.log('Todo form: ',values);
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(values);
        };

        form.reset();
    }
    
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            todoForm
            <InputFied name="title" label="Todo" form={form}/>
        </form>
    );
}

export default TodoForm;