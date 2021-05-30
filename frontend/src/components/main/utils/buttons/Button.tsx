import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../icons/Icons'
import { iconType } from './../../../../helpers/interfaces';

type buttonType = 'submit' | 'button'

interface IButtonProps {
    type?: buttonType
    text: string
    to?: string
    isDisabled?: boolean
    handleClick?: () => void
    isLoading?: boolean
    icon?: iconType
    extraStyle?: string
}

const Button: React.FC<IButtonProps> = ({
    type = 'button',
    text,
    to,
    handleClick,
    isDisabled,
    isLoading = false,
    icon,
    extraStyle
}) => {

    if (to !== undefined) {
        return (
            <Link to={to} className={`btn-main inline-block justify-around  ${extraStyle}`}>
                <span className="flex items-center ">
                    {icon !== undefined && (<Icons icon={icon} myStyle="w-12 fill-current text-white mr-2" />)}
                    {text}
                </span>
            </Link>
        )
    }

    return (
        <button
            type={type}
            className={`btn-main ${extraStyle}`}
            disabled={isDisabled}
            onClick={handleClick}
        >
            {text}
            {
                isLoading && (<i className="fas fa-spinner fa-spin ml-2"></i>)
            }
        </button>
    )
}

export default Button
