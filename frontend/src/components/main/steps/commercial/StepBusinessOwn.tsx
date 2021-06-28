import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormContext } from '../../../../store/form/formContext'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'

const StepBusinessOwn = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { business_own } } = useContext(FormContext)
    let params: any = useParams();

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState([
        { field: 'business_own', value: 'Solo Proprietor', selected: false },
        { field: 'business_own', value: 'Partnership', selected: false },
        { field: 'business_own', value: 'Limited Liability Company (LLC)', selected: false },
        { field: 'business_own', value: 'C Corporation', selected: false },
        { field: 'business_own', value: 'S Corporation', selected: false }
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
            {  (params.type == "free_quote_business") && (<h3 className="text-main text-2xl lg:text-3xl font-gobold uppercase px-4 font-light mb-3">free <strong>quote</strong> for:</h3>) }
            <h2 className="font-gobold text-main text-2xl lg:text-4xl mb-2 lg:mt-2 uppercase font-light"><span className="font-bold">BUSINESS</span> LOANS</h2>
            <Subtitle text="What type of <span class='text-2xl md:text-2xxl'>business</span> do you own?" />
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
