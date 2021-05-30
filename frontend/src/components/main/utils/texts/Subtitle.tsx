import React from 'react'

interface IProps {
    text: string
}

const Subtitle: React.FC<IProps> = ({
    text
}) => {
    return (
        <h2 className="font-mabry text-main text-xl lg:text-2xl mb-4 mt-4">
            {text}
        </h2>
    )
}

export default Subtitle
