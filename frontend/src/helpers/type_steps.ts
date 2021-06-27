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
import StepBestWayReachYou from "../components/main/steps/commercial/StepBestWayReachYou"
import StepConfirmation from "../components/main/steps/commons/StepConfirmation"
import StepHomeDescription from '../components/main/steps/residential/StepHomeDescription'
import StepPropertyUse from '../components/main/steps/residential/StepPropertyUse'
import StepFirstTimeBuyer from '../components/main/steps/residential/StepFirstTimeBuyer'
import StepPlanPurchase from '../components/main/steps/residential/StepPlanPurchase'
import StepEmailSended from '../components/main/steps/commons/StepEmailSended'
import StepEstimatedPurchase from '../components/main/steps/commercial/StepEstimatedPurchase'
import StepValueOfProperty from '../components/main/steps/commercial/StepValueOfProperty'
import StepCurrentlyEmployed from '../components/main/steps/commercial/StepCurrentlyEmployed'
import StepMortgageBalance from '../components/main/steps/commercial/StepMortgageBalance'
import StepWantToRefinance from '../components/main/steps/commercial/StepWantToRefinance'
import StepAdditionalCash from '../components/main/steps/commercial/StepAdditionalCash'
import StepDownPayment from '../components/main/steps/commercial/StepDownPayment'

export const FREE_QUOTE_RESIDENTIAL: ISteps[] = [
    { component: StepResidentialLoans, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false, customWay: true, field: "residential_loans" },
    { component: StepHomeDescription, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepPropertyUse, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false, customWay: true, field: "property_use" },
    { component: StepPlanPurchase, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepEstimatedPurchase, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepCreditProfile, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepCurrentlyEmployed, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepBusinessCode, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepProfileInfo, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepEmailSended, showProgressBar: false, showNextButton: false, isCompleted: false, customFooter: true },
]

export const FREE_QUOTE_RESIDENTIAL_PRIMARY: ISteps[] = [
    { component: StepResidentialLoans, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false, customWay: true, field: "residential_loans" },
    { component: StepHomeDescription, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepPropertyUse, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false, customWay: true, field: "property_use" },
    { component: StepFirstTimeBuyer, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepPlanPurchase, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepEstimatedPurchase, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepDownPayment, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepCreditProfile, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepCurrentlyEmployed, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepBusinessCode, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepProfileInfo, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepEmailSended, showProgressBar: false, showNextButton: false, isCompleted: false, customFooter: true },
]

export const FREE_QUOTE_RESIDENTIAL_SECONDARY: ISteps[] = [
    { component: StepResidentialLoans, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false, customWay: true, field: "residential_loans" },
    { component: StepHomeDescription, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepPropertyUse, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false , customWay: true, field: "property_use"},
    { component: StepPlanPurchase, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepEstimatedPurchase, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepDownPayment, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepCreditProfile, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepCurrentlyEmployed, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepBusinessCode, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepProfileInfo, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepEmailSended, showProgressBar: false, showNextButton: false, isCompleted: false, customFooter: true },
]

export const FREE_QUOTE_RESIDENTIAL_CASH_OUT: ISteps[] = [
    { component: StepResidentialLoans, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false, customWay: true, field: "residential_loans" },
    { component: StepHomeDescription, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepPropertyUse, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepValueOfProperty, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepMortgageBalance, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepWantToRefinance, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepAdditionalCash, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepCurrentlyEmployed, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepBusinessCode, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepProfileInfo, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepEmailSended, showProgressBar: false, showNextButton: false, isCompleted: false, customFooter: true },
]

export const FREE_QUOTE_BUSINESS: ISteps[] = [
    { component: StepBusinessOwn, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepMoneyNeed, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepFinanceFor, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepWhenStartBusiness, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepAnnualRevenue, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepCreditProfile, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepNameBusiness, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepBusinessCode, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepProfileInfo, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
]

export const LOAN_BUSINESS: ISteps[] = [
    { component: StepBusinessOwn, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepMoneyNeed, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepFinanceFor, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepWhenStartBusiness, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepAnnualRevenue, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepCreditProfile, showProgressBar: true, showNextButton: false, isCompleted: false, customFooter: false },
    { component: StepNameBusiness, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepBusinessCode, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
    { component: StepProfileInfo, showProgressBar: true, showNextButton: true, isCompleted: false, customFooter: false },
]