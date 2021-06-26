import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface IInputs {
    business_code: string
}

const schema = yup.object().shape({
    business_code: yup
        .string()
        .min(5,'Please complete 5 characters')
        .max(5,'Only 5 characters allowed')
        .required('This field is required*'),
})

const StepBusinessCode =  React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { business_code } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (business_code != '') {
            setValue('business_code', business_code)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { business_code } = getValues();
            updateForm({ field: 'business_code', value: business_code })
            return valid ? true : false;
        }
    }));
    
    return (
        <>
            <Subtitle text="<span class='text-2xl md:text-2xxl'>ZIP</span> Code"/>
            <TextField
                id="business_code"
                type="number"
                name="business_code"
                errorMessage={errors.business_code?.message}
                register={register}
            />
        </>
    )
})

export default StepBusinessCode
