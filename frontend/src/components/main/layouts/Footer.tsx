import React from 'react'
import SocialMedia from '../utils/buttons/SocialLink'
import poweredByImg from './../../../assets/imgs/powered_by.png'

const Footer: React.FC = () => {
    return (
        <div
            className="bg-main my-auto w-full flex flex-col md:flex-row justify-center items-center md:justify-between px-12 md:px-40 py-6 md:py-3 font-light tracking-widest"
        >
            <ul className="flex justify-evenly text-white items-center">
                <li>
                    <SocialMedia icon="fab fa-facebook-square" href="https://www.facebook.com/usmortgagewholesale" />
                </li>
                <li>
                    <SocialMedia icon="fab fa-instagram" href="https://instagram.com/usmortgagewholesale?utm_medium=copy_link" />
                </li>
                <li>
                    <SocialMedia icon="fab fa-youtube-square" href="https://www.youtube.com/channel/UCEM7S6tis1WrjZ1VCcML30g" />
                </li>
                <li>
                    <a href="tel:720 675 7757" className='text-xl ml-6'>720 675 7757</a>
                </li>
            </ul>
            <img src={poweredByImg} alt="Powered By Next Mortgage" className="w-24 py-4 md:p-0" />
        </div>

    )
}

export default Footer
