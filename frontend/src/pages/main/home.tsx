import React from 'react'
import Navbar from '../../components/main/layouts/Navbar'
import Button from '../../components/main/utils/buttons/Button'
import mainImg from './../../assets/imgs/main.png'

const Home: React.FC = () => {

    return (
        <div className="relative">
            <Navbar />
            <section className="container mx-auto flex flex-col-reverse lg:flex-row py-14 relative">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-main  text-3xl lg:text-7xl font-light tracking-widest text-center lg:text-left">
                        <span className="block">
                            <span className="font-semibold mr-4">
                                GET
                            </span>
                            YOUR
                            <span className="font-semibold ml-4">
                                LOANS,
                            </span>
                        </span>
                        <span className="block mt-4">
                            <span className="font-semibold mr-4">
                                ACHIEVE
                            </span>
                            YOUR
                        </span>
                        <span className="font-semibold block mt-4">
                            DREAMS
                        </span>
                    </h1>
                    <p className="text-seconday font-light py-12 px-8 text-center lg:text-left lg:pl-0 lg:pr-80 text-base lg:text-xl uppercase">At US Mortgage Wholesale, we strive to put our experience, knowledge,
                        and resources as our top priority serving our clients.</p>
                    <div className="text-center lg:text-left flex flex-col lg:flex-row px-10 lg:p-0">
                        <Button
                            text="RESIDENTIAL"
                            to="/form/residential"
                            icon="home"
                        />
                        <Button
                            text="COMMERCIAL"
                            to="/form/commercial"
                            icon="commercial"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 pb-8 lg:p-0">
                    <div className="border-4 border-shadow rounded-bl-4xl relative z-40 bg-white w-full">
                        <img src={mainImg} alt="Main Page" className="m-4 pr-8 w-full"/>
                    </div>
                </div>
            </section>
            <div className="absolute top-60 right-0  h-16 w-1/2 bg-shadow z-10 rounded-sm hidden lg:block"></div>
        </div>
    )
}

export default Home
