import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Navbar from '../../components/main/layouts/Navbar'
import SocialMedia from '../../components/main/utils/buttons/SocialLink'
import Card from '../../components/main/utils/card/Card'
import { FormContext } from '../../store/form/formContext'
import axios from "./../../config/axios"
import poweredByImg from './../../assets/imgs/powered_by_02.png'
import Icons from '../../components/main/utils/icons/Icons'

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
                            <Card icon="email" active={true} chip={false} extraCardStyle="px-0 py-3" />
                            <p className="mt-10 w-2/3 lg:w-2/6 text-center text-main font-light">
                                We will be calling you shortly.
                            </p>
                        </div>)
                }
            </section>
            <div className="px-4 md:px-10 lg:px-20 flex justify-between items-center text-right mt-40">
                <div className="flex flex-col">
                    <span className="text-main font-light text-xs font-mabry text-left ml-2 tracking-wider">Follow Us</span>
                    <ul className="flex justify-evenly text-main items-center">
                        <li>
                            <SocialMedia icon="fab fa-facebook-square" href="https://www.facebook.com/usmortgagewholesale" />
                        </li>
                        <li>
                            <SocialMedia icon="fab fa-instagram" href="https://instagram.com/usmortgagewholesale?utm_medium=copy_link" />
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCEM7S6tis1WrjZ1VCcML30g" target="_blank">
                                <Icons icon="youtube" myStyle="fill-current text-main w-8 md:w-10 lg:w-12" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <span className="text-main font-light text-xs font-mabry text-left tracking-wider mb-0 md:mb-2">Powered by</span>
                    <img src={poweredByImg} alt="Powered By Next Mortgage" className="w-16 md:w-20 py-4 md:p-0" />
                </div>
            </div>
        </>
    )
}

export default LastStep
