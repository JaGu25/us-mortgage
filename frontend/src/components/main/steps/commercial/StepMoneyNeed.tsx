import React, { useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'

const StepMoneyNeed =  React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)
    
    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <h2 className="title-3">Business Loans</h2>
            <Subtitle text="How much money do you need?"/>
            <TextField id="way_reach_you" name="way_reach_you" type="text"  value="1"  />
        </>
    )
})

export default StepMoneyNeed
