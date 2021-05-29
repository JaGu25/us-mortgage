import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/main/layouts/Navbar'
import Button from '../../components/main/utils/buttons/Button'
import Radio from '../../components/main/utils/forms/Radio'
import Select from '../../components/main/utils/forms/Select'
import ProgressBar from '../../components/main/utils/progressbar/ProgressBar'
import { IOption } from './../../helpers/interfaces'

const Form4 = () => {

    const options: IOption[] = [
    {
        key: 'expansion',
        value: 'Expansion'
    },
    {
        key: 'inventory',
        value: 'Inventory'
    }
    ]

    return (
        <>
            <Navbar />
            <section className="container mx-auto text-center py-12 lg:py-24">
                <ProgressBar percentaje={70} />
                <h3 className="text-main font-mabry font-normal text-lg mt-10 -mb-2">Home Description</h3>
                <div className="flex flex-col items-center justify-center my-12 lg:mt-24 flex-wrap">
                    <Radio text="3 - 6 Months" />
                    <Radio text="3 - 6 Months" active={true} />
                    <Select options={options}/>
                </div>
                <div className="mt-12 lg:mt-16">
                    <Button
                        text="NEXT"
                        extraStyle="py-2 px-16"
                        to="/form5"
                    />
                    <Link to="/form3" className="text-seconday font-mabry text-base underline block">Go back</Link>
                </div>
            </section>
        </>
    )
}

export default Form4
