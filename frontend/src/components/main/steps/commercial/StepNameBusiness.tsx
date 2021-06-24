import React, { useContext, useEffect, useImperativeHandle } from 'react'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormContext } from '../../../../store/form/formContext'
import { useForm } from 'react-hook-form'

interface IInputs {
    business_name: string
}

const schema = yup.object().shape({
    business_name: yup
        .string()
        .required('This field is required*'),
})

const StepNameBusiness =  React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { business_name } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (business_name != '') {
            setValue('business_name', business_name)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { business_name } = getValues();
            updateForm({ field: 'business_name', value: business_name })
            return valid ? true : false;
        }
    }));

    return (
        <>
            <Subtitle text="What's the <span class='text-2xl md:text-2xxl'>name</span> of your <span class='text-2xl md:text-2xxl'>business</span>?"/>
            <TextField
                id="business_name"
                type="text"
                name="business_name"
                errorMessage={errors.business_name?.message}
                register={register}
            />
        </>
    )
})

export default StepNameBusiness
