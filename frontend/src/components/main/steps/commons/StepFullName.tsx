import React, { useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'

const StepFullName =  React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)
    
    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <TextField id="first_name" name="first_name" label="First Name" type="text"  value=""/>
            <TextField id="last_name" name="last_name" label="Last Name" type="text"  value=""/>
        </>
    )
})

export default StepFullName
