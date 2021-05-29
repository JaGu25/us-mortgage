import React from 'react'
import Navbar from '../../components/main/layouts/Navbar'
import Card from '../../components/main/utils/card/Card'

interface Props {

}

const LastStep = (props: Props) => {
    return (
        <>
            <Navbar />
            <section className="container mx-auto text-center py-12 lg:py-24 font-mabry">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-main text-3xl lg:text-3xl font-mabry font-bold px-4 mb-10">Please Verify Your Email Address</h2>
                    <Card icon="email" active={true} chip={false} extraCardStyle="px-0 py-3" />
                    <p className="mt-10 w-2/3 lg:w-2/6 text-center text-main font-light">We’ve sent you an email, verify your email 
                    <span className="font-bold"> albitestapia25@gmail.com</span> address. 
                    Just click the button in the email to finish creating your account. 
                    If you don't receive the email, please check your spam or junk folder.
                    </p>
                </div>
            </section>
        </>
    )
}

export default LastStep
