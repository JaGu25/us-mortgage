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
            <Subtitle text="<span class='text-2xl md:text-2xxl'>home</span> description" />
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
