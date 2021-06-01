import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
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

    useEffect(() => {
        if(first_time_buyer != ''){
            setCardsActives(cardActives.map((e) => e.value === first_time_buyer ? { ...e, selected: true } : e))
        }
    }, [])

    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            setError(false)
            const selected = cardActives.find(e => e.selected === true)
            if (selected) {
                updateForm(selected)
                return true
            } else {
                setError(true)
                return false
            }
        }
    }));

    const handleSelectCard = (selected: number) => {
        setError(false);
        let auxCardActives = cardActives;
        auxCardActives = (auxCardActives.map((e) => ({ ...e, selected: false })));
        setCardsActives(auxCardActives.map((e, index) => index === selected ? { ...e, selected: true } : e))
    }

    return (
        <>
            <Subtitle text="Are you a first-time home buyer?" />
            <div className="card-container">
                <Card icon="yes" text="Yes" active={cardActives[0].selected} handleClick={() => handleSelectCard(0)} />
                <Card icon="no" text="No" active={cardActives[1].selected} handleClick={() => handleSelectCard(1)} />
            </div>
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepFirstTimeBuyer
