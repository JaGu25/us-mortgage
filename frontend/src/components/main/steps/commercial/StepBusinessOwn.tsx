import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'



const StepBusinessOwn = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { business_own } } = useContext(FormContext)

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState([
        { field: 'business_own', value: 'solo_owner', selected: false },
        { field: 'business_own', value: 'partnership', selected: false },
        { field: 'business_own', value: 'limited_liability', selected: false },
        { field: 'business_own', value: 'corporation', selected: false },
        { field: 'business_own', value: 'commercial', selected: false }
    ])

    useEffect(() => {
        if(business_own != ''){
            setCardsActives(cardActives.map((e) => e.value === business_own ? { ...e, selected: true } : e))
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
            <Subtitle text="What type of business do you own?" />
            <div className="card-container">
                <Card icon="solo_owner" text="Solo Proprietor" active={cardActives[0].selected} handleClick={() => handleSelectCard(0)} />
                <Card icon="partnership" text="Partnership" active={cardActives[1].selected} handleClick={() => handleSelectCard(1)} />
                <Card icon="limited_liability" text="" twoWords={['Limited Liability', 'Company (LLC)']} extraChipStyle="card-chip-add" active={cardActives[2].selected} handleClick={() => handleSelectCard(2)} />
                <Card icon="corporation" text="C Corporation" active={cardActives[3].selected} handleClick={() => handleSelectCard(3)} />
                <Card icon="commercial" text="S Corporation" active={cardActives[4].selected} handleClick={() => handleSelectCard(4)} />
            </div>
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepBusinessOwn
