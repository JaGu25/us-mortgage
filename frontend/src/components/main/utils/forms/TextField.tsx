
import React from 'react'

type inputType = 'text' | 'password' | 'email' | 'number'

interface ITextFieldProps {
    type?: inputType
    id: string,
    label?: string
    name: string
    errorMessage?: string
    isDisabled?: boolean
    value: string
    register?: any
    handleChange?: () => void
    extraStyle?: string
    placeHolder?: string
}

const TextField: React.FC<ITextFieldProps> = ({
    type = 'text',
    id,
    label = null,
    name,
    errorMessage,
    isDisabled = false,
    value,
    register = null,
    handleChange,
    extraStyle = '',
    placeHolder
}) => {

    const hasError: boolean = errorMessage !== undefined;

    return (
        <div className="form font-mabry w-8/12 sm:w-6/12 md:w-6/12 lg:w-1/5 main">
            {
                label && (<label className="block mb-3 text-base text-main" htmlFor={id}>{label}</label>)
            }
            {
                register ? (
                    <input
                        id={id}
                        type={type}
                        name={name}
                        disabled={isDisabled}
                        {...register(name)}
                        className={`input ${hasError && ('invalid')} ${extraStyle}`}
                        value={value}
                    />
                )
                    : (
                        <input
                            id={id}
                            type={type}
                            name={name}
                            disabled={isDisabled}
                            className={`input ${hasError && ('invalid')} ${extraStyle}`}
                            value={value}
                            placeholder={placeHolder}
                        />
                    )
            }
            <span className="text-red-500 block mt-2">{errorMessage}</span>
        </div>
    )
}

export default TextField