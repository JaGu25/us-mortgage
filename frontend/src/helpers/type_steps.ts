import { ISteps } from './interfaces'
import StepMoneyNeed from "../components/main/steps/commercial/StepMoneyNeed"
import StepResidentialLoans from "../components/main/steps/residential/StepResidentialLoans"
import StepBusinessOwn from "../components/main/steps/commercial/StepBusinessOwn"
import StepFinanceFor from "../components/main/steps/commercial/StepFinanceFor"
import StepWhenStartBusiness from "../components/main/steps/commercial/StepWhenStartBusiness"
import StepAnnualRevenue from "../components/main/steps/commercial/StepAnnualRevenue"
import StepCreditProfile from "../components/main/steps/commons/StepCreditProfile"
import StepNameBusiness from "../components/main/steps/commercial/StepNameBusiness"
import StepBusinessCode from "../components/main/steps/commercial/StepBusinessCode"
import StepProfileInfo from "../components/main/steps/commons/StepProfileInfo"
import StepEmailAddress from "../components/main/steps/commons/StepEmailAddress"
import StepBestWayReachYou from "../components/main/steps/commercial/StepBestWayReachYou"
import StepConfirmation from "../components/main/steps/commons/StepConfirmation"
import StepHomeDescription from "../components/main/steps/residential/StepHomeDescription"
import StepPropertyUse from "../components/main/steps/residential/StepPropertyUse"
import StepFirstTimeBuyer from "../components/main/steps/residential/StepFirstTimeBuyer"
import StepPlanPurchase from "../components/main/steps/residential/StepPlanPurchase"

export const FREE_QUOTE_RESIDENTIAL: ISteps[] = [
    { component: StepBusinessOwn, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepMoneyNeed, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepFinanceFor, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepWhenStartBusiness, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepAnnualRevenue, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepCreditProfile, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepNameBusiness, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepBusinessCode, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepProfileInfo, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepEmailAddress, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepBestWayReachYou, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepConfirmation, showProgressBar: true, showNextButton: false, isCompleted: false },
]


export const FREE_QUOTE_BUSINESS: ISteps[] = [
    { component: StepBusinessOwn, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepMoneyNeed, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepFinanceFor, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepWhenStartBusiness, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepAnnualRevenue, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepCreditProfile, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepNameBusiness, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepBusinessCode, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepProfileInfo, showProgressBar: true, showNextButton: true, isCompleted: false },
]


export const LOAN_BUSINESS: ISteps[] = [
    { component: StepBusinessOwn, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepMoneyNeed, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepFinanceFor, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepWhenStartBusiness, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepAnnualRevenue, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepCreditProfile, showProgressBar: true, showNextButton: false, isCompleted: false },
    { component: StepNameBusiness, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepBusinessCode, showProgressBar: true, showNextButton: true, isCompleted: false },
    { component: StepProfileInfo, showProgressBar: true, showNextButton: true, isCompleted: false },
]