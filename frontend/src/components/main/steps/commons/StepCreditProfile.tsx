import React, { useImperativeHandle, useState } from 'react'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'

const StepCreditProfile = React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)

    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    return (
        <div>
            <Subtitle text="Your Credit Profile" />
            <div className="card-container">
                <Card icon="smile_excelent" text="" twoWords={['Excellent', '720+']} extraChipStyle="card-chip-add" active={false} />
                <Card icon="smile_good" text="" twoWords={['Good', '660-719']} extraChipStyle="card-chip-add" active={false} />
                <Card icon="smile_avg" text="" twoWords={['Avg.', '620-659']} extraChipStyle="card-chip-add" active={false} />
                <Card icon="smile_below" text="" twoWords={['Below Avg', '580-619']} extraChipStyle="card-chip-add" active={false} />
                <Card icon="smile_poor" text="" twoWords={['Poor', '>580']} extraChipStyle="card-chip-add" active={false} />
            </div>
        </div>
    )
})

export default StepCreditProfile
