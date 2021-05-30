import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Navbar from '../../components/main/layouts/Navbar'
import Card from '../../components/main/utils/card/Card'
import { FormContext } from '../../store/form/formContext'

const LastStep: React.FC = () => {

    const { form: { completed, email } } = useContext(FormContext)
    const [loading, setLoading] = useState(true);
    const history = useHistory()

    useEffect(() => {
        if (completed) {
            setTimeout(() => {
                setLoading(false)
            }, 2500);
        } else {
            history.push('/')
        }
    }, [])

    return (
        <>
            <Navbar />
            <section className="container mx-auto text-center font-mabry my-14 lg:my-20">
                {
                    loading ? (
                        <div className="flex flex-col justify-center items-center h-80 md:h-52 lg:h-96">
                            <i className="fas fa-circle-notch fa-spin text-main text-7xl"></i>
                            <span className="font-mabry text-main text-2xl mt-2">Loading...</span>
                        </div>
                    )
                        : (<div className="flex flex-col justify-center items-center h-full">
                            <h2 className="text-main text-3xl lg:text-3xl font-mabry font-bold px-4 mb-10">Please Verify Your Email Address</h2>
                            <Card icon="email" active={true} chip={false} extraCardStyle="px-0 py-3" />
                            <p className="mt-10 w-2/3 lg:w-2/6 text-center text-main font-light">We’ve sent you an email, verify your email
                            <span className="font-bold"> {email}</span> address.
                            Just click the button in the email to finish creating your account.
                            If you don't receive the email, please check your spam or junk folder.
                            </p>
                        </div>)
                }
            </section>
        </>
    )
}

export default LastStep
