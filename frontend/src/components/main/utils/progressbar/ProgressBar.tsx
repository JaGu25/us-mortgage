import React from 'react'

interface IProgressBarProps {
    percentaje?: number
}

const ProgressBar: React.FC<IProgressBarProps> = ({
    percentaje = 0
}) => {
    return (
        <div className="relative flex flex-col items-center justify-center" style={{minHeight: "25%"}}>
            <p className="font-gobold my-1 text-xl">{percentaje}%</p>
            <div className="w-3/4 lg:w-2/5 overflow-hidden h-7 mb-1 text-xs flex rounded-sm" style={{ backgroundColor: "#e3e3e3" }}>
                <div style={{ width: `${percentaje}%` }} 
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-main transition-all ease-in-out duration-1000">
                </div>
            </div>
            <div className="w-3/4 lg:w-2/5 overflow-hidden h-1 mb-1 text-xs flex rounded-sm" style={{ backgroundColor: "#e3e3e3" }}>
                <div style={{ width: `${percentaje}%` }} 
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-main transition-all ease-in-out duration-1000">
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
