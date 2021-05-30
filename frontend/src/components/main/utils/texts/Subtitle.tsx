import React from 'react'

interface IProps {
    text: string
}

const Subtitle: React.FC<IProps> = ({
    text
}) => {
    return (
        <h2 className="font-mabry text-main text-2xl mb-10">
            {text}
        </h2>
    )
}

export default Subtitle
