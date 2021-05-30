import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { FormContext } from '../../../../store/form/formContext'
import MessageError from '../../utils/texts/MessageError'

interface IInputs {
    password: string,
    repeat_password: string,
    shared_data: boolean
}

const schema = yup.object().shape({
    password: yup
        .string()
        .min(8, 'At Least 8 Characters Long')
        .required('This field is required*')
        .test(
            "Contains 1 Uppercase Letter*",
            "Contains 1 Uppercase Letter*",
            (value) => /[A-Z]/.test(value || '')
        ).test(
            "Contains 1 Lowercase Letter*",
            "Contains 1 Lowercase Letter*",
            (value) => /[a-z]/.test(value || '')
        ).test(
            "Cotains 1 Number*",
            "Cotains 1 Number*",
            (value) => /[0-9]/.test(value || '')
        ),
    repeat_password: yup
        .string()
        .oneOf([yup.ref('password'), null], "Yout passwords dont't match")
        .required('Confirm Password is required'),
    shared_data: yup.bool()
        .oneOf([true], 'You must agree to share your personal data')
})


const StepConfirmation = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { password, email } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (password != '') {
            setValue('password', email)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { password } = getValues();
            if (valid) {
                updateForm({ field: 'password', value: password })
                updateForm({ field: 'completed', value: true })
            }
            return valid ? true : false;
        }
    }));

    // abcd1234A
    return (
        <>
            <div className="flex flex-col items-center justify-center my-2 flex-wrap font-mabry mt-0 sm:mt-3 lg:-mt-10 px-0 sm:px-2">
                <p className="mt-3">Your email address ({email}) will be your Username.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-6 mb-8 ">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox border-main border bg-gray-100 text-main" checked disabled />
                        <span className="ml-2 text-xs sm:text-base lg:text-lg">Contains 1 Uppercase Letter</span>
                    </label>
                    <label className="flex items-center ml-0 lg:ml-4">
                        <input type="checkbox" className="form-checkbox border-main border bg-gray-100 text-main" checked disabled />
                        <span className="ml-2 text-xs sm:text-base lg:text-lg">Contains 1 Lowercase Letter</span>
                    </label>
                    <label className="flex items-center ml-0 lg:ml-3">
                        <input type="checkbox" className="form-checkbox border-main border bg-gray-100 text-main" checked disabled />
                        <span className="ml-2 text-xs sm:text-base lg:text-lg">Contains 1 Number</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox border-main border bg-gray-100 text-main" checked disabled />
                        <span className="ml-2 text-xs sm:text-base lg:text-lg">At Least 8 Characters Long</span>
                    </label>
                </div>
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    errorMessage={errors.password?.message}
                    register={register}
                />
                <TextField
                    id="repeat_password"
                    type="password"
                    name="repeat_password"
                    label="Re-enter Password"
                    errorMessage={errors.repeat_password?.message}
                    register={register}
                />
                <div className="w-3/4 lg:w-1/2 mt-8 text-main font-light rounded-sm py-5 px-3 lg:px-10" style={{ backgroundColor: "#e3e3e3" }}>
                    <label className="flex items-center ml-3">
                        <input type="checkbox"
                            {...register('shared_data')}
                            className="form-checkbox border-main border bg-gray-100 text-main"
                        />
                        <span className="ml-2 text-sm lg:text-lg font-medium cursor-pointer">I agree that my data can be used for the purposes noted below.</span>
                    </label>
                    <p className="text-left ml-10 mt-2 text-sm">
                        By checking the box, you agree that we can share your personal data and contact info with
                        third parties like our mortgage partners, partner companies and affiliates.
                        You also agree that these parties can use your personal data and contact info for
                        marketing and analytic purposes, and to improve your experience.
                    </p>
                </div>
                <MessageError text={errors.shared_data?.message || ''} />
            </div>
        </>
    )
})

export default StepConfirmation
