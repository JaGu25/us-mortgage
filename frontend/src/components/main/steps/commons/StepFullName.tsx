import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { FormContext } from '../../../../store/form/formContext'

interface IInputs {
    first_name: string
    last_name: string
}

const schema = yup.object().shape({
    first_name: yup
        .string()
        .required('This field is required*'),
    last_name: yup
        .string()
        .required('This field is required*'),
})


const StepFullName = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { first_name, last_name } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (first_name != '') {
            setValue('first_name', first_name)
            setValue('last_name', last_name)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { first_name, last_name } = getValues();
            updateForm({ field: 'first_name', value: first_name })
            updateForm({ field: 'last_name', value: last_name })
            return valid ? true : false;
        }
    }));

    return (
        <>
            <TextField
                id="first_name"
                type="text"
                name="first_name"
                label="First Name"
                errorMessage={errors.first_name?.message}
                register={register}
            />
            <TextField
                id="last_name"
                type="text"
                name="last_name"
                label="Last Name"
                errorMessage={errors.last_name?.message}
                register={register}
            />
        </>
    )
})

export default StepFullName
