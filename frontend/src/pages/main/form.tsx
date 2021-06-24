import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Navbar from '../../components/main/layouts/Navbar'
import Button from '../../components/main/utils/buttons/Button'
import ProgressBar from '../../components/main/utils/progressbar/ProgressBar'
import { ISteps } from '../../helpers/interfaces'
import { CommercialSteps, ResidentialSteps, LOAN_BUSINESS } from '../../helpers/type_steps'
import { FormContext } from '../../store/form/formContext'

type TypeSteps = 'residential' | 'commercial' | 'loan_business'

interface TypeForm {
    type: TypeSteps
}

interface ICurrentStep {
    step: number,
    stepObject: ISteps
}

const Form: React.FC = () => {

    const [stepper, setStepper] = useState<ISteps[]>([])
    const [currentStep, setCurrentStep] = useState<ICurrentStep>()
    const [percentaje, setPercentaje] = useState(0)
    const { type }: TypeForm = useParams();
    const history = useHistory()
    const refStep = React.createRef()
    const { updateForm, resetForm } = useContext(FormContext)

    useEffect(() => {
        resetForm();
        updateForm({ field: 'type', value: type })
        switch (type) {
            case 'commercial':
                setStepper(CommercialSteps)
                setCurrentStep({ step: 0, stepObject: CommercialSteps[0] })
                break;
            case 'residential':
                setStepper(ResidentialSteps)
                setCurrentStep({ step: 0, stepObject: ResidentialSteps[0] })
                break;
            case 'loan_business':
                setStepper(LOAN_BUSINESS)
                setCurrentStep({ step: 0, stepObject: LOAN_BUSINESS[0] })
                break
            default:
                history.push('/')
        }
    }, [])

    const changeCurrentStep = async (changeStep: number) => {
        let step: number = currentStep?.step || 0;
        const length: number = stepper.length;
        if (changeStep > 0) {
            if (await isCurrentStepValid()) {
                if ((step + changeStep) != length) {
                    setCurrentStep({ step: (step + changeStep), stepObject: stepper[(step + changeStep)] });
                    let change = stepper.map((e, i) => (i === step ? { ...e, isCompleted: true } : e));
                    setStepper(change);
                    calculatePercentaje(change);
                }
                else {
                    history.push('/endform')
                }
            }
        } else {
            let change = stepper.map((e, i) => (i === (step + changeStep) ? { ...e, isCompleted: false } : e));
            setStepper(change);
            calculatePercentaje(change);
            setCurrentStep({ step: (step + changeStep), stepObject: stepper[(step + changeStep)] });
        }
    }

    const calculatePercentaje = (steppers: any = null): void => {
        if (steppers) {
            const length: number = stepper.length;
            const stepsCompleted = steppers.filter((e: ISteps) => e.isCompleted === true).length;
            setPercentaje(parseInt(((stepsCompleted / length) * 100).toFixed(2)));
        }
    }

    const isCurrentStepValid = async (): Promise<boolean> => {
        {/*// @ts-ignore */ }
        return await refStep.current.validateStep(currentStep.stepObject.showNextButton);
    }

    const StepComponent = () => {
        const StepComponent = currentStep?.stepObject.component;
        return <StepComponent ref={refStep} changeCurrentStep={changeCurrentStep} />;
    }

    return (
        <>
            <Navbar />
            {
                currentStep && (
                    <section className="container mx-auto text-center py-8" style={{ height: "calc(100vh - 250px)" }}>
                        {
                            (currentStep.stepObject.showProgressBar && (<ProgressBar percentaje={percentaje} />))
                        }
                        {
                            (<div className="mt-8 lg:mt-4 flex flex-col items-center justify-center px-4 relative" style={{ minHeight: currentStep.stepObject.showProgressBar ? "50%" : "75%" }}>
                                {StepComponent()}
                                {currentStep.step !== 0 && (<i className="fas fa-arrow-left absolute left-4 md:left-8 lg:left-20 xl:left-40 cursor-pointer text-main text-2xl" onClick={() => changeCurrentStep(-1)}></i>)}
                            </div>)
                        }
                        <div className="mt-16 pb-4 flex flex-col items-center" style={{ minHeight: "25%" }}>
                            {
                                (currentStep.stepObject.showNextButton && (<Button
                                    text="NEXT"
                                    handleClick={() => changeCurrentStep(1)}
                                    extraStyle="py-2 px-16"
                                />))
                            }
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default Form
