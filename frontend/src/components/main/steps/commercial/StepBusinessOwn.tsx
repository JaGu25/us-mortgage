import React, { useImperativeHandle, useState } from 'react'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'

const StepBusinessOwn =  React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)
    
    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <Subtitle text="What type of business do you own?"/>
            <div className="card-container">
                <Card icon="refinance" text="Home Purchase" active={false} />
                <Card icon="refinance" text="Refinance" active={false} />
                <Card icon="commercial" text="Refinance" active={false} />
                <Card icon="refinance" text="Refinance" active={false} />
                <Card icon="refinance" text="Refinance" active={false} />
            </div>
        </>
    )
})

export default StepBusinessOwn
