import React, { useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'

const StepEmailAddress =  React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)
    
    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <TextField id="email" name="email" label="Email Address" type="email"  value=""/>
        </>
    )
})

export default StepEmailAddress
