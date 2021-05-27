import React from 'react'
import SocialMedia from '../utils/buttons/SocialLink'
import logoImg from './../../../assets/imgs/logo.png'

const Navbar: React.FC = () => {
    return (
        <div className="font-light">
            <div className="container mx-auto px-4 lg:p-0">
                <nav className="flex justify-between items-center py-4">
                    <img src={logoImg} alt="Logo US Mortgage" className="w-36 lg:w-60" />
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
            <div className="bg-main py-3">
                <div className="container mx-auto">
                    <a href="#" className="text-gray-200 ml-4 lg:m-0 text-base lg:text-xl">APPLY NOW</a>
                </div>
            </div>
        </div>

    )
}

export default Navbar
