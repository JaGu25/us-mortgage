
type PropertyUse = 'Primary Residence' | 'Secondary Home' | 'Investment Property' | ''
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
    first_name: string
    last_name: string
    email:string
    phone_number?: any
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
    first_name: '',
    last_name: '',
    email:'',
    phone_number: null,
    password: '',
    completed: false
}