import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Navbar from '../../components/main/layouts/Navbar'
import Card from '../../components/main/utils/card/Card'
import { FormContext } from '../../store/form/formContext'
import axios from "./../../config/axios"
import FooterForm from '../../components/main/layouts/FooterForm'
import Button from '../../components/main/utils/buttons/Button'

const LastStepFinal: React.FC = () => {

    const { form } = useContext(FormContext)
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        if (form) {
            sendFormCompleted()
            const interval = setInterval(() => {
                // history.push('/')
            }, 5000);
            setLoading(false)
            return () => clearInterval(interval);
        } else {
            history.push('/')
        }
    }, [])

    const sendFormCompleted = async () => {
        try {
            await axios().post('/apply/form', { ...form });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <section className="container mx-auto text-center font-gobold my-14 lg:my-20">
                {
                    loading ? (
                        <div className="flex flex-col justify-center items-center h-80 md:h-52 lg:h-96">
                            <i className="fas fa-circle-notch fa-spin text-main text-7xl"></i>
                            <span className="font-mabry text-main text-2xl mt-2">Loading...</span>
                        </div>
                    )
                    : (
                        <div className="flex flex-col justify-center items-center font-mabry font-light">
                            <div className="text-center lg:text-left w-80 lg:w-96 mt-28">
                                <h2 className="font-gobold font-bold text-2xl">CONGRATULATIONS!</h2>
                                <p className="text-main my-4 font-mabry">You are getting closer to receiving your customized tailored loan.</p>
                                <p className="text-main my-4 font-mabry">The button "Next" will take you to fill out the application in our secure
                                    and encrypted server.
                                </p>
                                <p className="text-main my-4 font-mabry">
                                    Please proceed to receive your custom tailored.
                                </p>
                            </div>
                            <Button
                                text="NEXT"
                                extraStyle="py-2 px-16 mt-12 font-gobold"
                            />
                        </div>
                    )
                }
            </section>
            <div className="mt-40">
                <FooterForm />
            </div>
        </>
    )
}

export default LastStepFinal
