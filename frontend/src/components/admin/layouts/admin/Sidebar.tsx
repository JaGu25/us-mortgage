import React from 'react'
import { NavLink } from 'react-router-dom'
import Icons from '../../../main/utils/icons/Icons'
import LogoImg from './../../../../assets/imgs/logo.png'

interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Sidebar: React.FC<Props> = ({ isOpen, setIsOpen }) => {

    return (
        <div className="flex">

            <div

                className={`${isOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`}
                onClick={() => setIsOpen(false)}

            ></div>

            <div
                className={`${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}

            >
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center">
                        <img src={LogoImg} alt="Logo" className="w-40" />
                    </div>
                </div>

                <nav className="mt-10">
                    <NavLink
                        activeClassName="active-className"
                        className="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-400 hover:bg-opacity-25 hover:text-gray-100"
                        to={"/admin"}

                    >
                        <Icons icon="yes" myStyle="fill-current text-gray-500 w-8" />
                        <span className="mx-4">Home</span>
                    </NavLink>
                </nav>
                <nav className="mt-4">
                    <NavLink
                        activeClassName="active-className"
                        className="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-400 hover:bg-opacity-25 hover:text-gray-100"
                        to={"/admin/residential"}

                    >
                        <Icons icon="home" myStyle="fill-current text-gray-500 w-8" />
                        <span className="mx-4">Residential</span>
                    </NavLink>
                </nav>
                <nav className="mt-4">
                    <NavLink
                        activeClassName="active-className"
                        className="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-400 hover:bg-opacity-25 hover:text-gray-100"
                        to={"/admin/commercial"}

                    >
                        <Icons icon="commercial" myStyle="fill-current text-gray-500 w-8" />
                        <span className="mx-4">Commercial</span>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
