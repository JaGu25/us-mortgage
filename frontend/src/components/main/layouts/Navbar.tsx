import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from './../../../assets/imgs/logo.png'

const Navbar: React.FC = () => {

    const handleMenu = () => {
        const menu = document.getElementById('menu');
        menu?.classList.toggle('menu-active');
        menu?.classList.toggle('menu');
    }

    return (
        <div className="font-light">
            <div className="mx-auto pt-8">
                <nav className="flex items-center sm:flex-row justify-between pt-4 pb-1">
                    <div className="flex justify-center items-center lg:items-start w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/5 ml-0 sm:-ml-7 lg:ml-0">
                        <div className="h-12 w-1/4 flex-1 lg:w-20 xl:w-full bg-gradient rounded-sm"></div>
                        <Link to='/'>
                            <img src={logoImg} alt="Logo US Mortgage" className="w-48 sm:48 mx-4 inline-block -mt-3 sm:mr-2 sm:-mt-6 lg:-mt-3 xl:-mr-5" />
                        </Link>
                    </div>
                    <div className="bg-main w-1/3 sm:w-2/3 h-12 relative block lg:hidden">
                        {/* <div onClick={() => handleMenu()} className="cursor-pointer" >
                            <i className="fas fa-bars absolute text-white top-0 text-2xl right-5"></i>
                            <span className="absolute text-white top-7 text-xs font-light" style={{ right: "18px" }}>MENU</span>
                        </div> */}
                    </div>
                    <div className="bg-main py-3 px-0 w-full hidden lg:block sm:flex-1 rounded-sm h-auto sm:h-12 ml-0 sm:ml-8">
                        {/* <ul className="uppercase flex flex-col  sm:flex-row items-center sm:justify-evenly text-white">
                            <li className="py-2 sm:py-0"><a href="#">Residential Loans</a></li>
                            <li className="py-2 sm:py-0"><a href="#">Business Loans</a></li>
                            <li className="py-2 sm:py-0"><a href="#">Rates</a></li>
                            <li className="py-2 sm:py-0"><a href="#">Learning Center</a></li>
                            <li className="py-2 sm:py-0"><a href="#">Mortgage Tools</a></li>
                        </ul> */}
                    </div>
                </nav>
                <div id="menu" className="bg-main menu px-0 w-full rounded-sm ml-0 lg:ml-8 lg:hidden">
                    <ul className="uppercase flex flex-col lg:flex-row items-center lg:justify-evenly text-white">
                        <li className="py-2 lg:py-0"><a href="#">Residential Loans</a></li>
                        <li className="py-2 lg:py-0"><a href="#">Business Loans</a></li>
                        <li className="py-2 lg:py-0"><a href="#">Rates</a></li>
                        <li className="py-2 lg:py-0"><a href="#">Learning Center</a></li>
                        <li className="py-2 lg:py-0"><a href="#">Mortgage Tools</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Navbar
