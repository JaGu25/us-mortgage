import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Subtitle from '../../utils/texts/Subtitle'
import Radio from '../../utils/forms/Radio'

const StepPlanPurchase = React.forwardRef<unknown>((props, ref: any) => {

    const optionsInvestment = [
        { field: 'plan_to_purchase', value: 'Immediately: Signed a Purchase Agreement', selected: false },
        { field: 'plan_to_purchase', value: 'Found a House/Offer Pending', selected: false },
        { field: 'plan_to_purchase', value: 'Within 30 Days', selected: false },
        { field: 'plan_to_purchase', value: '2 - 3 Months', selected: false },
        { field: 'plan_to_purchase', value: '3 - 6 Months', selected: false },
        { field: 'plan_to_purchase', value: '6+ Months', selected: false },
        { field: 'plan_to_purchase', value: 'No Time Frame: I am Researching Options', selected: false },
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
            <Subtitle text="<span class='text-2xl md:text-2xxl'>when</span> Do You <span class='text-2xl md:text-2xxl'>Plan</span> to <span class='text-2xl md:text-2xxl'>Purchase Your Home?</span>" />
            {
                options.map((e, index) => (
                    <Radio key={index} text={e.value} custom={false} handleClick={() => handleSelectOption(index)} />
                ))
            }
            {error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepPlanPurchase
