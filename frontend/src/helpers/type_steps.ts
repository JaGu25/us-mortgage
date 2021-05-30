import StepMoneyNeed from "../components/main/steps/commercial/StepMoneyNeed"
import StepResidentialLoans from "../components/main/steps/residential/StepResidentialLoans"
import StepBusinessOwn from "../components/main/steps/commercial/StepBusinessOwn"
import { ISteps } from './interfaces'
import StepFinanceFor from "../components/main/steps/commercial/StepFinanceFor"
import StepWhenStartBusiness from "../components/main/steps/commercial/StepWhenStartBusiness"
import StepAnnualRevenue from "../components/main/steps/commercial/StepAnnualRevenue"
import StepCreditProfile from "../components/main/steps/commons/StepCreditProfile"
import StepNameBusiness from "../components/main/steps/commercial/StepNameBusiness"
import StepBusinessCode from "../components/main/steps/commercial/StepBusinessCode"
import StepFullName from "../components/main/steps/commons/StepFullName"
import StepEmailAddress from "../components/main/steps/commons/StepEmailAddress"
import StepBestWayReachYou from "../components/main/steps/commercial/StepBestWayReachYou"
import StepConfirmation from "../components/main/steps/commons/StepConfirmation"

export const CommercialSteps: ISteps[] = [
    { component: StepBusinessOwn, showProgressBar: true, isCompleted: false },
    { component: StepMoneyNeed, showProgressBar: true, isCompleted: false },
    { component: StepFinanceFor, showProgressBar: true, isCompleted: false },
    { component: StepWhenStartBusiness, showProgressBar: true, isCompleted: false },
    { component: StepAnnualRevenue, showProgressBar: true, isCompleted: false },
    { component: StepCreditProfile, showProgressBar: true, isCompleted: false },
    { component: StepNameBusiness, showProgressBar: true, isCompleted: false },
    { component: StepBusinessCode, showProgressBar: true, isCompleted: false },
    { component: StepFullName, showProgressBar: true, isCompleted: false },
    { component: StepEmailAddress, showProgressBar: true, isCompleted: false },
    { component: StepBestWayReachYou, showProgressBar: true, isCompleted: false },
    { component: StepConfirmation, showProgressBar: true, isCompleted: false },
]


export const ResidentialSteps: ISteps[] = [
    {   component: StepResidentialLoans, showProgressBar: false, isCompleted: false }
]