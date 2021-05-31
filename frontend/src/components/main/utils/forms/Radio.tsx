import React from 'react'

interface IRadioProps {
    active?: boolean
    text: string
    handleClick?: () => void
}

const Radio:React.FC<IRadioProps> = ({
    active = false,
    text,
    handleClick 
}) => {
    return (
        <div 
            className={ active ? "radio-active" : "radio"}
            onClick={handleClick}
        >
            {
                active ? (<i className="fas fa-circle text-xs mr-3 text-white"></i>)
                : ( <i className="far fa-circle text-xs mr-3"></i>)
            }           
            <span className="text-left">{text}</span>
        </div>
    )
}

export default Radio
