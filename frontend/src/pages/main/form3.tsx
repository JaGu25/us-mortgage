import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/main/layouts/Navbar'
import Button from '../../components/main/utils/buttons/Button'
import Card from '../../components/main/utils/card/Card'
import TextField from '../../components/main/utils/forms/TextField'
import ProgressBar from '../../components/main/utils/progressbar/ProgressBar'

const Form3 = () => {

    return (
        <>
            <Navbar />
            <section className="container mx-auto text-center py-12 lg:py-24">
                <ProgressBar percentaje={50}/>
                <div className="flex flex-col items-center justify-center sm:flex-row my-12 lg:mt-24 flex-wrap">
                    <TextField id="textt" name="texto" label="Email Address" type="email"  value="textio"/>
                </div>
                <div className="mt-12 lg:mt-16">
                    <Button
                        text="NEXT"
                        extraStyle="py-2 px-16"
                        to="/form4"
                    />
                    <Link to="/form2" className="text-seconday font-mabry text-base underline block">Go back</Link>
                </div>
            </section>
        </>
    )
}

export default Form3
