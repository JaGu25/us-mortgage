import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Subtitle from '../../utils/texts/Subtitle'
import Radio from '../../utils/forms/Radio'

const StepCurrentlyEmployed = React.forwardRef<unknown>((props, ref: any) => {

    const optionsCurrentlyEmployed = [
        { field: 'currently_employed', value: 'Full-time', selected: false },
        { field: 'currently_employed', value: 'Part-time', selected: false },
        { field: 'currently_employed', value: 'Self-employed', selected: false },
        { field: 'currently_employed', value: "No, I'm not employed", selected: false },
    ]

    const [error, setError] = useState(false)
    const { updateForm } = useContext(FormContext)
    const [options, setOptions] = useState(optionsCurrentlyEmployed);

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
            <Subtitle text="are you <span class='text-2xl md:text-2xxl'>currently employed?</span>" />
            {
                options.map((e, index) => (
                    <Radio key={index} text={e.value} custom={true} handleClick={() => handleSelectOption(index)} />
                ))
            }
            {error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepCurrentlyEmployed
