import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Footer from '../../components/main/layouts/Footer'
import Navbar from '../../components/main/layouts/Navbar'
import Card from '../../components/main/utils/card/Card'
import bgImg0 from './../../assets/imgs/bg-0.png'
import bgImg1 from './../../assets/imgs/bg-1.png'
import bgImg2 from './../../assets/imgs/bg-2.png'
import bgImgMb0 from './../../assets/imgs/bg-0-mb.png'
import bgImgMb1 from './../../assets/imgs/bg-1-mb.png'
import bgImgMb2 from './../../assets/imgs/bg-2-mb.png'
import familyImg from './../../assets/imgs/family.png'

const Home: React.FC = () => {

    const bg: string[] = [bgImg0, bgImg1, bgImg2];
    const bgMb: string[] = [bgImgMb0, bgImgMb1, bgImgMb2];
    let [indexBg, setIndexBg] = useState(0);
    const history = useHistory()

    const x = window.matchMedia("(max-width: 820px)")

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

    const handleInitFlow = (flow: string, externalLink = '') => {
        if (externalLink.length > 0) {
            window.open(externalLink)
            return
        }
        history.push(`/form/${flow}`)
    }

    return (
        <>
            <div className="relative bg-cover bg-no-repeat bg-top lg:bg-bottom min-height transition-all duration-300 ease-in-out lazy" style={{ backgroundImage: `url('${x.matches ? bgMb[indexBg] : bg[indexBg]}')` }}>
                <Navbar />
                <section className="container mx-auto flex flex-col-reverse sm:items-center lg:items-start lg:flex-row relative mt-0 lg:px-20 xl:mt-2">
                    <div className="w-full lg:w-1/2 px-10 sm:px-40 sm:mt-4 lg:px-0 text-left sm:text-center lg:text-left">
                        <h1 className="text-main hidden lg:block text-3xl lg:text-5xl xl:text-7xl font-light tracking-wider text-center lg:text-left mt-8">
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
                        <h1 className="text-main lg:hidden text-3xl font-light tracking-wider mt-3">
                            <strong>GET</strong> YOUR <strong>LOANS,  ACHIEVE</strong> YOUR <strong>DREAMS</strong>
                        </h1>
                        <p className="text-main lg:text-white font-light py-4 lg:pl-0 lg:pr-16 xl:pr-40 text-xs lg:text-xl uppercase text-shadow">At US Mortgage Wholesale, we strive to put our experience, knowledge,
                            and resources as our top priority serving our clients.</p>
                    </div>
                    <div className="w-full px-6 lg:w-1/2 h-full flex flex-row sm:flex-col sm:items-center justify-center lg:flex-row lg:justify-end mt-3 lg:mt-6 sm:mt-10">
                        <div className="text-center w-1/2">
                            <h2 className="text-myred uppercase text-base -mb-2">GET YOUR FREE QUOTE</h2>
                            <div className="flex justify-center">
                                <Card icon="home" text="Residential" active={false} extraCardStyle="w-16 md:w-20 xl:w-28 py-2 my-5 mx-0 px-1" extraChipStyle="text-xss text-center min-width-chip" extraIconStyle="w-16 lg:w-20" handleClick={() => handleInitFlow('free_quote_residential')} />
                                <Card icon="commercial" text="Business" active={false} extraCardStyle="w-16 md:w-20 xl:w-28 py-2 my-5 px-1" extraChipStyle="text-xss text-center min-width-chip" extraIconStyle="w-20" handleClick={() => handleInitFlow('free_quote_business')} />
                            </div>
                        </div>
                        <div className="text-center w-1/2">
                            <h2 className="text-myred uppercase text-base -mb-2">GET YOUR LOAN</h2>
                            <div className="flex justify-center">
                                <Card icon="home" text="Residential" active={false} extraCardStyle="w-16 md:w-20 xl:w-28 py-2 my-5 mx-0 px-1" extraChipStyle="text-xss text-center min-width-chip" extraIconStyle="w-20" handleClick={() => handleInitFlow('residential', "https://www.blink.mortgage/app/signup/p/nexamortgagey/raulcorrea?campaign=rcorrea")} />
                                <Card icon="commercial" text="Business" active={false} extraCardStyle="w-16 md:w-20 xl:w-28 py-2 my-5 px-1" extraChipStyle="text-xss text-center min-width-chip" extraIconStyle="w-20" handleClick={() => handleInitFlow('loan_business', "")} />
                            </div>
                        </div>
                    </div>
                </section>
                <img src={familyImg} alt="Family" className="lg:block absolute w-2/3 sm:w-1/2 md:w-4/12  lg:w-1/4 bottom-0 left-12 sm:left-32 md:left-56 lg:left-1/2" />
            </div>
            <Footer />
        </>
    )
}

export default Home
