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

const StepEstimatedPurchase = React.forwardRef<unknown>((props, ref: any) => {

    const { form: { estimated_purchase_price } } = useContext(FormContext)
    const [error, setError] = useState(false)

    const marks = {
        0: '$0',
        100000: '',
        200000: '',
        300000: '',
        400000: '',
        500000: '',
        600000: '',
        700000: '',
        800000: '',
        900000: '',
        1000000: '',
        1500000: '',
        2000000: '',
        2500000: '',
        3000000: '',
        3500000: '',
        4000000: '$4M+'
    }

    const min = 0;
    const max = 4000000;

    const [value01, value02] = estimated_purchase_price.split('-');

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            const [value01, value02] = estimated_purchase_price.split('-');
            if (parseInt(value02) - parseInt(value01) > 0) {
                setError(false);
                return true;
            }
            setError(true);
            return false;
        }
    }));

    return (
        <>
            <Subtitle text="what is the estimated <span class='text-2xl md:text-2xxl'>purchase price?</span>" />
            <InputSlideNumber marks={marks} min={min} max={max} range={true} value={[value01, value02]} field="estimated_purchase_price" />
            {error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select the estimated purchase price</span>)}
        </>
    )
})

export default StepEstimatedPurchase
