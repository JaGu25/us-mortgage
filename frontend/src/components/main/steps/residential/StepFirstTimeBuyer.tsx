import React, { useContext, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'

const StepFirstTimeBuyer = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { first_time_buyer } } = useContext(FormContext)

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState([
        { field: 'first_time_buyer', value: 'Yes', selected: false },
        { field: 'first_time_buyer', value: 'No', selected: false },
    ])

    useImperativeHandle(ref, () => ({
        validateStep: (valid = true): boolean => {
            if (valid) {
                setError(false)
                const selected = cardActives.find(e => e.selected === true)
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

    const handleSelectCard = (selected: number) => {
        setError(false);
        let auxCardActives = cardActives;
        auxCardActives = (auxCardActives.map((e) => ({ ...e, selected: false })));
        auxCardActives = auxCardActives.map((e, index) => index === selected ? { ...e, selected: true } : e);
        setCardsActives(auxCardActives)
        const option = auxCardActives.find((e: any) => e.selected === true);
        updateForm(option);
        {/*// @ts-ignore */ }
        props.changeCurrentStep(1);
    }

    return (
        <>
            <Subtitle text="Are you a <span class='text-2xl md:text-2xxl'>first-time</span> home buyer?" />
            <div className="card-container">
                <Card icon="yes" text="Yes" active={cardActives[0].selected} handleClick={() => handleSelectCard(0)} />
                <Card icon="no" text="No" active={cardActives[1].selected} handleClick={() => handleSelectCard(1)} />
            </div>
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepFirstTimeBuyer
