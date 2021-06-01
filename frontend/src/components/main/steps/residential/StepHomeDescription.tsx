import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'

const StepHomeDescription = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { home_description } } = useContext(FormContext)

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState([
        { field: 'home_description', value: 'Single Family', selected: false },
        { field: 'home_description', value: 'Multi Family', selected: false },
        { field: 'home_description', value: 'Condominium', selected: false },
        { field: 'home_description', value: 'Townhouse', selected: false }
    ])

    useEffect(() => {
        if(home_description != ''){
            setCardsActives(cardActives.map((e) => e.value === home_description ? { ...e, selected: true } : e))
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
            <Subtitle text="Home Description" />
            <div className="card-container">
                <Card icon="home" text="Single Family" active={cardActives[0].selected} handleClick={() => handleSelectCard(0)} />
                <Card icon="multi_family" text="Multi Family" active={cardActives[1].selected} handleClick={() => handleSelectCard(1)} />
                <Card icon="condominium" text="Condominium" active={cardActives[2].selected} handleClick={() => handleSelectCard(2)} />
                <Card icon="townhouse" text="Townhouse" active={cardActives[3].selected} handleClick={() => handleSelectCard(3)} />
            </div>
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepHomeDescription
