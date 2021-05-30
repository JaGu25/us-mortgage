import React, { MouseEvent } from 'react'
import Icons from '../icons/Icons'
import { iconType } from './../../../../helpers/interfaces';

interface ICardProps {
    icon: iconType
    active: boolean
    text?: string
    extraChipStyle?: string
    extraCardStyle?: string
    chip?: boolean
    twoWords?: string[]
}

const Card: React.FC<ICardProps> = ({
    icon,
    text = '',
    active = false,
    extraChipStyle = '',
    extraCardStyle = '',
    chip = true,
    twoWords = null
}) => {

    const setActiveHover = (e: MouseEvent<HTMLElement>) => {
        if (!active) {
            e.currentTarget.classList.add('card-active');
        }
    }

    const setInactiveHover = (e: MouseEvent<HTMLElement>) => {
        if (!active) {
            e.currentTarget.classList.remove('card-active');
        }
    }

    return (
        <div className={`card ${active ? 'card-active' : ''} ${extraCardStyle}`}
            onMouseEnter={setActiveHover}
            onMouseLeave={setInactiveHover}
        >
            <Icons
                icon={icon}
                myStyle="fill-current w-28 text-main active"
            />
            {
                chip && (
                    <span className={`card-chip active ${extraChipStyle}`}>
                        {
                            twoWords ? (
                                <>
                                    <span className="block">{twoWords[0]}</span>
                                    {twoWords[1]}
                                </>
                            ) : (<>{text}</>)
                        }
                    </span>
                )
            }
        </div>
    )
}

export default Card
