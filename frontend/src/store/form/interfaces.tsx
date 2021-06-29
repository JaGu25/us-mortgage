
type PropertyUse = 'Primary Home' | 'Secondary Home' | 'Investment Property' | ''
type FirstTimeBuyer = "yes" | "no" | ''

export interface IFormObject {
    type: string,
    business_own: string
    money_need: string
    finance_for: string
    month_start: string
    yeart_start: string
    annual_revenue: string
    residential_loans: string,
    home_description: string,
    property_use: PropertyUse,
    plan_to_purchase: string
    first_time_buyer: FirstTimeBuyer,
    credit_profile: string
    business_name: string
    business_code: string
    currently_employed: string
    full_name: string
    email:string
    phone_number?: any
    estimated_value_property?: number
    estimated_purchase_price: number,
    down_payment: number,
    morgate_balance?: number
    additional_cash: string
    want_to_refinance: string
    password: string
    completed: boolean
}

export let form: IFormObject = {
    type: '',
    business_own: '',
    money_need: '',
    finance_for: '',
    month_start: '',
    yeart_start: '',
    annual_revenue: '',
    residential_loans: '',
    home_description: '',
    property_use: '',
    plan_to_purchase: '',
    first_time_buyer: '',
    credit_profile: '',
    currently_employed: '',
    business_name: '',
    business_code: '',
    full_name: '',
    email:'',
    phone_number: null,
    estimated_value_property: 0,
    estimated_purchase_price: 0,
    down_payment: 0,
    want_to_refinance: '',
    morgate_balance: 50,
    additional_cash: '',
    password: '',
    completed: false
}