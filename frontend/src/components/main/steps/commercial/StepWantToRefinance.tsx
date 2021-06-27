import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Subtitle from '../../utils/texts/Subtitle'
import Radio from '../../utils/forms/Radio'

const StepWantToRefinance = React.forwardRef<unknown>((props, ref: any) => {

    const optionsInvestment = [
        { field: 'want_to_refinance', value: 'Lower my monthly payment', selected: false },
        { field: 'want_to_refinance', value: 'Pay off my mortgage faster', selected: false },
        { field: 'want_to_refinance', value: 'Take cash out of home', selected: false },
        { field: 'want_to_refinance', value: 'Change my ARM loan to fixed', selected: false },
        { field: 'want_to_refinance', value: 'Browse current mortgage rates', selected: false },
    ]

    const [error, setError] = useState(false)
    const { updateForm } = useContext(FormContext)
    const [options, setOptions] = useState(optionsInvestment);

    useImperativeHandle(ref, () => ({
        validateStep: (valid = true): boolean => {
            if (valid) {
                setError(false)
                const selected = options.find(e => e.selected === true)
                if (selected) {
                    updateForm(selected)
                    return true
                } else {
                    setError(true)
                    return false
                }
            } else {
                return true;
            }
        }
    }));

    const handleSelectOption = (selected: number) => {
        setError(false);
        let auxOptions = options
        auxOptions = (auxOptions.map((e) => ({ ...e, selected: false })))
        auxOptions = auxOptions.map((e, index) => index === selected ? { ...e, selected: true } : e)
        setOptions(auxOptions)
        const option = auxOptions.find((e: any) => e.selected === true)
        updateForm(option)
        {/*// @ts-ignore */ }
        props.changeCurrentStep(1);
    }

    return (
        <>
            <Subtitle text="why do you want to <span class='text-2xl md:text-2xxl'>refinance?</span>" />
            {
                options.map((e, index) => (
                    <Radio key={index} text={e.value} custom={false} handleClick={() => handleSelectOption(index)} />
                ))
            }
            {error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepWantToRefinance
