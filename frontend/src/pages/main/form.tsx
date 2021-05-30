import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Navbar from '../../components/main/layouts/Navbar'
import Button from '../../components/main/utils/buttons/Button'
import ProgressBar from '../../components/main/utils/progressbar/ProgressBar'
import { ISteps } from '../../helpers/interfaces'
import { CommercialSteps, ResidentialSteps } from '../../helpers/type_steps'

type TypeSteps = 'residential' | 'commercial'

interface TypeForm {
    type: TypeSteps
}

interface ICurrentStep {
    step: number,
    stepObject: ISteps
}

const Form: React.FC = () => {

    const [stepper, setStepper] = useState<ISteps[]>([]);
    const [currentStep, setCurrentStep] = useState<ICurrentStep>();
    const [percentaje, setPercentaje] = useState(0);
    const { type }: TypeForm = useParams();
    const history = useHistory()
    const refStep = React.createRef();

    useEffect(() => {
        switch (type) {
            case 'commercial':
                setStepper(CommercialSteps)
                setCurrentStep({ step: 0, stepObject: CommercialSteps[0] })
                break;
            case 'residential':
                setStepper(ResidentialSteps)
                setCurrentStep({ step: 0, stepObject: ResidentialSteps[0] })
                break;
            default:
                history.push('/')
        }
    }, [])

    const changeCurrentStep = (changeStep: number) => {
        let step: number = currentStep?.step || 0;
        const length: number = stepper.length;
        if ((step + changeStep) != length) {
            if (changeStep > 0) {
                if (isCurrentStepValid()) {
                    setCurrentStep({ step: (step + changeStep), stepObject: stepper[(step + changeStep)] });
                    let change = stepper.map((e, i) => (i === step ? { ...e, isCompleted: true } : e));
                    setStepper(change);
                    calculatePercentaje(change);
                }
            } else {
                setCurrentStep({ step: (step + changeStep), stepObject: stepper[(step + changeStep)] });
            }
        } else {
            history.push('/endform')
        }
    }

    const calculatePercentaje = (steppers: any = null): void => {
        if (steppers) {
            const length: number = stepper.length;
            const stepsCompleted = steppers.filter((e: ISteps) => e.isCompleted === true).length;
            setPercentaje(parseInt(((stepsCompleted / length) * 100).toFixed(2)));
        }
    }

    const isCurrentStepValid = (): boolean => {
        {/*// @ts-ignore */ }
        return refStep.current.validateStep();
    }

    const StepComponent = () => {
        const StepComponent = currentStep?.stepObject.component;
        return <StepComponent ref={refStep} />;
    }

    return (
        <>
            <Navbar />
            {
                currentStep && (
                    <section className="container mx-auto text-center py-8" style={{ height: "calc(100vh - 250px)"}}>
                        {
                            (currentStep.stepObject.showProgressBar && (<ProgressBar percentaje={percentaje} />))
                        }
                        {
                            (<div className="mt-8 lg:mt-4 flex flex-col items-center justify-center px-4" style={{minHeight: "50%"}}>
                                {StepComponent()}
                            </div>)
                        }
                        <div className="mt-16 pb-4 flex flex-col items-center" style={{minHeight: "25%"}}>
                            <Button
                                text="NEXT"
                                handleClick={() => changeCurrentStep(1)}
                                extraStyle="py-2 px-16"
                            />
                            {
                                currentStep.step !== 0 &&
                                (<button onClick={() => changeCurrentStep(-1)}
                                    className="text-seconday font-mabry text-base underline block focus:outline-none">
                                    Go back
                                </button>)
                            }
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default Form
