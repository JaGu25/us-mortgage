import React, { useContext, useEffect, useImperativeHandle } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import { useForm } from 'react-hook-form'
import Subtitle from '../../utils/texts/Subtitle'
import InputSlideNumber from '../../utils/input_slide/InputSlideNumber'

interface IInputs {
    money_need: string
}

const StepValueOfProperty = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { money_need } } = useContext(FormContext)

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


    useEffect(() => {
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: async (): Promise<boolean> => {
            return true;
        }
    }));

    return (
        <>
            <Subtitle text="please estimate the <span class='text-2xl md:text-2xxl'>value</span> of the <span class='text-2xl md:text-2xxl'>property</span>" />
            <InputSlideNumber marks={marks} min={min} max={max} range={false} />
        </>
    )
})

export default StepValueOfProperty
