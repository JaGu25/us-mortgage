import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'

const StepCreditProfile = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { credit_profile } } = useContext(FormContext)

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState([
        { field: 'credit_profile', value: 'smile_excelent', selected: false },
        { field: 'credit_profile', value: 'smile_good', selected: false },
        { field: 'credit_profile', value: 'smile_avg', selected: false },
        { field: 'credit_profile', value: 'smile_below', selected: false },
        { field: 'credit_profile', value: 'smile_poor', selected: false }
    ])

    useEffect(() => {
        if(credit_profile != ''){
            setCardsActives(cardActives.map((e) => e.value === credit_profile ? { ...e, selected: true } : e))
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

    const handeleSelectCard = (selected: number) => {
        setError(false);
        let auxCardActives = cardActives;
        auxCardActives = (auxCardActives.map((e) => ({ ...e, selected: false })));
        setCardsActives(auxCardActives.map((e, index) => index === selected ? { ...e, selected: true } : e))
    }

    return (
        <div>
            <Subtitle text="Your Credit Profile" />
            <div className="card-container">
                <Card icon="smile_excelent" text="" twoWords={['Excellent', '720+']} extraChipStyle="card-chip-add" active={cardActives[0].selected} handleClick={() => handeleSelectCard(0)} />
                <Card icon="smile_good" text="" twoWords={['Good', '660-719']} extraChipStyle="card-chip-add" active={cardActives[1].selected} handleClick={() => handeleSelectCard(1)} />
                <Card icon="smile_avg" text="" twoWords={['Avg.', '620-659']} extraChipStyle="card-chip-add" active={cardActives[2].selected} handleClick={() => handeleSelectCard(2)} />
                <Card icon="smile_below" text="" twoWords={['Below Avg', '580-619']} extraChipStyle="card-chip-add" active={cardActives[3].selected} handleClick={() => handeleSelectCard(3)} />
                <Card icon="smile_poor" text="" twoWords={['Poor', '>580']} extraChipStyle="card-chip-add" active={cardActives[4].selected} handleClick={() => handeleSelectCard(4)} />
            </div>
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </div>
    )
})

export default StepCreditProfile
