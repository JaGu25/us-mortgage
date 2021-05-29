import React from 'react'
import { ISelectProps } from './../../../../helpers/interfaces'

const Select: React.FC<ISelectProps> = ({
    options
}) => {
    return (
        <select className="font-mabry w-1/2 lg:w-1/5 border-main border rounded-md py-2 px-6 focus:outline-none focus:ring-1 focus:border-gray-100 my-1">
            <option value="default" selected>Select One</option>
            {
                options.map((e) => (
                    <option value={e.key}>{e.value}</option>
                ))
            }
        </select>
    )
}

export default Select
