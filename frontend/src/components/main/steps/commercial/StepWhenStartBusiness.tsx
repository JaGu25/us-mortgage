import React, { useImperativeHandle, useState } from 'react'
import { monthsOptions, yearOptions } from '../../../../helpers/commons'
import { IOption } from '../../../../helpers/interfaces'
import Select from '../../utils/forms/Select'
import Subtitle from '../../utils/texts/Subtitle'

const StepWhenStartBusiness = React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)

    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <h2 className="text-main lg:text-3xl font-mabry uppercase font-normal px-4 mb-20">Business Loans</h2>
            <Subtitle text="When did you start your business?" />
            <div className="flex flex-col lg:flex-row justify-center w-3/4 lg:w-1/4">
                <div className="w-full lg:w-1/2 mx-2"><Select options={monthsOptions} firstValue="Months" extraStyle="w-full" /></div>
                <div className="w-full lg:w-1/2 mx-2"><Select options={yearOptions()} firstValue="Year" extraStyle="w-full" /></div>
            </div>
            <p className="font-mabry text-main font-light text-base mt-5">(Use acquisition date if not founder)</p>
        </>
    )
})

export default StepWhenStartBusiness
