import React from 'react'

interface IRadioProps {
    active?: boolean
    text: string
}

const Radio:React.FC<IRadioProps> = ({
    active = false,
    text
}) => {
    return (
        <div className={ active ? "radio-active" : "radio"}>
            {
                active ? (<i className="fas fa-circle text-xs mr-3 text-white"></i>)
                : ( <i className="far fa-circle text-xs mr-3"></i>)
            }           
            <span>{text}</span>
        </div>
    )
}

export default Radio
