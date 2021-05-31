import React, { useContext, useEffect, useImperativeHandle } from 'react'
import { monthsOptions, yearOptions } from '../../../../helpers/commons'
import { FormContext } from '../../../../store/form/formContext'
import { IOption } from '../../../../helpers/interfaces'
import Select from '../../utils/forms/Select'
import Subtitle from '../../utils/texts/Subtitle'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useFormContext } from 'react-hook-form'

interface IInputs {
    month_start: string
    yeart_start: string
}

const schema = yup.object().shape({
    month_start: yup
        .string()
        .required('This field is required*'),
    yeart_start: yup
        .string()
        .required('This field is required*'),
})


const StepWhenStartBusiness = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { month_start, yeart_start } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (month_start != '') {
            setValue('month_start', month_start)
            setValue('yeart_start', yeart_start)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { month_start, yeart_start } = getValues();
            updateForm({ field: 'month_start', value: month_start })
            updateForm({ field: 'yeart_start', value: yeart_start })
            return valid ? true : false;
        }
    }));

    return (
        <>
            <h2 className="title-3">Business Loans</h2>
            <Subtitle text="When did you start your business?" />
            <div className="flex flex-col lg:flex-row justify-center w-3/4 lg:w-1/3 xl:w-1/4">
                <div className="w-full lg:w-1/2 mx-2">
                    <Select
                        options={monthsOptions}
                        firstValue="Months"
                        extraStyle="w-full lg:w-full xl:w-full"
                        register={register}
                        errorMessage={errors.month_start?.message}
                        name="month_start"
                    />
                </div>
                <div className="w-full lg:w-1/2 mx-2">
                    <Select
                        options={yearOptions()}
                        firstValue="Year"
                        extraStyle="w-full lg:w-full xl:w-full"
                        register={register}
                        errorMessage={errors.yeart_start?.message}
                        name="yeart_start"
                    />
                </div>
            </div>
            <p className="font-mabry text-main font-light text-base mt-5">(Use acquisition date if not founder)</p>
        </>
    )
})

export default StepWhenStartBusiness
