import React, { useState, useImperativeHandle } from 'react'
import Card from '../../utils/card/Card'

const StepResidentialLoans =  React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)
    
    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <h2 className="text-main text-3xl lg:text-5xl font-mabry uppercase font-bold px-4">Residential Loans</h2>
            <div className="card-container">
                <Card icon="home" text="Home Purchase" active={false} />
                <Card icon="refinance" text="Refinance" active={false} />
            </div>
        </>
    )
})


export default StepResidentialLoans
