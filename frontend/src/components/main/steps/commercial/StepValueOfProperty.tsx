import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Subtitle from '../../utils/texts/Subtitle'
import InputSlideNumber from '../../utils/input_slide/InputSlideNumber'

const StepValueOfProperty = React.forwardRef<unknown>((props, ref: any) => {

    const { form: { estimated_value_property } } = useContext(FormContext)
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
    
    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            if ((estimated_value_property || 0) > 0) {
                setError(false);
                return true;
            }
            setError(true);
            return false;
        }
    }));

    return (
        <>
            <Subtitle text="please estimate the <span class='text-2xl md:text-2xxl'>value</span> of the <span class='text-2xl md:text-2xxl'>property</span>" />
            <InputSlideNumber marks={marks} min={min} max={max} value={[0, estimated_value_property]} field="estimated_value_property" />
            {error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select the estimated value</span>)}
        </>
    )
})

export default StepValueOfProperty
