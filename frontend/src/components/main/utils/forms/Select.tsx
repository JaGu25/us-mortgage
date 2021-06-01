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
            <select className={`select my-2 sm:w-6/12 md:w-5/12 lg:w-3/12 xl:w-2/12 ${extraStyle}`}
                style={{backgroundColor:"white"}}
                name={name}
                {...register(name)}
            >
                <option value="">{firstValue}</option>
                {
                    options.map((e) => (
                        <option value={e.value} key={e.key}>{e.value}</option>
                    ))
                }
            </select>
            <MessageError text={errorMessage || ''} />
        </>
    )
}

export default Select
