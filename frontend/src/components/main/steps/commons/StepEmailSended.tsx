import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FormContext } from '../../../../store/form/formContext'
import Button from '../../utils/buttons/Button'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'


const StepEmailSended = React.forwardRef<unknown>((props, ref: any) => {

    const history = useHistory()

    const handleLastStep = () => {
        history.push('/endform02')
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center h-full">
                <h2 className="text-main text-2xl lg:text-2xl font-bold px-4 mb-4 font-gobold uppercase">We <span className='text-2xl md:text-2xxl'>received</span> your inquiry</h2>
                <Card icon="email" active={true} chip={false} extraCardStyle="px-3 py-3" />
                <p className="mt-4 text-center text-main font-light">
                    WHILE YOU WAIT FOR YOUR FREE ONE-ON-ONE CONSULTATION. <br></br>
                    PLEASE, WATCH THE 1 MINUTE VIDEO BELOW.
                </p>
                <div className="w-72 sm:w-96 lg:w-104 bg-white h-80 mt-6 border-4 border-gray-300 rounded-tl-3xl my-12 relative z-10">
                    <iframe width="100%" height="100%" className="rounded-tl-3xl"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <div className="absolute w-1/3 sm:1/5 lg:w-1/5 h-1/2 bg-main -right-4 -bottom-4 -z-10 rounded-br-2xl"></div>
                </div>
                <Button
                    handleClick={() => handleLastStep()}
                    text="NEXT"
                    extraStyle="py-2 px-16 mt-12"
                />
            </div>
        </>
    )
})

export default StepEmailSended
