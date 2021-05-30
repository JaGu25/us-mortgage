import React, { useState, useImperativeHandle, useContext, useEffect } from 'react'
import { FormContext } from '../../../../store/form/formContext'
import Card from '../../utils/card/Card'

const StepResidentialLoans = React.forwardRef<unknown>((props, ref: any) => {

    const { updateForm, form: { residential_loans } } = useContext(FormContext)

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState([
        { field: 'residential_loans', value: 'home_purchase', selected: false },
        { field: 'residential_loans', value: 'refinance', selected: false },
    ])

    useEffect(() => {
        if (residential_loans != '') {
            setCardsActives(cardActives.map((e) => e.value === residential_loans ? { ...e, selected: true } : e))
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
        <>
            <h2 className="text-main text-3xl lg:text-5xl font-mabry uppercase font-bold px-4">Residential Loans</h2>
            <div className="card-container">
                <Card icon="home" text="Home Purchase" active={cardActives[0].selected} handleClick={() => handeleSelectCard(0)} />
                <Card icon="refinance" text="Refinance" active={cardActives[1].selected} handleClick={() => handeleSelectCard(1)} />
            </div>
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})


export default StepResidentialLoans
