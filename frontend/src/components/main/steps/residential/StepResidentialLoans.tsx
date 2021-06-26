import React, { useState, useImperativeHandle, useContext, useEffect } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Card from '../../utils/card/Card'

const StepResidentialLoans = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { residential_loans } } = useContext(FormContext)

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState([
        { field: 'residential_loans', value: 'Home Purchase', selected: false },
        { field: 'residential_loans', value: 'Refinance', selected: false },
        { field: 'residential_loans', value: 'Cash Out', selected: false },
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
            <h3 className="text-main text-2xl lg:text-3xl font-gobold uppercase px-4 font-light mb-3">free <strong>quote</strong> for:</h3>
            <h2 className="text-main text-3xl lg:text-4xl font-gobold uppercase px-4 font-light"><strong>Residential</strong> Loans</h2>
            <div className="card-container">
                <Card icon="home" text="Home Purchase" active={cardActives[0].selected} handleClick={() => handleSelectCard(0)} />
                <Card icon="refinance" text="Refinance" active={cardActives[1].selected} handleClick={() => handleSelectCard(1)} />
                <Card icon="cash_out" text="Cash Out" active={cardActives[2].selected} handleClick={() => handleSelectCard(2)} />
            </div>
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})


export default StepResidentialLoans
