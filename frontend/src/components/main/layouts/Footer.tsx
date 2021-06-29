import React from 'react'
import SocialMedia from '../utils/buttons/SocialLink'
import Icons from '../utils/icons/Icons'
import poweredByImg from './../../../assets/imgs/powered_by.png'

const Footer: React.FC = () => {
    return (
        <div
            className="bg-main my-auto w-full flex md:flex-row justify-evenly items-center md:justify-between px-2 md:px-40 py-0 font-light tracking-widest"
        >
            <ul className="flex justify-evenly text-white items-center">
                <li>
                    <SocialMedia icon="fab fa-facebook-square" href="https://www.facebook.com/usmortgagewholesale" />
                </li>
                <li>
                    <SocialMedia icon="fab fa-instagram" href="https://instagram.com/usmortgagewholesale?utm_medium=copy_link" />
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCEM7S6tis1WrjZ1VCcML30g" target="_blank">
                        <Icons icon="youtube" myStyle="fill-current text-white w-8 lg:w-12" />
                    </a>
                </li>
                <li className="hidden lg:block">
                    <a href="tel:720 675 7757" className='text-base lg:text-xl ml-4'>720 675 7757</a>
                </li>
            </ul>
            <a href="tel:720 675 7757" className='text-base block lg:hidden lg:text-xl ml-4 text-white'>720 675 7757</a>
            <img src={poweredByImg} alt="Powered By Next Mortgage" className="w-20 ml-3 lg:ml-0 lg:w-20 py-4 lg:py-0 md:p-0" />
        </div>

    )
}

export default Footer
