import React, { useContext, useEffect, useImperativeHandle } from 'react'
import TextField from '../../utils/forms/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { FormContext } from '../../../../store/form/formContext'

interface IInputs {
    email: string
}

const schema = yup.object().shape({
    email: yup
        .string()
        .email('The email must be valid*')
        .required('This field is required*'),
})


const StepEmailAddress =  React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { email } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (email != '') {
            setValue('email', email)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { email } = getValues();
            updateForm({ field: 'email', value: email })
            return valid ? true : false;
        }
    }));
    
    return (
        <>
            <TextField
                id="email"
                type="email"
                name="email"
                label="Email Address"
                errorMessage={errors.email?.message}
                register={register}
            />
        </>
    )
})

export default StepEmailAddress
