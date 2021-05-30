import React, { useContext, useEffect, useImperativeHandle } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import { useForm } from 'react-hook-form'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface IInputs {
    money_need: string
}

const schema = yup.object().shape({
    money_need: yup
        .string()
        .required('This field is required*'),
})

const StepMoneyNeed = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { money_need } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue } = useForm<IInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (money_need != '') {
            setValue('money_need', money_need)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { money_need } = getValues();
            updateForm({ field: 'money_need', value: money_need })
            return valid ? true : false;
        }
    }));

    return (
        <>
            <h2 className="title-3">Business Loans</h2>
            <Subtitle text="How much money do you need?" />
            <TextField
                id="money_need"
                type="number"
                name="money_need"
                errorMessage={errors.money_need?.message}
                register={register}
            />
        </>
    )
})

export default StepMoneyNeed
