import React, { useImperativeHandle, useState } from 'react'
import TextField from '../../utils/forms/TextField'
import Subtitle from '../../utils/texts/Subtitle'

const StepBestWayReachYou =  React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)
    
    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <Subtitle text="What's the best way to reach you?"/>
            <div className="flex w-full justify-center items-center">
                <div className="border-main border px-1 rounded-md -mt-2 mr-1 ">
                    <i className="fas just fa-mobile-alt text-2xl text-main"></i>
                </div>
                <TextField id="way_reach_you" name="way_reach_you" type="text"  value="" placeHolder="+51 92311232"  />
            </div>
        </>
    )
})

export default StepBestWayReachYou
