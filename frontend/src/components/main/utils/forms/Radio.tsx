import React, { MouseEvent, useState } from 'react'

interface IRadioProps {
    active?: boolean
    text: string
    handleClick?: () => void
    custom?: boolean

}

const Radio: React.FC<IRadioProps> = ({
    text,
    handleClick,
    custom = false
}) => {

    const [state, setstate] = useState(false)

    const setActiveHover = (e: MouseEvent<HTMLElement>) => {
        setstate(true);
    }

    const setInactiveHover = (e: MouseEvent<HTMLElement>) => {
        setstate(false);
    }

    return (
        <div
            className={`${state ? "radio-active" : "radio"} w-9/12 sm:w-6/12 lg:w-1/4 xl:w-1/5`}
            onClick={handleClick}
            onMouseEnter={setActiveHover}
            onMouseLeave={setInactiveHover}
        >
            {
                !custom && (state ? (<i className="fas fa-circle text-xs mr-3 text-white"></i>)
                    : (<i className="far fa-circle text-xs mr-3 text-main"></i>))
            }
            <span className={`${!custom ? "text-left" : "text-center w-full"} ${state ? 'text-white' : 'text-main'}`}>{text}</span>
        </div>
    )
}

export default Radio
