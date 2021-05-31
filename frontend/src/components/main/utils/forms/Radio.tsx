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
            className={`${active ? "radio-active" : "radio"} w-9/12 sm:w-6/12 lg:w-1/4 xl:w-1/5 mx-8`}
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
