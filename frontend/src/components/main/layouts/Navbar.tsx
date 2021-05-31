import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from '../utils/buttons/SocialLink'
import logoImg from './../../../assets/imgs/logo.png'

const Navbar: React.FC = () => {
    return (
        <div className="font-light">
            <div className="bg-myred py-3 px-0 lg:px-4 xl:px-0">
                <div className="container mx-auto flex justify-end">
                    <Link to='/' className="text-gray-200 text-base lg:text-xl mx-3 my-1">APPLY NOW</Link>
                    <a href="#" className="text-gray-200 text-base lg:text-xl mx-3 my-1">LOG IN</a>
                    <a href="tel:720 675 7757" className="text-gray-200  text-base lg:text-xl mx-3 my-1">720 675 7757</a>
                </div>
            </div>
            <div className="container mx-auto px-4 lg:p-0">
                <nav className="flex px-0 lg:px-4 xl:px-0 justify-between items-center py-4">
                    <Link to='/'>
                        <img src={logoImg} alt="Logo US Mortgage" className="w-36 lg:w-60" />
                    </Link>
                    <ul className="flex justify-evenly">
                        <li>
                            <SocialMedia icon="fab fa-facebook-square" href="https://fontawesome.com/v5.15/icons/youtube?style=brands" />
                        </li>
                        <li>
                            <SocialMedia icon="fab fa-instagram" href="https://fontawesome.com/v5.15/icons/youtube?style=brands" />
                        </li>
                        <li>
                            <SocialMedia icon="fab fa-youtube-square" href="https://fontawesome.com/v5.15/icons/youtube?style=brands" />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="bg-main py-3 px-0 lg:px-4 xl:px-0 h-12"></div>
        </div>

    )
}

export default Navbar
