import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Subtitle from '../../utils/texts/Subtitle'
import Radio from '../../utils/forms/Radio'

const StepPlanPurchase = React.forwardRef<unknown>((props, ref: any) => {

    const optionsPrimary = [
        { field: 'plan_to_purchase', value: 'immediatly', text: 'Immediately: Signed a Purchase Agreement', selected: false },
        { field: 'plan_to_purchase', value: 'asap', text: 'Found a House/Offer Pending', selected: false },
        { field: 'plan_to_purchase', value: 'within_30', text: 'Within 30 Days', selected: false },
        { field: 'plan_to_purchase', value: '2_3_month', text: '2 - 3 Months', selected: false },
        { field: 'plan_to_purchase', value: '3_6_month', text: '3 - 6 Months', selected: false }
    ]

    const optionsSecondary = [
        { field: 'plan_to_purchase', value: '3_6_month', text: '3 - 6 Months', selected: false },
        { field: 'plan_to_purchase', value: '6_month', text: '6+ Months', selected: false },
        { field: 'plan_to_purchase', value: 'no_time_frame', text: 'No Time Frame: I am Researching Options', selected: false },
    ]

    const optionsInvestment = [
        { field: 'plan_to_purchase', value: 'immediatly', text: 'Immediately: Signed a Purchase Agreement', selected: false },
        { field: 'plan_to_purchase', value: 'asap', text: 'Found a House/Offer Pending', selected: false },
        { field: 'plan_to_purchase', value: 'within_30', text: 'Within 30 Days', selected: false },
        { field: 'plan_to_purchase', value: '2_3_month', text: '2 - 3 Months', selected: false },
        { field: 'plan_to_purchase', value: '3_6_month', text: '3 - 6 Months', selected: false },
        { field: 'plan_to_purchase', value: '6_month', text: '6+ Months', selected: false },
        { field: 'plan_to_purchase', value: 'no_time_frame', text: 'No Time Frame: I am Researching Options', selected: false },
    ]

    const [error, setError] = useState(false)
    const { updateForm, form: { property_use, plan_to_purchase } } = useContext(FormContext)
    const [options, setOptions] = useState([{ field: 'plan_to_purchase', value: '', text: '', selected: false }]);


    useEffect(() => {
        let auxOptions = [{ field: 'plan_to_purchase', value: '', text: '', selected: false }];
        switch (property_use) {
            case 'primary_residence':
                auxOptions = optionsPrimary;
                break;
            case 'secondary_home':
                auxOptions = optionsSecondary;
                break;
            case 'investment_property':
                auxOptions = optionsInvestment;
                break
        }
        if (plan_to_purchase != '') {
            setOptions(auxOptions.map((e) => e.value === plan_to_purchase ? { ...e, selected: true } : e))
        }else{
            setOptions(auxOptions);
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            setError(false)
            const selected = options.find(e => e.selected === true)
            if (selected) {
                updateForm(selected)
                return true
            } else {
                setError(true)
                return false
            }
        }
    }));

    const handleSelectOption = (selected: number) => {
        setError(false);
        let auxOptions = options;
        auxOptions = (auxOptions.map((e) => ({ ...e, selected: false })));
        setOptions(auxOptions.map((e, index) => index === selected ? { ...e, selected: true } : e))
    }

    return (
        <>
            <Subtitle text="When Do You Plan to Purchase Your Home" />
            {
                options.map((e, index) => (
                    <Radio text={e.text} active={options[index].selected} handleClick={() => handleSelectOption(index)} />
                ))
            }
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepPlanPurchase
