import React, { useImperativeHandle, useState } from 'react'
import { IOption } from '../../../../helpers/interfaces'
import Select from '../../utils/forms/Select'
import Subtitle from '../../utils/texts/Subtitle'

const StepFinanceFor = React.forwardRef<unknown>((props, ref: any) => {

    const [stateIsValid, setStateIsValid] = useState(false)

    useImperativeHandle(ref, () => ({
        validateStep: (): boolean => {
            return true
        }
    }));

    const options: IOption[] = [
        { key: 'expansion', value: 'Expansion' },
        { key: 'equipment_purchase', value: 'Equipatment purchase' },
        { key: 'inventory', value: 'Inventory' },
        { key: 'payroll', value: 'Payroll' },
        { key: 'marketing', value: 'Marketing' },
        { key: 'commercial_real_state', value: 'Commercial real state' },
        { key: 'remotel_my_location', value: 'Remodel my location' },
        { key: 'refinance_debt', value: 'Refinance Debt' },
        { key: 'finance_accounts_recivable', value: 'Finance Accounts Receivable' },
        { key: 'buy_business_franchise', value: 'Buy a business/Franchise' },
        { key: 'start_business', value: 'Start a Business' },
    ]

    return (
        <>
            <h2 className="title-3">Business Loans</h2>
            <Subtitle text="What are you getting financing for?" />
            <Select firstValue="Select one" options={options} extraStyle="lg:w-2/12" />
            <p className="font-mabry text-main font-light text-base mt-5">Please select your purpose</p>
        </>
    )
})

export default StepFinanceFor
