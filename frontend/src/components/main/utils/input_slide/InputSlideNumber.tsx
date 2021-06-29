import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Slider, { Range } from 'rc-slider';
import { FormContext } from '../../../../store/form/formContext';

interface IProps {
    marks?: any
    min: number
    max: number
    range?: boolean
    value?: any
    field?: string
    percentaje?: boolean
    onlyPercentaje?: boolean
}

const InputSlideNumber: React.FC<IProps> = ({
    marks = [],
    min,
    max,
    range = false,
    value = null,
    field = '',
    percentaje = false,
    onlyPercentaje = false
}) => {

    const { updateForm, form: { estimated_value_property } } = useContext(FormContext);

    useEffect(() => {
        if (!range) {
            document.querySelectorAll('.rc-slider-handle.rc-slider-handle-1')[0].classList.add('hidden');
        }
    }, [])

    let initial = value;

    const [state, setState] = useState(initial)

    const handleChangeInput = (e: any) => {
        if (range) {
            updateForm({field, value : `${e[0]}-${e[1]}`})
            setState([e[0], e[1]])
        } else {
            updateForm({ field, value: e[1] })
            setState([0, e[1]])
        }
    }

    return (
        <div className="bg-gray-100 w-4/5 sm:w-3/5 lg:w-1/2 xl:w-1/3 rounded-lg shadow-md px-8 lg:px-20 pt-8 pb-20 mt-4 flex flex-col">
            {
                !onlyPercentaje ? (
                    percentaje ? ( range ? (<h2 className="font-mabry text-main mb-12 text-sm sm:text-lg lg:text-2xl">{state[0]} <span className="px-2">to</span> {state[1]}%</h2>)
                                : (<h2 className="font-mabry text-main mb-12 text-sm sm:text-lg lg:text-2xl">$ {( (estimated_value_property || 0) *(state[1] / 100)).toLocaleString('es-US')}</h2>)
                            ) 
                            : (  range ? (<h2 className="font-mabry text-main mb-12 text-sm sm:text-lg lg:text-2xl">$ {state[0].toLocaleString('es-US')} <span className="px-2">to</span> $ {state[1].toLocaleString('es-US')}</h2>)
                                      : <h2 className="font-mabry text-main mb-12 text-sm sm:text-lg lg:text-2xl">$ {state[1].toLocaleString('es-US')}</h2>
                                )
                ) : 
                (<h2 className="font-mabry text-main mb-12 text-sm sm:text-lg lg:text-2xl">{state[1]} %</h2>)
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

