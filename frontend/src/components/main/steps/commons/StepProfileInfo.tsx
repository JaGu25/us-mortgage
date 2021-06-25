import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { FormContext } from '../../../../store/form/formContext'

interface IInputs {
    full_name: string
    email: string
    phone_number: string
}

const schema = yup.object().shape({
    full_name: yup
        .string()
        .required('This field is required*'),
    email: yup
        .string()
        .email('The email must be valid*')
        .required('This field is required*'),
    phone_number: yup
        .string()
        .max(10,'Only 10 characters allowed')
        .required('This field is required*'),
})


const StepFullName = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { first_name, email, phone_number } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        // if (first_name != '') {
        //     setValue('first_name', first_name)
        //     setValue('last_name', last_name)
        // }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { full_name, email, phone_number } = getValues();
            // updateForm({ field: 'first_name', value: first_name })
            // updateForm({ field: 'last_name', value: last_name })
            return valid ? true : false;
        }
    }));

    return (
        <>
            <TextField
                id="full_name"
                type="text"
                name="full_name"
                label="FULL NAME"
                errorMessage={errors.full_name?.message}
                register={register}
            />
            <TextField
                id="email"
                type="email"
                name="email"
                label="EMAIL"
                errorMessage={errors.email?.message}
                register={register}
            />
            <TextField
                id="phone_number"
                type="number"
                name="phone_number"
                label="CELL PHONE #"
                errorMessage={errors.phone_number?.message}
                register={register}
            />
        </>
    )
})

export default StepFullName
