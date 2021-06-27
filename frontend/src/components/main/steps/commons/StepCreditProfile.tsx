import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'

const StepCreditProfile = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm } = useContext(FormContext)

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState([
        { field: 'credit_profile', value: 'Excellent 720+', selected: false },
        { field: 'credit_profile', value: 'Good 660-719', selected: false },
        { field: 'credit_profile', value: 'Avg 620-659', selected: false },
        { field: 'credit_profile', value: 'Below Avg 580-619', selected: false },
        { field: 'credit_profile', value: 'Poor >580', selected: false }
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
        <div>
            <Subtitle text="Your <span class='text-2xl md:text-2xxl'>Credit</span> Profile" />
            <div className="card-container">
                <Card icon="smile_excelent" text="" twoWords={['Excellent', '720-More']} extraChipStyle="card-chip-add" active={cardActives[0].selected} handleClick={() => handleSelectCard(0)} />
                <Card icon="smile_good" text="" twoWords={['Good', '660-719']} extraChipStyle="card-chip-add" active={cardActives[1].selected} handleClick={() => handleSelectCard(1)} />
                <Card icon="smile_avg" text="" twoWords={['Avg.', '620-659']} extraChipStyle="card-chip-add" active={cardActives[2].selected} handleClick={() => handleSelectCard(2)} />
                <Card icon="smile_below" text="" twoWords={['Below Avg', '580-619']} extraChipStyle="card-chip-add" active={cardActives[3].selected} handleClick={() => handleSelectCard(3)} />
                <Card icon="smile_poor" text="" twoWords={['Poor', '579-Less']} extraChipStyle="card-chip-add" active={cardActives[4].selected} handleClick={() => handleSelectCard(4)} />
            </div>
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </div>
    )
})

export default StepCreditProfile
