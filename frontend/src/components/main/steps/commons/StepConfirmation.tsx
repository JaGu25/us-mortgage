import React, { useImperativeHandle, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../utils/buttons/Button';
import TextField from '../../utils/forms/TextField'

const StepConfirmation = React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)

    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <>
            <div className="flex flex-col items-center justify-center my-2 flex-wrap font-mabry -mt-10">
                <p className="mt-3">Your email address (testep@gmail.com) will be your Username.</p>
                <div className="grid grid-cols-2 gap-6 mt-6 mb-4 ">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox border-main border bg-gray-100 text-main" checked disabled />
                        <span className="ml-2">Cotains 1 Number</span>
                    </label>
                    <label className="flex items-center ml-4">
                        <input type="checkbox" className="form-checkbox border-main border bg-gray-100 text-main" checked disabled />
                        <span className="ml-2">Cotains 1 Number</span>
                    </label>
                    <label className="flex items-center ml-3">
                        <input type="checkbox" className="form-checkbox border-main border bg-gray-100 text-main" checked disabled />
                        <span className="ml-2">Cotains 1 Number</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox border-main border bg-gray-100 text-main" checked disabled />
                        <span className="ml-2">Cotains 1 Number</span>
                    </label>
                </div>
                <TextField type="password" label="Password" value="121" name="password01" id="password01" />
                <TextField type="password" label="Re-enter Password" value="121" name="password02" id="password02" />
                <div className="w-3/4 lg:w-1/2 mt-8 text-main font-light rounded-sm py-5 px-10" style={{ backgroundColor: "#e3e3e3" }}>
                    <label className="flex items-center ml-3">
                        <input type="checkbox" className="form-checkbox border-main border bg-gray-100 text-main" />
                        <span className="ml-2 text-lg">I agree that my data can be used for the purposes noted below.</span>
                    </label>
                    <p className="text-left ml-10 mt-2 text-sm">
                        By checking the box, you agree that we can share your personal data and contact info with
                        third parties like our mortgage partners, partner companies and affiliates.
                        You also agree that these parties can use your personal data and contact info for
                        marketing and analytic purposes, and to improve your experience.
                        </p>
                </div>
            </div>
        </>
    )
})

export default StepConfirmation
