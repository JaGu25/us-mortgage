import React, { MouseEvent } from 'react'
import Icons from '../icons/Icons'
import { iconType } from './../../../../helpers/interfaces';

interface ICardProps {
    icon: iconType
    text: string
    active: boolean
    extraChipStyle?: string
    chip?: boolean
}

const Card: React.FC<ICardProps> = ({
    icon,
    text,
    active = false,
    extraChipStyle = '',
    chip = true
}) => {

    const setActiveHover = (e: MouseEvent<HTMLElement>) => {
        e.currentTarget.classList.add('card-active');
    }

    const setInactiveHover = (e: MouseEvent<HTMLElement>) => {
        e.currentTarget.classList.remove('card-active');
    }

    return (
        <div className={`card ${active ? 'card-active' : ''}`}
            onMouseEnter={setActiveHover}
            onMouseLeave={setInactiveHover}
        >
            <Icons
                icon={icon}
                style="fill-current w-28 text-main active"
            />
            {
                chip && (<span className={`card-chip active ${extraChipStyle}`}>
                    {text}
                </span>)
            }
        </div>
    )
}

export default Card
