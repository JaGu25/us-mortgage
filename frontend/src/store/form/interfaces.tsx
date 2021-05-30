

export interface IFormObject {
    type: string,
    business_own: string
    money_need: string
    finance_for: string
    month_start: string
    yeart_start: string
    annual_revenue: string
    credit_profile: string
    business_name: string
    business_code: string
    first_name: string
    last_name: string
    email:string
    phone_number: string
    password: string
    completed: boolean
}

export const initialForm: IFormObject = {
    type: '',
    business_own: '',
    money_need: '',
    finance_for: '',
    month_start: '',
    yeart_start: '',
    annual_revenue: '',
    credit_profile: '',
    business_name: '',
    business_code: '',
    first_name: '',
    last_name: '',
    email:'',
    phone_number: '',
    password: '',
    completed: false
}