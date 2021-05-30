import React, { useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'

const StepAnnualRevenue =  React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)
    
    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <h2 className="text-main lg:text-3xl font-mabry uppercase font-normal px-4 mb-20">Business Loans</h2>
            <Subtitle text="Whats's your annual revenue?"/>
            <TextField id="annual_revenue" name="annual_revenue" type="number"  value="1"  />
        </>
    )
})

export default StepAnnualRevenue
