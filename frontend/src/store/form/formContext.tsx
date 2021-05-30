import React, { useReducer } from 'react'
import FormReducer from './formReducer'
import { types } from '../types'

interface Props {
    children: React.ReactNode
}

interface IFormObject {
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

const initialForm: IFormObject = {
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

const form: IFormObject = localStorage.getItem('form') ? JSON.parse(localStorage.getItem('form') ?? '{}') : null

const initialState: IFormObject = form || initialForm;

interface IForm {
    form: IFormObject,
    updateForm: (fields: any) => void,
}

export const FormContext = React.createContext<IForm>({
    form: initialState,
    updateForm: () => { },
})

const FormProvider = ({ children }: Props): any => {

    const [state, dispatch] = useReducer(FormReducer, initialState)

    const updateForm = (field: any): void => {
        dispatch({
            type: types.FORM_UDPATE_FIELD,
            payload: field
        })
    }

    return (
        <FormContext.Provider
            value={{
                form: state,
                updateForm
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider
