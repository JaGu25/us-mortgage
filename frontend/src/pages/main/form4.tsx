import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/main/layouts/Navbar'
import Button from '../../components/main/utils/buttons/Button'
import Card from '../../components/main/utils/card/Card'
import ProgressBar from '../../components/main/utils/progressbar/ProgressBar'

const Form4 = () => {

    return (
        <>
            <Navbar />
            <section className="container mx-auto text-center py-12 lg:py-24">
                <ProgressBar percentaje={50}/>
                <h3 className="text-main font-mabry font-normal text-lg mt-10 -mb-20">Home Description</h3>
               
                <div className="mt-12 lg:mt-16">
                    <Button
                        text="NEXT"
                        extraStyle="py-2 px-16"
                    />
                    <Link to="/form3" className="text-seconday font-mabry text-base underline block">Go back</Link>
                </div>
            </section>
        </>
    )
}

export default Form4
