import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import { useForm } from 'react-hook-form'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputSlideNumber from '../../utils/input_slide/InputSlideNumber'

interface IInputs {
    money_need: string
}

const StepDownPayment = React.forwardRef<unknown>((props, ref: any) => {

    const { form: { down_payment } } = useContext(FormContext)
    const [error, setError] = useState(false)

    const marks = {
        0: '0%',
        10: '',
        20: '',
        30: '',
        40: '',
        50: '',
        60: '',
        70: '',
        80: '',
        90: '',
        100: '100%',
    }

    const min = 0;
    const max = 100;

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            if ((down_payment || 0) > 0) {
                setError(false);
                return true;
            }
            setError(true);
            return false;
        }
    }));

    return (
        <>
            <Subtitle text="how much are you putting down as a <span class='text-2xl md:text-2xxl'>down payment?</span>" />
            <InputSlideNumber marks={marks} min={min} max={max} range={false} onlyPercentaje={true} value={[0, down_payment]} field="down_payment" />
            {error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select a range</span>)}
        </>
    )
})

export default StepDownPayment
