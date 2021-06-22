import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Footer from '../../components/main/layouts/Footer'
import Navbar from '../../components/main/layouts/Navbar'
import Card from '../../components/main/utils/card/Card'
import bgImg0 from './../../assets/imgs/bg-0.png'
import bgImg1 from './../../assets/imgs/bg-1.png'
import bgImg2 from './../../assets/imgs/bg-2.png'
import familyImg from './../../assets/imgs/family.png'

const Home: React.FC = () => {

    const bg: string[] = [bgImg0, bgImg1, bgImg2];
    let [indexBg, setIndexBg] = useState(0);
    const history = useHistory()

    useEffect(() => {
        const interval = setInterval(() => {
            indexBg++;
            setIndexBg(indexBg);
            if (indexBg > 2) {
                setIndexBg(0);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [indexBg]);

    const handleInitFlow = (flow: string) => {
        history.push(`/form/${flow}`)
    }

    return (
        <div>
            <div className="relative bg-cover bg-no-repeat bg-bottom min-height transition-all duration-300 ease-in-out" style={{ backgroundImage: `url('${bg[indexBg]}')` }}>
                <Navbar />
                <section className="container mx-auto flex flex-col lg:flex-row relative mt-0 lg:px-20 xl:mt-4">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-main  text-3xl lg:text-5xl xl:text-7xl font-light tracking-wider text-center lg:text-left">
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
                        <p className="text-white font-light py-4 px-8 text-center lg:text-left lg:pl-0 lg:pr-16 xl:pr-72 text-base lg:text-xl uppercase text-shadow">At US Mortgage Wholesale, we strive to put our experience, knowledge,
                        and resources as our top priority serving our clients.</p>
                    </div>
                    <div className="w-full lg:w-1/2 h-full flex flex-col lg:flex-row justify-end my-8 lg:my-0">
                        <div className="text-center">
                            <h2 className="text-myred uppercase text-base">GET YOUR FREE QUOTE</h2>
                            <div className="flex justify-center">
                                <Card icon="home" text="Residential" active={false} extraCardStyle="w-28 p-4" extraChipStyle="text-xs text-center" extraIconStyle="w-20" handleClick={() => handleInitFlow('commercial')}/>
                                <Card icon="commercial" text="Business" active={false} extraCardStyle="w-28 p-4" extraChipStyle="text-xs text-center" extraIconStyle="w-20" handleClick={() => handleInitFlow('commercial')}/>
                            </div>
                        </div>
                        <div className="text-center">
                            <h2 className="text-myred uppercase text-base">GET YOUR LOAN</h2>
                            <div className="flex justify-center">
                                <Card icon="home" text="Residential" active={false} extraCardStyle="w-28 p-4" extraChipStyle="text-xs text-center" extraIconStyle="w-20" handleClick={() => handleInitFlow('commercial')}/>
                                <Card icon="commercial" text="Residential" active={false} extraCardStyle="w-28 p-4" extraChipStyle="text-xs text-center" extraIconStyle="w-20" handleClick={() => handleInitFlow('commercial')}/>
                            </div>
                        </div>
                    </div>
                </section>
                <img src={familyImg} alt="Family" className="hidden lg:block absolute w-1/4 bottom-0 left-1/2" />
            </div>
            <Footer />
        </div>
    )
}

export default Home
