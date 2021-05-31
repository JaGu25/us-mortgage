import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { FormContext } from '../../../../store/form/formContext'
import MessageError from '../../utils/texts/MessageError'

interface IInputs {
    phone_number: string
}

const schema = yup.object().shape({
    phone_number: yup
        .string()
        .required('This field is required*'),
})

const StepBestWayReachYou = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { phone_number } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (phone_number != '') {
            setValue('phone_number', phone_number)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { phone_number } = getValues();
            updateForm({ field: 'phone_number', value: phone_number })
            return valid ? true : false;
        }
    }));

    return (
        <>
            <Subtitle text="What's the best way to reach you?" />
            <div className="flex w-full justify-center items-center">
                <div className="border-main border px-1 rounded-md -mt-2 mr-1 ">
                    <i className="fas just fa-mobile-alt text-2xl text-main"></i>
                </div>
                <TextField
                    id="phone_number"
                    type="text"
                    name="phone_number"
                    register={register}
                />
            </div>
            { errors.phone_number?.message && (<MessageError text={errors.phone_number?.message} />)}
        </>
    )
})

export default StepBestWayReachYou
