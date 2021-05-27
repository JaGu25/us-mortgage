import React from 'react'

interface ISocialMediaProps {
    href: string
    icon: string
}

const SocialMedia: React.FC<ISocialMediaProps> = ({
    href,
    icon
}) => {
    return (
        <a href={href}>
            <i className={`${icon} text-2xl md:text-3xl lg:text-4xl m-2`}></i>
        </a>
    )
}

export default SocialMedia
