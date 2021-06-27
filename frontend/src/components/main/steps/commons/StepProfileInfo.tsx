import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { FormContext } from '../../../../store/form/formContext'
import NumberFormat from 'react-number-format';
import MessageError from '../../utils/texts/MessageError'

interface IInputs {
    full_name: string
    email: string
    phone_number: string
}

const schema = yup.object().shape({
    full_name: yup
        .string()
        .required('This field is required*'),
    email: yup
        .string()
        .email('The email must be valid*')
        .required('This field is required*'),
})


const StepFullName = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { full_name, email, phone_number } } = useContext(FormContext)

    const { register, trigger, formState: { errors }, getValues, setValue, watch } = useForm<IInputs>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (full_name != '') {
            setValue('full_name', full_name)
        }
        if (email != '') {
            setValue('email', email)
        }
        if (phone_number != '') {
            setPhone(phone_number)
        }
    }, [])

    const [phone, setPhone] = useState('')
    const [errorPhoneNumber, setErrorPhoneNumber] = useState('')
    const [formatedPhone, setFormatedPhone] = useState('')

    const handlePhoneNumber = (e: any) => {
        setPhone(e.value);
        setFormatedPhone(e.formattedValue)
        if(e.value.length == 10) {
            setErrorPhoneNumber('');
        }
    }

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const valid = await trigger();
            const { full_name, email, phone_number } = getValues();
            setErrorPhoneNumber('')
            updateForm({ field: 'full_name', value: full_name })
            updateForm({ field: 'email', value: email })
            updateForm({ field: 'phone_number', value: phone_number })
            if (phone.length != 10) {
                setErrorPhoneNumber('Please complete the cell phone')
                return false;
            }
            updateForm({ field: 'phone_number', value: formatedPhone })
            return valid ? true : false;
        }
    }));

    return (
        <>
            <TextField
                id="full_name"
                type="text"
                name="full_name"
                label="FULL NAME"
                errorMessage={errors.full_name?.message}
                register={register}
            />
            <TextField
                id="email"
                type="email"
                name="email"
                label="EMAIL"
                errorMessage={errors.email?.message}
                register={register}
            />
            <div className="form font-mabry w-8/12 sm:w-6/12 md:w-6/12 lg:w-1/5 main relative my-2 main">
                <label className="block mb-3 text-base text-main font-gobold" htmlFor={phone_number}>CELL PHONE #</label>
                <NumberFormat
                    id={'phone_number'}
                    format="(###) ###-####"
                    allowEmptyFormatting
                    mask="_"
                    value={phone}
                    onValueChange={handlePhoneNumber}
                />
                 <MessageError text={errorPhoneNumber} />
            </div>
        </>
    )
})

export default StepFullName
