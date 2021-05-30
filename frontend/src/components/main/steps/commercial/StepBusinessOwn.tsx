import React, { useEffect, useImperativeHandle, useState } from 'react'
import Card from '../../utils/card/Card'
import Subtitle from '../../utils/texts/Subtitle'

const initial = [false, false, false, false, false];

const StepBusinessOwn = React.forwardRef<unknown>((props, ref: any) => {

    const [error, setError] = useState(false)
    const [cardActives, setCardsActives] = useState(initial)

    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            setError(false)
            const selected = cardActives.find(e => e === true)
            if (selected) {
                return true
            } else {
                setError(true)
                return false
            }
        }
    }));

    const handeleSelectCard = (selected: number) => {
        setError(false);
        let actives = [false, false, false, false, false]
        actives[selected] = true
        setCardsActives(actives)
    }

    return (
        <>
            <Subtitle text="What type of business do you own?" />
            <div className="card-container">
                <Card icon="solo_owner" text="Solo Proprietor" active={cardActives[0]} handleClick={() => handeleSelectCard(0)} />
                <Card icon="partnership" text="Partnership" active={cardActives[1]} handleClick={() => handeleSelectCard(1)} />
                <Card icon="limited_liability" text="" twoWords={['Limited Liability', 'Company (LLC)']} extraChipStyle="card-chip-add" active={cardActives[2]} handleClick={() => handeleSelectCard(2)} />
                <Card icon="corporation" text="C Corporation" active={cardActives[3]} handleClick={() => handeleSelectCard(3)} />
                <Card icon="commercial" text="S Corporation" active={cardActives[4]} handleClick={() => handeleSelectCard(4)} />
            </div>
            { error && (<span className="text-red-500 block mt-10 -mb-6 font-mabry">Please select an option</span>)}
        </>
    )
})

export default StepBusinessOwn
