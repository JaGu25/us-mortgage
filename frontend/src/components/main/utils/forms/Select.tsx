import React from 'react'
import MessageError from '../texts/MessageError'
import { ISelectProps } from './../../../../helpers/interfaces'

const Select: React.FC<ISelectProps> = ({
    options,
    name,
    extraStyle = '',
    firstValue,
    errorMessage,
    register
}) => {

    return (
        <>
            <select className={`select my-2 w-8/12 sm:w-6/12 ${extraStyle}`}
                name={name}
                {...register(name)}
            >
                <option value="">{firstValue}</option>
                {
                    options.map((e) => (
                        <option value={e.key} key={e.key}>{e.value}</option>
                    ))
                }
            </select>
            <MessageError text={errorMessage || ''} />
        </>
    )
}

export default Select
