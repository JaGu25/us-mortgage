import React, { useState } from 'react'
import { useEffect } from 'react';
import Slider, { Range } from 'rc-slider';

interface IProps {
    marks?: any,
    min: number,
    max: number,
    range: boolean
}

const InputSlideNumber: React.FC<IProps> = ({
    marks,
    min,
    max,
    range = false
}) => {

    useEffect(() => {
        if(!range) {
            document.querySelectorAll('.rc-slider-handle.rc-slider-handle-1')[0].classList.add('hidden');
        }
    }, [])
    const [state, setState] = useState([0, 0])

    const handleChangeInput = (e: any) => {
        if (range) {
            setState([e[0], e[1]])
        } else {
            setState([0, e[1]])
        }
    }

    return (
        <div className="bg-gray-100 w-4/5 sm:w-3/5 lg:w-1/2 xl:w-1/3 rounded-lg shadow-md px-8 lg:px-20 pt-8 pb-20 mt-4 flex flex-col">
            {
                range ? (<h2 className="font-mabry text-main mb-12 text-sm sm:text-lg lg:text-2xl">$ {state[0].toLocaleString('es-US')} <span className="px-2">to</span> $ {state[1].toLocaleString('es-US')}</h2>)
                    : <h2 className="font-mabry text-main mb-12 text-sm sm:text-lg lg:text-2xl">$ {state[1].toLocaleString('es-US')}</h2>
            }
            <Range
                min={min}
                max={max}
                marks={marks}
                draggableTrack
                step={null}
                dots={false}
                onChange={handleChangeInput}
                value={state}
                dotStyle={{ display: "none" }}
                handleStyle={[{
                    backgroundColor: "#1f284c",
                    border: "#1f284c",
                    boxShadow: "none"
                }, {
                    backgroundColor: "#1f284c",
                    border: "#1f284c",
                    boxShadow: "none"
                }]}
                trackStyle={[{
                    backgroundColor: "#1f284c"
                }]}
                activeDotStyle={{ backgroundColor: "#1f284c" }}
            />
        </div>
    )
}

export default InputSlideNumber

