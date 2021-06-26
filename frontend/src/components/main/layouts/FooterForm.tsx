import React from 'react'
import SocialMedia from '../utils/buttons/SocialLink'
import Icons from '../utils/icons/Icons'
import poweredByImg from './../../../assets/imgs/powered_by_02.png'

const FooterForm: React.FC = () => {
    return (
        <div className="px-4 md:px-10 lg:px-20 flex justify-between items-center text-right">
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
    )
}

export default FooterForm
