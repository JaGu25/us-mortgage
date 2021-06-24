import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from './../../../assets/imgs/logo.png'

const Navbar: React.FC = () => {
    return (
        <div className="font-light">
            <div className="mx-auto pt-8">
                <nav className="flex flex-col items-center md:flex-row justify-between py-4">
                    <div className="flex justify-center items-center w-full md:w-1/5">
                        <div className="h-12 lg:w-20 xl:w-full bg-gradient rounded-sm"></div>
                        <Link to='/'>
                            <img src={logoImg} alt="Logo US Mortgage" className="w-40 md:w-full mx-4 inline-block -mt-10 md:-mt-6" />
                        </Link>
                    </div>
                    <div className="bg-main py-3 px-0 w-full md:flex-1 rounded-sm h-auto md:h-12 ml-0 md:ml-8">
                        <ul className="uppercase flex flex-col md:flex-row items-center md:justify-evenly text-white">
                            <li className="py-2 md:py-0"><a href="#">Residential Loans</a></li>
                            <li className="py-2 md:py-0"><a href="#">Business Loans</a></li>
                            <li className="py-2 md:py-0"><a href="#">Rates</a></li>
                            <li className="py-2 md:py-0"><a href="#">Learning Center</a></li>
                            <li className="py-2 md:py-0"><a href="#">Mortgage Tools</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default Navbar
