import React from 'react'

interface IProps {
    text: string
}

const Subtitle: React.FC<IProps> = ({
    text
}) => {
    return (
        <h2 className="font-gobold text-main text-xl lg:text-2xl my-8 uppercase font-light" dangerouslySetInnerHTML={{ __html: text }}></h2>
    )
}

export default Subtitle
