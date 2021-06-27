import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Subtitle from '../../utils/texts/Subtitle'
import InputSlideNumber from '../../utils/input_slide/InputSlideNumber'

const StepMortgageBalance = React.forwardRef<unknown>((props, ref: any) => {

    const { form: { morgate_balance } } = useContext(FormContext)
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


    useEffect(() => {
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            if ((morgate_balance || 0) > 0) {
                setError(false);
                return true;
            }
            setError(true);
            return false;
        }
    }));

    return (
        <>
            <Subtitle text="what is the <span class='text-2xl md:text-2xxl'>mortgage balance?</span>" />
            <InputSlideNumber marks={marks} min={min} max={max} range={false} value={[0, 50]} percentaje={true} field="morgate_balance" />
            {error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select the mortgage balance</span>)}
        </>
    )
})

export default StepMortgageBalance
