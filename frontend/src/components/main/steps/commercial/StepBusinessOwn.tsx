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
            <div className="flex flex-col items-center justify-center sm:flex-row my-12 lg:mt-8 flex-wrap">
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
