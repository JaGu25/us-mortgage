import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormContext } from '../../../../store/form/formContext'
import { useForm } from 'react-hook-form'

interface IInputs {
    annual_revenue: string
}

const schema = yup.object().shape({
    annual_revenue: yup
        .string()
        .required('This field is required*'),
})


const StepAnnualRevenue =  React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { annual_revenue } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (annual_revenue != '') {
            setValue('annual_revenue', annual_revenue)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { annual_revenue } = getValues();
            updateForm({ field: 'annual_revenue', value: annual_revenue })
            return valid ? true : false;
        }
    }));

    return (
        <>
            <h2 className="title-3">Business Loans</h2>
            <Subtitle text="Whats's your annual revenue?"/>
            <TextField 
                 id="annual_revenue"
                 type="number"
                 name="annual_revenue"
                 errorMessage={errors.annual_revenue?.message}
                 register={register}
            />
        </>
    )
})

export default StepAnnualRevenue
