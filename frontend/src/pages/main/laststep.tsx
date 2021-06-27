import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Navbar from '../../components/main/layouts/Navbar'
import Card from '../../components/main/utils/card/Card'
import { FormContext } from '../../store/form/formContext'
import axios from "./../../config/axios"
import FooterForm from '../../components/main/layouts/FooterForm'

const LastStep: React.FC = () => {

    const { form } = useContext(FormContext)
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        if (form) {
            sendFormCompleted()
            const interval = setInterval(() => {
                history.push('/')
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
            <section className="container mx-auto text-center font-mabry my-14 lg:my-20">
                {
                    loading ? (
                        <div className="flex flex-col justify-center items-center h-80 md:h-52 lg:h-96">
                            <i className="fas fa-circle-notch fa-spin text-main text-7xl"></i>
                            <span className="font-mabry text-main text-2xl mt-2">Loading...</span>
                        </div>
                    )
                        : (<div className="flex flex-col justify-center items-center h-full">
                            <h2 className="text-main text-2xl lg:text-2xl font-bold px-4 mb-10 font-gobold uppercase">We <span className='text-2xl md:text-2xxl'>received</span> your inquiry</h2>
                            <Card icon="email" active={true} chip={false} extraCardStyle="px-3 py-3" />
                            <p className="mt-10 w-2/3 lg:w-2/6 text-center text-main font-light">
                                We will be calling you shortly.
                            </p>
                        </div>)
                }
            </section>
            <div className="mt-40">
                <FooterForm />
            </div>
        </>
    )
}

export default LastStep
