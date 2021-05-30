import React from 'react'

interface IProps {
    text: string
}

const MessageError: React.FC<IProps> = ({
    text
}) => {
    return (
        <span className="text-red-500 block my-2 font-mabry">{text}</span>
    )
}

export default MessageError
