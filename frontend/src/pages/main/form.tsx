import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/main/layouts/Navbar'
import Button from '../../components/main/utils/buttons/Button'
import Card from '../../components/main/utils/card/Card'

const Form = () => {

    return (
        <>
            <Navbar />
            <section className="container mx-auto text-center py-12 lg:py-24">
                <h2 className="text-main text-3xl lg:text-5xl font-mabry uppercase font-bold px-4">Residential Loans</h2>
                <div className="flex flex-col items-center justify-center sm:flex-row my-12 lg:mt-24 flex-wrap">
                    <Card icon="refinance" text="Home Purchase" active={false} />
                    <Card icon="refinance" text="Refinance" active={false} />
                    <Card icon="commercial" text="Refinance" active={false} />
                    <Card icon="refinance" text="Refinance" active={false} />
                    <Card icon="refinance" text="Refinance" active={false} />
                </div>
                <div className="mt-12 lg:mt-20">
                    <Button
                        text="NEXT"
                        to="/form2"
                        extraStyle="py-2 px-16"
                    />
                    <Link to="/" className="text-seconday font-mabry text-base underline block">Go back</Link>
                </div>
            </section>
        </>
    )
}

export default Form
