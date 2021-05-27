import React from 'react'
import { Link } from 'react-router-dom'

type buttonType = 'submit' | 'button'

interface IButtonProps {
  type?: buttonType
  text: string
  to?: string
  isDisabled?: boolean
  handleClick?: () => void
  isLoading?: boolean
}

const Button: React.FC<IButtonProps> = ({
    type = 'button',
    text,
    to,
    handleClick,
    isDisabled,
    isLoading = false
}) => {

    if (to !== undefined) {
        return <Link to={to} className="btn-main">{text}</Link>
    }

    return (
        <button
            type={type}
            className="btn-main" 
            disabled={isDisabled}
            >
            {text}
            {
                isLoading && (<i className="fas fa-spinner fa-spin ml-2"></i>)
            }
        </button>
    )
}

export default Button
