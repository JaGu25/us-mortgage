import React from 'react'
import { ISelectProps } from './../../../../helpers/interfaces'

const Select: React.FC<ISelectProps> = ({
    options,
    extraStyle = '',
    firstValue
}) => {
    return (
        <select className={`select my-2 ${extraStyle}`}>
            <option value="default" selected>{firstValue}</option>
            {
                options.map((e) => (
                    <option value={e.key}>{e.value}</option>
                ))
            }
        </select>
    )
}

export default Select
