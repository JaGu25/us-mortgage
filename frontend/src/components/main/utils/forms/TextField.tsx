
import React from 'react'
import MessageError from '../texts/MessageError';

type inputType = 'text' | 'password' | 'email' | 'number'

interface ITextFieldProps {
    type?: inputType
    id: string,
    label?: string
    name: string
    errorMessage?: string
    isDisabled?: boolean
    value?: string
    register?: any
    handleChange?: () => void
    extraStyle?: string
    placeHolder?: string
    icon?: string
    max_length?: string
}

const TextField: React.FC<ITextFieldProps> = ({
    type = 'text',
    id,
    label = null,
    name,
    errorMessage,
    isDisabled = false,
    register = null,
    value,
    handleChange,
    extraStyle = '',
    placeHolder,
    icon
}) => {

    const hasError: boolean = errorMessage !== undefined;

    return (
        <div className="form font-mabry w-8/12 sm:w-6/12 md:w-6/12 lg:w-1/5 main relative my-2">
            {
                label && (<label className="block mb-3 text-base text-main font-gobold" htmlFor={id}>{label}</label>)
            }
            {
                register ? (
                    <input
                        id={id}
                        type={type}
                        name={name}
                        disabled={isDisabled}
                        {...register(name)}
                        placeholder={placeHolder}
                        className={`input ${hasError && ('invalid')} ${extraStyle}`}
                        style={{ paddingLeft: `${icon && ("1.5rem")}` }}
                        value={value}
                    />
                )
                    : (
                        <input
                            id={id}
                            type={type}
                            name={name}
                            disabled={isDisabled}
                            placeholder={placeHolder}
                            className={`input ${hasError && ('invalid')} ${extraStyle}`}
                            style={{ paddingLeft: `${icon && ("1.5rem")}` }}
                        />
                    )
            }
            {
                icon && (<i className={`fas ${icon} absolute left-2 top-2 text-main`}></i>)
            }
            <MessageError text={errorMessage || ''} />
        </div>
    )
}

export default TextField