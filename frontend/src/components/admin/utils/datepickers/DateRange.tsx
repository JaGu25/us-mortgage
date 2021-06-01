import moment from 'moment';
import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import { downloadInfo } from '../../../../helpers/commons';
import Button from '../buttons/Button';

interface IProps {
    type?: string,
    handleClose?: () => void
}

const DateRange: React.FC<IProps> = ({
    type = '',
    handleClose = () => (true),
}) => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showDownload, setShowDownload] = useState(false);
    const [dateSelected, setDataSelected] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    const handleSelect = ({ selection }: any) => {
        setDataSelected({
            ...dateSelected,
            startDate: selection.startDate,
            endDate: selection.endDate,
        })
    }

    const download = async () => {
        try {
            setSuccess(false);
            setLoading(true);
            let { startDate, endDate } = dateSelected;
            await downloadInfo(type, moment(startDate).format("DD-MM-YYYY"), moment(endDate).format("DD-MM-YYYY"))
            setSuccess(true);
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    const handleModalDownload = () => {
        setSuccess(false);
        setShowDownload(!showDownload);
    }

    return (
        <div>
            <div className="w-full md:w-1/2 lg:w-2/12 m-2">
                <Button
                    type="button"
                    text="Download Info"
                    isDisabled={loading}
                    isLoading={loading}
                    handleClick={handleModalDownload}
                />
            </div>
            {
                showDownload && (<div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div
                            className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-x-auto overflow-y-auto shadow-xl transform transition-all sm:my-8 sm:align-middle"
                            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center mb-3 underline">
                                            Please select a date range
                                    </h3>
                                        <div className="mt-6">
                                            <DateRangePicker
                                                ranges={[dateSelected]}
                                                onChange={handleSelect}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                {
                                    success && (<p className="border border-green-300 text-center bg-green-500 text-white rounded-md py-1 my-2 w-full">
                                        Downloaded successfully
                                    </p>)
                                }
                                <Button
                                    type="button"
                                    text="Download"
                                    isDisabled={loading}
                                    isLoading={loading}
                                    handleClick={download}
                                />
                            </div>
                            <span className="absolute top-4 right-4 cursor-pointer" onClick={() => handleModalDownload()}>
                                <i className="fas fa-times text-gray-500 hover:text-gray-700"></i>
                            </span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default DateRange
