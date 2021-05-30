import React, { useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'

const StepNameBusiness =  React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)
    
    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <h2 className="text-main lg:text-3xl font-mabry uppercase font-normal px-4 mb-20">Business Loans</h2>
            <Subtitle text="What's the name of your business"/>
            <TextField id="business_name" name="business_name" type="text"  value="1"  />
        </>
    )
})

export default StepNameBusiness
