import React, { useContext, useEffect, useImperativeHandle } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import { useForm } from 'react-hook-form'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface IInputs {
    additional_cash: string
}

const schema = yup.object().shape({
    additional_cash: yup
        .string()
        .required('This field is required*'),
})

const StepAdditionalCash = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { additional_cash } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (additional_cash != '') {
            setValue('additional_cash', additional_cash)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { additional_cash } = getValues();
            updateForm({ field: 'additional_cash', value: additional_cash })
            return valid ? true : false;
        }
    }));

    return (
        <>
            <Subtitle text="would you like to borrow <span class='text-2xl md:text-2xxl'>additional cash?</span>" />
            <TextField
                id="additional_cash"
                type="number"
                name="additional_cash"
                errorMessage={errors.additional_cash?.message}
                register={register}
                icon="fa-dollar-sign"
            />
        </>
    )
})

export default StepAdditionalCash
