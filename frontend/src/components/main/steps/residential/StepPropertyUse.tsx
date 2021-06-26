import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'

const StepPropertyUse = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { property_use } } = useContext(FormContext)

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState([
        { field: 'property_use', value: 'Primary Residence', selected: false },
        { field: 'property_use', value: 'Secondary Home', selected: false },
        { field: 'property_use', value: 'Investment Property', selected: false },
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
            <Subtitle text="<span class='text-2xl md:text-2xxl'>property</span> use" />
            <div className="card-container">
                <Card icon="primary_residence" text="" twoWords={['Primary', 'Residence']} extraChipStyle="card-chip-add" active={cardActives[0].selected} handleClick={() => handleSelectCard(0)} />
                <Card icon="secondary_home" text="" twoWords={['Secondary', 'Home']} extraChipStyle="card-chip-add" active={cardActives[1].selected} handleClick={() => handleSelectCard(1)} />
                <Card icon="invesment_property" text="" twoWords={['Investment', 'Property']} extraChipStyle="card-chip-add" active={cardActives[2].selected} handleClick={() => handleSelectCard(2)} />
            </div>
            {error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepPropertyUse
