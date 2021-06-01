import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IOption } from '../../../../helpers/interfaces'
import { FormContext } from '../../../../store/form/formContext'
import Select from '../../utils/forms/Select'
import Subtitle from '../../utils/texts/Subtitle'
import * as yup from 'yup'

interface IInputs {
    finance_for: string
}

const schema = yup.object().shape({
    finance_for: yup
        .string()
        .required('This field is required*'),
})

const StepFinanceFor = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { finance_for } } = useContext(FormContext)

    const { register, trigger, watch, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (finance_for != '') {
            setValue('finance_for', finance_for)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { finance_for } = getValues();
            updateForm({ field: 'finance_for', value: finance_for })
            return valid ? true : false;
        }
    }));

    const options: IOption[] = [
        { key: 'expansion', value: 'Expansion' },
        { key: 'equipment_purchase', value: 'Equipatment purchase' },
        { key: 'inventory', value: 'Inventory' },
        { key: 'payroll', value: 'Payroll' },
        { key: 'marketing', value: 'Marketing' },
        { key: 'commercial_real_state', value: 'Commercial real state' },
        { key: 'remotel_my_location', value: 'Remodel my location' },
        { key: 'refinance_debt', value: 'Refinance Debt' },
        { key: 'finance_accounts_recivable', value: 'Finance Accounts Receivable' },
        { key: 'buy_business_franchise', value: 'Buy a business/Franchise' },
        { key: 'start_business', value: 'Start a Business' },
    ]

    return (
        <>
            <h2 className="title-3">Business Loans</h2>
            <Subtitle text="What are you getting financing for?" />
            <Select 
            firstValue="Select one" 
            options={options} 
            extraStyle="lg:w-2/12 xl:w-1/5 w-3/4"
            register={register} 
            errorMessage={errors.finance_for?.message} 
            name="finance_for"
            />
            <p className="font-mabry text-main font-light text-base mt-5">Please select your purpose</p>
        </>
    )
})

export default StepFinanceFor
