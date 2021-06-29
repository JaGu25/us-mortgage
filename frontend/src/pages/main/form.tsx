import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import FooterForm from '../../components/main/layouts/FooterForm'
import Navbar from '../../components/main/layouts/Navbar'
import Button from '../../components/main/utils/buttons/Button'
import ProgressBar from '../../components/main/utils/progressbar/ProgressBar'
import { ISteps } from '../../helpers/interfaces'
import {
    LOAN_BUSINESS,
    FREE_QUOTE_BUSINESS,
    FREE_QUOTE_RESIDENTIAL,
    FREE_QUOTE_RESIDENTIAL_CASH_OUT,
    FREE_QUOTE_RESIDENTIAL_PRIMARY,
    FREE_QUOTE_RESIDENTIAL_SECONDARY
} from '../../helpers/type_steps'
import { FormContext } from '../../store/form/formContext'

type TypeSteps = 'free_quote_residential' | 'loan_business' | 'free_quote_business'

interface TypeForm {
    type: TypeSteps
}

interface ICurrentStep {
    step: number,
    stepObject: ISteps
}

const Form: React.FC = () => {

    const [stepper, setStepper] = useState<ISteps[]>([])
    const { form } = useContext(FormContext)
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
            case 'free_quote_residential':
                setStepper(FREE_QUOTE_RESIDENTIAL)
                setCurrentStep({ step: 0, stepObject: FREE_QUOTE_RESIDENTIAL[0] })
                break;
            case 'free_quote_business':
                setStepper(FREE_QUOTE_BUSINESS)
                setCurrentStep({ step: 0, stepObject: FREE_QUOTE_BUSINESS[0] })
                break
            case 'loan_business':
                setStepper(LOAN_BUSINESS)
                setCurrentStep({ step: 0, stepObject: LOAN_BUSINESS[0] })
                break
            default:
                history.push('/')
        }
    }, [])

    useEffect(() => {
        let step: number = currentStep?.step || 0;
        if (stepper.length > 0) {
            if (stepper[step].field == 'residential_loans') {
                if (form.residential_loans != '') {
                    changeFlow(step, 1);
                }
            } else {
                if (form.property_use != '') {
                    changeFlow(step, 1);
                }
            }
        }
    }, [form.residential_loans, form.property_use])

    const changeCurrentStep = async (changeStep: number) => {
        let step: number = currentStep?.step || 0;
        const length: number = stepper.length;
        if (changeStep > 0) {
            if (await isCurrentStepValid()) {
                if ((step + changeStep) != length) {
                    if (!stepper[step].customWay) {
                        setCurrentStep({ step: (step + changeStep), stepObject: stepper[(step + changeStep)] });
                        let change = stepper.map((e, i) => (i === step ? { ...e, isCompleted: true } : e));
                        setStepper(change);
                        calculatePercentaje(change);
                    }
                }
                else {
                    history.push('/endform')
                }
            }
        } else {
            updateForm({ field: stepper[(step + changeStep)].field, value: '' });
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

    const changeFlow = (step: number, changeStep: number) => {

        let aux = [...stepper];

        if (stepper[step].field == 'residential_loans') {
            if (form.residential_loans == "Home Purchase") {
                aux = [...FREE_QUOTE_RESIDENTIAL];
            }
            if (form.residential_loans == "Refinance" || form.residential_loans == "Cash Out") {
                aux = [...FREE_QUOTE_RESIDENTIAL_CASH_OUT];;
            }
        } else {
            if (form.residential_loans == "Home Purchase" && form.property_use == "Primary Home") {
                aux = [...FREE_QUOTE_RESIDENTIAL_PRIMARY]
            }
            if (form.residential_loans == "Home Purchase" && (form.property_use == "Secondary Home" || form.property_use == "Investment Property")) {
                aux = [...FREE_QUOTE_RESIDENTIAL_SECONDARY]
            }
        }

        setCurrentStep({ step: (step + changeStep), stepObject: aux[(step + changeStep)] });
        let change = aux.map((e, i) => (i <= step ? { ...e, isCompleted: true } : e));
        setStepper(change);
        calculatePercentaje(change);
    }

    return (
        <>
            <Navbar />
            {
                currentStep && (
                    <section className="container mx-auto text-center py-8 relative" style={{ minHeight: "720px" }}>
                        {
                            (currentStep.stepObject.showProgressBar && (<ProgressBar percentaje={percentaje} />))
                        }
                        {
                            (<div className={`mt-8 lg:mt-10 flex flex-col items-center justify-center px-8 lg:px-4 relative ${!currentStep.stepObject.showNextButton && ('pb-24 lg::pb-0')}`}
                                style={{ minHeight: currentStep.stepObject.showProgressBar ? "50%" : "75%" }}>
                                {StepComponent()}
                            </div>)
                        }
                        {
                            (currentStep.stepObject.showNextButton && (
                                <div className="mt-16 pb-4 flex flex-col items-center" style={{ minHeight: "25%" }}>
                                    <Button
                                        text="NEXT"
                                        handleClick={() => changeCurrentStep(1)}
                                        extraStyle="py-2 px-16"
                                    />
                                </div>
                            ))
                        }
                        {
                            (currentStep.stepObject.customFooter && (
                                <div className="py-8"><FooterForm /> </div>
                            ))
                        }
                        {(currentStep.step !== 0 && !currentStep.stepObject.customFooter) && (<i className="fas fa-caret-left absolute left-4 xl:left-20 cursor-pointer text-main text-2xl top-72 md:top-80" onClick={() => changeCurrentStep(-1)}></i>)}
                    </section>
                )
            }
        </>
    )
}

export default Form
